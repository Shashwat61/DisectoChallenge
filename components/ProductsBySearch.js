import { Image } from "@chakra-ui/image"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { fetchProductById } from "../redux/actions/singleproduct.actions"

function ProductsBySearch({id, title, image}) {
    // console.log(id, title, image)
    const router=useRouter()
    const dispatch=useDispatch()
    function handleClick(){
        dispatch(fetchProductById(id))
        router.push(`/${id}`)
    }
    return (
        <Box cursor="pointer" onClick={handleClick} m="4px" p="4px" borderBottom="1px">
            <Flex justifyContent="space-between" alignItems="center">
                <Box>
                    <Heading as='h6' size='sm' >{title}</Heading>
                </Box>
                <Box>
                    <Image  h="50px" w="50px" objectFit="contain" src={image} alt={title} />
                </Box>
            </Flex>
        </Box>
    )
}

export default ProductsBySearch
