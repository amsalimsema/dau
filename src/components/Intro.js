import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import big from '../Images/logo801.png'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Main = styled.div`
  font-family: 'Georama', sans-serif;
  cursor: pointer;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url('https://images.ctfassets.net/wlgvz2z255oc/1zNsMH0Hnhua2HxxDoI9WV/e2d384ee837d7f8042779ce6adb54a71/deskkids.jpg?w=2200&h=1700&fm=jpg&fl=progressive');
`
const Morph = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  //   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
`

const Wrapper = styled(Container)`
  width: 100vw;
`
const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Inner = styled.div`
  color: #000000;
  text-align: center;
  padding-top: 3rem;

  > h1 {
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    > h1 {
      font-size: 4rem;
    }
    img {
      // width: auto;
      // height: auto;
      width: 115px;
      height: 115px;
    }
  }
  @media screen and (min-width: 321px) and (max-width: 767px) {
    img {
      height: 100px;
      width: 100px;
    }
  }
  @media screen and (max-width: 321px) {
    img {
      display: none;
    }
  }
`
const Chev = styled(BsChevronDoubleDown)`
  margin-top: 2rem;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.8s all linear;
  &:hover {
    transform: translateY(5px);
    color: #fff;
  }
`

export default function Intro() {
  return (
    <>
      <Main>
        <Morph>
          <Wrapper>
            <WrapperBox>
              <Inner>
                <p>
                  <img src={big} alt="big" />
                </p>
                <h1>DANCERS' ASSOCIATION UGANDA</h1>
                <h1 style={{ fontFamily: "'Ephesis', cursive" }}>
                  -&nbsp;Transcending dancing into a profession&nbsp;-
                </h1>
                <Chev />
              </Inner>
            </WrapperBox>
          </Wrapper>
        </Morph>
      </Main>
    </>
  )
}
