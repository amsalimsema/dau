import React, { useState } from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Main } from './Founders'

const Wrapper = styled(Container)`
  padding: 1rem 0;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: none;
`

export default function Footer() {
  // form validation
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <>
      <Main>
        <Wrapper>
          <h1 style={{ color: 'snow', textAlign: 'center' }}>Get in touch.</h1>

          <Row>
            <Col md={6}></Col>
            <Col md={6}>
              {/* form */}
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                name="health"
                target="_self"
                action=""
                method="POST"
                id="health_form"
                autoComplete="off"
                style={{ color: '#fff', padding: '0 1rem 0 1rem' }}
              >
                <input type="hidden" name="_next" value="" />
                <input type="hidden" name="_captcha" value="false" />
                <Form.Row>
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Name*:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Full name"
                      required
                      name="name"
                    />

                    <Form.Control.Feedback type="invalid">
                      Please provide your name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Email (optional):</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      name="email"
                    />

                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Phone*:</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Your number"
                      required
                      name="phone"
                      pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                    />

                    <Form.Control.Feedback type="invalid">
                      Please provide a valid phone number eg. &nbsp; 0782442281
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Message*:</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Type message here..."
                      required
                      name="message"
                    />

                    <Form.Control.Feedback type="invalid">
                      Please type your message
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
              {/* end form */}
            </Col>
          </Row>

          <p className="text-center text-white pt-5">
            &copy;{new Date().getFullYear()}&nbsp;Dancers' Association of
            Uganda.
          </p>
        </Wrapper>
      </Main>
    </>
  )
}
