import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {useRecoilState} from "recoil"
import { authData } from './Global/Global'

const Header = () => {
    const [userName, setUserName] = useRecoilState(authData)

  return (
    <Component>
        <Wrapper>
            <Nav>
            <Logo src="/asset/logo.png"/>

                <NavHolder>Home</NavHolder>
                <NavHolder><Link to="/product" style={{textDecoration:"none", color:"#fff"}}>Products</Link></NavHolder>
                <ButtonHold>
                <Button onClick={() => {
                    setUserName(null!)
                }}>SignUp</Button>
                </ButtonHold>
            </Nav>

        </Wrapper>
        
    </Component>
  )
}

export default Header

const Logo = styled.img`
height: 60px;
width: 60px;
object-fit: contain;
`

const ButtonHold = styled.div`
    
    
`
const Button = styled.button`
height: 50px;
width: 150px;
background: #c9eb08;
color: #fff;
outline: none;
border: none;
border-radius: 5px;
`
const NavHolder = styled.div`
display: flex;
`

const Nav = styled.div`
display: flex;
justify-content: space-between;
height: 70px;
width: 100vw;
align-items: center;
height: 70px;
width: 90vw;
`
const Wrapper  = styled.div`
height: 70px;
width: 90vw;
display: flex;
justify-content: space-between;
align-items: center;
justify-content: center;

`
const Component  = styled.div`
height: 70px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background:#123456;
color: #fff;
`