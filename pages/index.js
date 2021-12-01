import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/product.actions'
import styles from '../styles/Home.module.css'
import { Container, Box } from '@chakra-ui/react'
import SearchProduct from '../components/SearchProduct'
import MainContent from '../components/MainContent'

export default function Home() {
   const dispatch=useDispatch()
   
   useEffect(()=>{
      dispatch(fetchProducts())      
   },[dispatch])

  return (
    <div>
      <Container maxW='container.xl' p='0'  h='100vh'>
      <SearchProduct/>
        <Box>
          <MainContent/>
        </Box>
      </Container>
    </div>
  )
}
