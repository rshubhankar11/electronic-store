import React from "react";
import Base from "./../components/Base";
import {
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
import { registerUser } from "../services/user.service";
import { NavLink } from "react-router-dom";

const Signup = () => {
  //* Here we will store the data
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    about: "",
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      about: "",
    });

    setMyError({
      isError: false,
      errorData: null,
    });
  };

  // To save the user on submit
  const submitForm = (event) => {
    event.preventDefault();
    // console.log(data);

    // Validations
    if (data.name === undefined || data.name.trim() === "") {
      toast.error("Name is required");
    }
    if (data.password === undefined || data.password.trim() === "") {
      toast.error("password required");
    }
    if (
      data.confirmPassword === undefined ||
      data.confirmPassword.trim() === ""
    ) {
      toast.error("confirm Password required");
    }
    if (data.email === undefined || data.email.trim() === "") {
      toast.error("Email required");
    }
    if (data.password !== data.confirmPassword) {
      toast.error("Password shuld be same as confirm password");
    }

    // resgistering user

    setLoading(true);
    registerUser(data)
      .then((userData) => {
        console.log(userData);
        toast.success("User created");
        clearData();
      })
      .catch((error) => {
        console.clear();
        console.log(error);
        setMyError({
          isError: true,
          errorData: error,
        });

        toast.error("Somthing went wrong !!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const registerForm = () => {
    return (
      <Container>
        <Row>
          {/* In a singel row we will get 12 grids 
            If there is single col then it will take all the 12 grids
          and it will be equaliy devide by all col by default
          */}
          {/* {JSON.stringify(data)} */}
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
                  <h3 className="text-center mt-2 text-muted">REGISTER HERE</h3>
                </div>
                <Form onSubmit={submitForm}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      onChange={(event) => {
                        handleChange(event, "name");
                      }}
                      value={data.name}
                      isInvalid={myError?.errorData?.response?.data?.name}
                    />
                    <Form.Control.Feedback type="inValid">
                      {myError.errorData?.response?.data?.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(event) => {
                        handleChange(event, "email");
                      }}
                      value={data.email}
                      isInvalid={myError?.errorData?.response?.data?.email}
                    />
                    <Form.Control.Feedback type="inValid">
                      {myError.errorData?.response?.data?.email}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
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
                      isInvalid={myError?.errorData?.response?.data?.password}
                    />
                    <Form.Control.Feedback type="inValid">
                      {myError.errorData?.response?.data?.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      onChange={(event) => {
                        handleChange(event, "confirmPassword");
                      }}
                      value={data.confirmPassword}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <div>
                      <Form.Label>Select Gender</Form.Label>
                    </div>
                    <Form.Check
                      inline
                      label="Male"
                      name="group1"
                      type={"radio"}
                      id={"male"}
                      value={"Male"}
                      onChange={(event) => {
                        handleChange(event, "gender");
                      }}
                      checked={data.gender === "Male"}
                    />
                    <Form.Check
                      inline
                      label="Female"
                      name="group1"
                      type={"radio"}
                      id={"female"}
                      value={"Female"}
                      onChange={(event) => {
                        handleChange(event, "gender");
                      }}
                      checked={data.gender === "Female"}
                    />
                  </Form.Group>

                  <Form.Group className="md-3">
                    <Form.Label>Write somthing about yourself</Form.Label>
                    <Form.Control
                      as={"textarea"}
                      rows={"6"}
                      placeholder="Start writing"
                      onChange={(event) => {
                        handleChange(event, "about");
                      }}
                      value={data.about}
                      isInvalid={myError?.errorData?.response?.data?.about}
                    ></Form.Control>
                    <Form.Control.Feedback type="inValid">
                      {myError.errorData?.response?.data?.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Container className="text-center">
                    <p>
                      Already registtered!! <NavLink to="/login">Login</NavLink>
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
                      <span hidden={loading}>Register</span>
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
    <Base title="Electro Store Signup" description={null}>
      {registerForm()}
    </Base>
  );
};

export default Signup;
