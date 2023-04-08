import React from "react";
import Base from "./../components/Base";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../services/user.service";
import { NavLink } from "react-router-dom";

const Login = () => {
  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let [loading, setLoading] = useState(false);

  // *This will handel the change
  const handleChange = (event, property) => {
    console.log(event);
    setData({
      ...data,
      [property]: event.target.value,
    });
  };

  // !To handle error
  let [myError, setMyError] = useState({
    isError: false,
    errorData: null,
  });
  // *This will cleare the data
  const clearData = () => {
    setData({
      email: "",
      password: "",
    });

    setMyError({
      isError: false,
      errorData: null,
    });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    if (data.email === undefined || data.email.trim() === "") {
      toast.error("Email required");
    }
    if (data.password === undefined || data.password.trim() === "") {
      toast.error("password required");
    }
    setLoading(true);
    // login user api call
    loginUser(data)
      .then((userData) => {
        console.log(userData);
        toast.success("Loged in");
      })
      .catch((error) => {
        console.clear();
        console.log(error);
        setMyError({
          isError: true,
          errorData: error,
        });

        toast.error(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loginForm = () => {
    return (
      <Container>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Card
              className="my-3 shadow"
              style={{
                position: "relative",
                top: -60,
              }}
            >
              <Card.Body>
                <div>
                  <Container className="text-center">
                    <img
                      src="title_log.png"
                      alt="my logo"
                      width={60}
                      height={60}
                    />
                  </Container>
                  <h3 className="text-center mt-2 text-muted">LOGIN HERE</h3>
                </div>
                <Alert
                  onClose={() => {
                    setMyError({
                      isError: false,
                      errorData: null,
                    });
                  }}
                  dismissible
                  variant="danger"
                  show={myError.isError}
                >
                  {myError?.errorData?.response?.data?.message}
                </Alert>
                <Form onSubmit={submitLogin}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter here"
                      onChange={(event) => {
                        handleChange(event, "email");
                      }}
                      value={data.email}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      onChange={(event) => {
                        handleChange(event, "password");
                      }}
                      value={data.password}
                    />
                  </Form.Group>

                  <Container className="text-center">
                    <p>
                      Not registered ! <NavLink to="/signup">signup</NavLink>
                    </p>
                  </Container>
                  <Container className="text-center">
                    <Button variant="success" size="sm" type="submit">
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        hidden={!loading}
                      />
                      <span hidden={!loading}>Loading...</span>
                      <span hidden={loading}>Login</span>
                    </Button>
                    <Button
                      className="ms-2"
                      variant="danger"
                      size="sm"
                      onClick={clearData}
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  return (
    <Base title="Login Now" description={null}>
      {loginForm()}
    </Base>
  );
};

export default Login;
