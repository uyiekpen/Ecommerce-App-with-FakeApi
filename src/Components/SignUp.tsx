import React, { useState } from 'react'
import styled from 'styled-components'
import { authData } from './Global/Global'
import {useRecoilState,useRecoilValue} from "recoil"

const SignUp = () => {

    const [userName, setUserName] = useRecoilState(authData)
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")

    const useMe = useRecoilValue(authData)

    const updateState = () =>{
        setUserName({name: user, email: user})
    }

    console.log("Auth State", userName)
  return (
    <Container>
        <Wrapper>
        <Card>
            <Logo src="/asset/logo.png" />
            <InputHolder>
                <Input 
                placeholder='UserName' value={user} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                   setUser(e.target.value)
                }}/>
                <Input 
                placeholder='Email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                   setEmail(e.target.value)
                }}/>

            </InputHolder>
            <Button onClick={updateState}>Auth in</Button>
        </Card>
        </Wrapper>
      
    </Container>
  )
}

const Logo = styled.img`
height: 60px;
width: 150px;
object-fit: contain;
`


const Button = styled.button`
margin-top: 20px;
height: 50px;
width: 150px;
background: #123456;
color: #fff;
outline: none;
border: none;
border-radius: 5px;
`


const Input = styled.input`
height: 50px;
width: 300px;
margin-top: 20px;
::placeholder{
    padding-right: 20px;
    font-family: poppins;
}
`
const InputHolder = styled.div`
display: flex;
flex-direction: column;
`


const Card = styled.div`
color:red;
height: 500px;
width: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: whitesmoke;
font-family: poppins;

`

const Container = styled.div`
height: 100vh;
width: 100vw;
display: contents;
justify-content: center;
align-items: center;
background-color: whitesmoke;
margin-top: 70px;
`
export default SignUp
