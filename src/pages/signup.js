import React from "react";
import Base from "./../components/Base";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Signup = () => {
  const registerForm = () => {
    return (
      <Container>
        <Row>
          {/* In a singel row we will get 12 grids 
            If there is single col then it will take all the 12 grids
          and it will be equaliy devide by all col by default
          */}
          <Col sm={{ span: 8, offset: 2 }}>
            <Card className="my-3 shadow">
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
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Reenter Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
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
                      id={"gender"}
                    />
                    <Form.Check
                      inline
                      label="Female"
                      name="group1"
                      type={"radio"}
                      id={"gender"}
                    />
                  </Form.Group>

                  <Form.Group className="md-3">
                    <Form.Label>Write somthing about yourself</Form.Label>
                    <Form.Control
                      as={"textarea"}
                      rows={"6"}
                      placeholder="Start writing"
                    ></Form.Control>
                  </Form.Group>
                </Form>
                <Container className="text-center">
                  <p>
                    Already registtered!! <a href="/">Login</a>
                  </p>
                </Container>
                <Container className="text-center">
                  <Button variant="success" size="sm">
                    Register
                  </Button>
                  <Button className="ms-2" variant="danger" size="sm">
                    Reset
                  </Button>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  return <Base>{registerForm()}</Base>;
};

export default Signup;
