import { Image } from "@chakra-ui/image"
import { Box, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/layout"
import { ArrowLeftIcon, LinkIcon } from "@heroicons/react/solid"
import axios from "axios"
import { useSelector } from "react-redux"
import Reviews from "../components/Reviews"
import SearchProduct from "../components/SearchProduct"
import Link from 'next/link'

function SingleProduct({productId}) {
    const {product:{id, title, price, description, image, category}, loading} = useSelector(state=>state.singleProduct)
    return (
        <Container maxW="container.xl"  p='0' h='100vh'>
            <SearchProduct/>
          {loading?<p>Loading...</p>:(
              <>

              <Box p="16px" >
              <Link href="/"><a><ArrowLeftIcon height="20px" width="20px" /></a></Link>
              </Box>
              <Box mt="16px" p="8px" width="inherit">
                  <Grid templateColumns="repeat(5, 1fr)" >
                      <GridItem colSpan={2}>
                          <Box w="full">
                          <Image src={image} alt={title} w="full" height="16em"  objectFit="contain" />
                          </Box>
                      </GridItem>
                      <GridItem colSpan={3}>
                          <Box p="8px">
                          <Heading as='h4' size='base' isTruncated>
                                {title}
                          </Heading>
                            <Text py="8px">
                               {description}
                            </Text>
                            <Text fontWeight="500">Rs.{Math.floor(price)}</Text>
                            {/* reviews */}
                            <Reviews id={productId} />
                            </Box>

                      </GridItem>

                  </Grid>          
              </Box>
              </>
          )}  

        </Container>
    )
}

export default SingleProduct

export async function getServerSideProps(context){
    return {
        props:{
            productId:context.query.id
        }
    }
}
// show product to be a persisted state

// export async function getServerSideProps(context){
//     const id=context.query.id
//     const product=await axios.get(`https://fakestoreapi.com/products/${id}`)
//     const data=product.data
//     console.log(data)

//     return {
//         props:{
//             data
//         }
//     }
// }