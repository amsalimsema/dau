import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import bg from '../Images/pattern.svg'
import team from '../Images/team.jpg'
import { Tube, Tsup, Gram, FB } from './Nav'

const Main = styled.div`
  font-family: 'Georama', sans-serif;
  cursor: pointer;
  //   position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${bg});
  background-color: #182330;
`

const Wrapper = styled(Container)`
  padding: 5rem 0;
`
const Box = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
  margin: auto;
  text-align: center;
  > h5,
  p {
    color: grey;
  }
  > .title {
    color: grey;
    font-size: 18px;
  }
  > a {
    text-decoration: none;
    color: black;
  }
`

export default function Founders() {
  return (
    <>
      <Main>
        <Wrapper>
          <Row>
            <Col md={3}>
              <Box>
                <img src={team} alt="team" style={{ width: '100%' }} />
                <h5>Nuruh Nankanja</h5>
                <p className="title">Co-Founder</p>
                <p>Professional Dancer</p>
                <div style={{ padding: '20px 0' }}>
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
              </Box>
            </Col>
            <Col md={3}>
              <Box>
                <img src={team} alt="team" style={{ width: '100%' }} />
                <h5>Edgar Matte</h5>
                <p className="title">Co-Founder</p>
                <p>Professional Dancer</p>
                <div style={{ padding: '20px 0' }}>
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
              </Box>
            </Col>
            <Col md={3}>
              <Box>
                <img src={team} alt="team" style={{ width: '100%' }} />
                <h5>Joseph Segawa</h5>
                <p className="title">Co-Founder</p>
                <p>Professional Dancer</p>
                <div style={{ padding: '20px 0' }}>
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
              </Box>
            </Col>
            <Col md={3}>
              <Box>
                <img src={team} alt="team" style={{ width: '100%' }} />
                <h5>Dauda Kavuma</h5>
                <p className="title">Co-Founder</p>
                <p>Founder,Inspire Ghetto Kids</p>
                <div style={{ padding: '20px 0' }}>
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
              </Box>
            </Col>
          </Row>
        </Wrapper>
      </Main>
    </>
  )
}
