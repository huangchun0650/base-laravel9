import React from "react";
import backImg from "../assets/img/photo-1431578500526-4d9613015464.jpeg";
import { Inertia } from '@inertiajs/inertia'
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

const getPosition = (position) => {
  return Inertia.get(`/position/${position}`)
}

function User(user) {
  console.log(user)
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">使用者資料</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="2">
                      <Form.Group>
                        <label>公司別 (disabled)</label>
                        <Form.Control
                          defaultValue={user.companyCode}
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>職級</label>
                        <Form.Control
                          defaultValue={getPosition(user.position)}
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>名稱</label>
                        <Form.Control
                          defaultValue={user.name}
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email
                        </label>
                        <Form.Control
                          placeholder={user.email}
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>國家</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        >
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>城市</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label>郵政編碼</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>地址</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    更新設定
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={backImg}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={user.user_avatar_path}
                    ></img>
                    <h5 className="title">{user.name}</h5>
                  </a>
                  <p className="description">{user.email}</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
