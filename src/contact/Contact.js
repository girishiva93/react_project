import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import trekkingImg from "../home/src/image1.jpg";

import "./css/contact.css";

const Contact = () => {
  return (
    <>
      <section>
        <div className="about-hero-img">
          <img
            src={trekkingImg}
            className="hero-img"
            alt="trekking img"
            width="100%"
          />
        </div>
        <div className="container">
          <div className="about-heading">
            <h1 className="about-us-title">Contact us</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="fullName"
                    placeholder="Enter Full Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="subject"
                    name="subject"
                    placeholder="Enter Title"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows="6" name="address" />
                </Form.Group>

                <Button className="btn btn-warning" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={5}>
              <div className="help-section">
                <h3>Need help?</h3>
                <p>
                  Generally, we respond to all emails within 12 hours and would
                  love to communicate with you. Please feel free to call, send
                  us an email, get in touch through our contact or inquiry form.
                </p>
              </div>
              <div className="more-info">
                <h3>Company Info - Nepal</h3>
                <p>Nepal Gokarneshwore 8,</p>
                <p>Aarubari Phone : +977 9851031422</p>
                <p>Email : office@iceland-trekking.com</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Contact;
