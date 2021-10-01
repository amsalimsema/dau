import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import big from '../Images/small.png'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Wrapper = styled(Container)`
  width: 100vw;
`
const Chev = styled(BsChevronDoubleDown)`
  margin-top: 2rem;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.8s all linear;
  &:hover {
    transform: translateY(5px);
    color: #000000;
  }
`

export default function Landing() {
  return (
    <div className="main">
      <section className="morph">
        <Wrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <div
              style={{
                color: 'white',
                textAlign: 'center',
                paddingTop: '3rem',
              }}
              className="heading"
            >
              <p className="hideOnSm">
                <img src={big} alt="big" />
              </p>
              <h1 style={{ fontWeight: '400' }}>DANCERS' ASSOCIATION UGANDA</h1>
              <h1 style={{ fontFamily: "'Ephesis', cursive" }}>
                -&nbsp;Transcending dancing into a profession&nbsp;-
              </h1>
              <Chev />
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  )
}
