import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import bg from '../Images/pattern.svg'
import dauda from '../Images/dauda.jpg'
import nunu from '../Images/nunu.jpg'
import wembley from '../Images/wembley.jpg'
import jose from '../Images/jose.jpg'
import eddy from '../Images/eddy.jpg'
import { Tube, Tsup, Gram, FB } from './Nav'

export const Main = styled.div`
  font-family: 'Georama', sans-serif;
  cursor: pointer;
  //   position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${bg});
  background-color: #182330;
`

export const Wrapper = styled(Container)`
  padding: 5rem 0;
  @media screen and (max-width: 650px) {
    width: 95vw;
  }
  > .info {
    > h1,
    h5 {
      color: snow;
    }
    > p {
      color: gray;
      font-size: 1.3rem;
    }
  }
`
const Box = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;

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
  @media screen and (max-width: 650px) {
    margin-bottom: 2rem;
  }
`

export default function Founders() {
  return (
    <>
      <Main>
        <Wrapper>
          <div className="info">
            <h1>Dancers' Association of Uganda (DAU)</h1>
            <hr style={{ backgroundColor: 'gray' }} />
            <p>
              DAU is a non-profit organization registered and established in
              2021 to unite all professional dancers in Uganda with a common
              goal of providing aplatform to express themselves with one voice.
              Membership is open to all people who are desirous of joining this
              organization provided they subscribe to the objectives of the
              association. DAU is heavily affiliated to National Cultural
              Forum(NCF).
            </p>
            <h5>Founding Members.</h5>
            <p>
              DAU is founded by professional dancers, managers who are all
              deeply rooted in the dance industry and are mutually pushing for
              the advancement of the profession to a greater audience.
            </p>
          </div>
          <Row>
            <Col md={3}>
              <Box>
                <img
                  src={nunu}
                  alt="nunu"
                  style={{ width: '100%', marginBottom: '0.5rem' }}
                />
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
                <img
                  src={wembley}
                  alt="wembley"
                  style={{ width: '100%', marginBottom: '0.5rem' }}
                />
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
                <img
                  src={jose}
                  alt="jose"
                  style={{ width: '100%', marginBottom: '0.5rem' }}
                />
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
                <img
                  src={dauda}
                  alt="dauda"
                  style={{ width: '100%', marginBottom: '0.5rem' }}
                />
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

          <Row>
            <Col md={3}>
              <Box>
                <img
                  src={eddy}
                  alt="eddy"
                  style={{ width: '100%', marginBottom: '0.5rem' }}
                />
                <h5>Moses Kyeyune</h5>
                <p className="title">Co-Founder</p>

                <div style={{ padding: '20px 0' }}>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
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
