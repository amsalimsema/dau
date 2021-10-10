import React, { useState } from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Main } from './Founders'
import { FaMapMarker, FaPhoneAlt } from 'react-icons/fa'
import { Gram, Tube, Tsup, FB } from './Nav'

const Wrapper = styled(Container)`
  padding: 2rem 0 1rem 0;
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

          <Row className="pt-3">
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
                style={{ color: '#fff', padding: '0 1rem 1rem 1rem' }}
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
            <Col md={6}>
              <div
                className="text-center"
                style={{
                  color: '#fff',
                  fontSize: '1.125rem',
                  lineHeight: '2rem',
                  paddingTop: '2rem',
                }}
              >
                <p>
                  <FaMapMarker />
                  &nbsp;&nbsp;Makindye, Barracks Zone
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next to Shell Makindye
                  Traffic Lights
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P O box 21347, kampala -
                  Uganda
                </p>

                <p>
                  <FaPhoneAlt />
                  &nbsp;&nbsp;0703 328 758
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0704 363 320
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0771 850 668
                </p>
              </div>
              <div className="text-center" style={{ padding: '3rem' }}>
                <a
                  href="https://wa.me/256760721071/?text=Hello Dau"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <Tsup style={{ width: '1.5rem', height: '1.5rem' }} />
                </a>

                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  style={{ paddingLeft: '1rem' }}
                >
                  <FB style={{ width: '1.5rem', height: '1.5rem' }} />
                </a>

                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  style={{ paddingLeft: '1rem' }}
                >
                  <Tube style={{ width: '1.5rem', height: '1.5rem' }} />
                </a>

                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  style={{ paddingLeft: '1rem' }}
                >
                  <Gram style={{ width: '1.5rem', height: '1.5rem' }} />
                </a>
              </div>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <p className="text-center text-white pt-3">
            &copy;{new Date().getFullYear()}&nbsp;Dancers' Association of
            Uganda.
          </p>
        </Wrapper>
      </Main>
    </>
  )
}
