// Grade.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Grade() {
  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    expectedGrade: '',
    explanation: '',
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions on form submission (e.g., send data to server)
    // Display a confirmation message or reset the form if needed
    console.log('Form submitted:', formData);
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

    return (
        <><Navbar expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Grade App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/report">Grade Report</Nav.Link>
              <Nav.Link as={Link} id='active' to="/grade">Missing Grade</Nav.Link>
              <Nav.Link as={Link} to="/contact">Instructor Contact</Nav.Link>
              <Nav.Link as={Link} to="/help">Help and Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar><Container className="mt-3">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Card>
                <Card.Header className="text-center">Missing Grade Form</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="courseName">
                      <Form.Label>Course Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="courseName"
                        value={formData.courseName}
                        onChange={handleInputChange}
                        required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="instructorName">
                      <Form.Label>Instructor Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="instructorName"
                        value={formData.instructorName}
                        onChange={handleInputChange}
                        required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="expectedGrade">
                      <Form.Label>Expected Grade</Form.Label>
                      <Form.Control
                        type="text"
                        name="expectedGrade"
                        value={formData.expectedGrade}
                        onChange={handleInputChange}
                        required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="explanation">
                      <Form.Label>Reason</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="explanation"
                        value={formData.explanation}
                        onChange={handleInputChange}
                        required />
                    </Form.Group>

                    <Button id='btn' className='w-100' type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container></>
       );
    }

export default Grade;
