import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Wrapper, Main } from './Founders'

export default function Work() {
  return (
    <>
      <Main>
        <Wrapper>
          <h1 style={{ color: 'snow' }}>What we do.</h1>
          <hr style={{ backgroundColor: 'gray' }} />
          <Row>
            <Col md={12} style={{ color: 'gray', fontSize: '1.3rem' }}>
              <ul>
                <li>
                  <p>
                    Unite all professional dancers in Uganda with a common goal
                    of providing a platform to express themselves with one
                    voice.
                  </p>
                </li>
                <li>
                  <p>
                    Promote and preserve the art of dance in Uganda with teh
                    sole aim of benefitting future generations.
                  </p>
                </li>
                <li>
                  <p>
                    Offer the much needed support to the members both morally,
                    financially or otherwise with the sole aim of uplifting one
                    another in the profession
                  </p>
                </li>
                <li>
                  <p>
                    Contribute towards initiatives that assist in promoting the
                    art and culture of dance along with various stakeholders.
                  </p>
                </li>
                <li>
                  <p>
                    Foster an interactive cultural community in Uganda and the
                    East African region through making connections between
                    different cultural forms including but not limited to films,
                    music, fine art, tourism, cultural sites and heritage,
                    literature and traditional spots and games.
                  </p>
                </li>
                <li>
                  <p>
                    Offer advanced training in the creative sector through
                    establishing Dance institutes and schools that will promote
                    young talented and intending dancers in Uganda.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Wrapper>
      </Main>
    </>
  )
}
