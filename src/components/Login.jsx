import React from "react";
import {Col, Container, Form, Row, Button} from "react-bootstrap";


export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
} return (
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={10}>
          <div className="card-login border-0 my-5">
            <div className="p-0">
              <Row>
                <Col lg={6} className="d-none d-lg-block bg-img">
                  <div className="bg-login-image"></div>
                </Col>
                <Col lg={6}>
                  <div className="p-5">
                    <div className="text-center">
                      <h4 className="mb-4">
                        Bienvenido a <b>CryptoApp</b>
                      </h4>
                    </div>
                    <div>
                      <Form className="h-100" onSubmit={""}>
                        <Form.Group className="mt-2" controlId="LoginEmail">
                          <Form.Control
                            onChange={""}
                            type="email"
                            placeholder="Example@gmail.com"
                            name="email"
                            className="inputCommon"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="my-3" controlId="LoginPassword">
                          <Form.Control
                            onChange={""}
                            type="password"
                            placeholder="Password"
                            minLength="6"
                            name="password"
                            className="inputCommon"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center">
                          <Button
                            className="mt-1 col-9 btnLogin "
                            type="submit"
                          >
                            Ingresar
                          </Button>
                        </Form.Group>
​
                        <button
                          className="mt-5 btn"
                          type="button"
                          onClick={() => console.log("")}
                        >
                          olvidaste tu contraseña?
                        </button>
                      </Form>
                    </div>
                    <hr />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
