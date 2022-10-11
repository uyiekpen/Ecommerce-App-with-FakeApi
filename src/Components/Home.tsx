import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProductData } from './Global/Global'
import {useRecoilValue,useRecoilState} from "recoil"

interface RatingData {
    rate: number,
    count: number
}

interface MyData {
    id : number,
    title: string,
    image :string,
    price : number,
    description: string,
    category : string,
    rating : RatingData

}

const Home = () => {
    const useMe = useRecoilValue(ProductData)
    console.log("Auth State", useMe)


 
  return (
    <Container>
        <Wrapper>
        
              {
                useMe?.map((props)=>(
                    <Card key = {props.id}>
                        <Image src={props.image}/>
                        <Text>Price:{props.title}</Text>
                        <Text>Price:₦{props.price}</Text>
                        <ButtonHold>
                            <Button >SignUp</Button>
                        </ButtonHold>
                    </Card>
                ))
              }
           
        </Wrapper>
    </Container>
  )
}

export default Home

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

const Image = styled.img`
height: 300px;
object-fit: cover;
width: 300px;
`
const Text = styled.div`
margin-left: 20px;
`


const Card = styled.div`
color:red;
text-align: center;
height: 600px;
width: 300px;
display: flex;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-top: 20px;
`

const Wrapper = styled.div`
height: 100%;
width: 90vw;
background: whitesmoke;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`


const Container = styled.div`
height: 100%;
width: 100vw;
background: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
`