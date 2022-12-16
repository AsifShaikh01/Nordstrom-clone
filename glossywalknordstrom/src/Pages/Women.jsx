import React from 'react';
import { useState , useEffect} from 'react';
import axios from "axios";
import Navbar from "../Components/Navbar"

import {Container,Card,Image,Stack,Text,CardBody,Heading,Divider,CardFooter,ButtonGroup,Button ,Grid , GridItem} from "@chakra-ui/react";
import LinkBar from '../Components/LinkBar';
import Footer from '../Components/Footer';

const Women = () => {
  const [data , setData] = useState([]);
  const getData = () =>{
    return axios.get(`https://dummyjson.com/products/category/womens-dresses`)
    .then((res)=>setData(res.data.products))
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
     getData();
  },[])
  const handleClick2 = () =>{
    return axios.get(`https://dummyjson.com/products/category/womens-dresses`)
    .then((res)=>setData(res.data.products))
    .catch((err)=>console.log(err))
  }
  const handleClick = () =>{
    return axios.get(`https://dummyjson.com/products/category/womens-shoes`)
    .then((res)=>setData(res.data.products))
    .catch((err)=>console.log(err))
  }
  const handleClick1 = () =>{
    return axios.get(`https://dummyjson.com/products/category/womens-watches`)
    .then((res)=>setData(res.data.products))
    .catch((err)=>console.log(err))
  }
 
 
 
  console.log(data)
  return (
    <>
    <Navbar/>
    <LinkBar/>
    <Divider/>
    <Text>Product List : Category : Women</Text>
    <Container maxW="2xl">
    <ButtonGroup size="xs" colorScheme="red" spacing={8} variant="ghost">
       <Button onClick={()=>{handleClick()}}>
        SHOES
       </Button>
       <Button onClick={()=>{handleClick1()}}>
        WATCHES
       </Button>
       <Button onClick={()=>{handleClick2()}}>
        WEARS
       </Button>
       
    </ButtonGroup>
    <Divider/>
    </Container>
    <div>
      {data.map((item)=>(
        <Container maxW="3xl">
         <Card
         direction={{ base: 'column', sm: 'row' }}
         overflow='hidden'
         variant='outline'
         my={5}
       >
         <Image
           objectFit='cover'
           maxW={{ base: '100%', sm: '200px' }}
           src={item.thumbnail}
           alt='Caffe Latte'
         />
       
         <Stack>
           <CardBody>
             <Heading size='md'>{item.title}</Heading>
       
             <Text py='2'>
               {item.description}
             </Text>
             <Text>
              $ {item.price}
             </Text>
           </CardBody>
       
           <CardFooter>
             <Button size="xs" variant='outline' colorScheme='yellow'>
               Add to Cart
             </Button>
           </CardFooter>
         </Stack>
       </Card>
       </Container>
      ))}
    </div>
    <Footer/>
    </>
  )
}

export default Women
