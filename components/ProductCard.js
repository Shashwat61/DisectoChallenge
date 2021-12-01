import { Image } from "@chakra-ui/image"
import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/layout"
import {ShoppingCartIcon} from '@heroicons/react/solid'
import {useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { fetchProductById } from "../redux/actions/singleproduct.actions"

function ProductCard({id, category, description, image, title, price}) {
    const router=useRouter()
    const dispatch=useDispatch()
    
    function handleClick(){
      dispatch(fetchProductById(id))     
      router.push(`/${id}`)
    }

    return (
        <Box  cursor="pointer" onClick={handleClick} border="1px" borderColor="gray.200" borderRadius="6px" m="8px" p="8px" w="250px">
            {/* upper part */}
            <Box p="8px" position="relative" >
                <Image objectPosition="center" src={image} alt={description} objectFit="contain" htmlHeight="" height="12em" htmlWidth="100%" />
                <Center position="absolute" textColor="white" fontSize="xs" fontWeight="600" bottom="0" left="0" right="0" width="max-content"  mx="auto" p="4px" borderRadius="6px"  bg="black" >{category}</Center>
            </Box>
            {/* middle part */}
            <Box my="16px">
                <Heading as='h6' size='sm' isTruncated>{title}</Heading>
                <Text noOfLines={4} fontSize="xs" pt="8px" >{description}</Text>
            </Box>
                <Divider  />
            {/* lower part */}
                <Box pt="8px">
                    <Flex alignItems="center" justifyContent="space-between">
                        <Text fontSize="sm">Rs.{Math.floor(price)}</Text>
                        <ShoppingCartIcon height="20px" width="20px" />
                    </Flex>
                </Box>
        </Box>
    )
}

export default ProductCard
