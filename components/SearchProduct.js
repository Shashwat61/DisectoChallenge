import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Text } from "@chakra-ui/layout"
import {SearchIcon} from '@heroicons/react/solid'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ProductsBySearch from "./ProductsBySearch"

function SearchProduct() {
    const {products, loading}=useSelector(state=>state.productsList)
    const [query, setQuery] = useState("")
    const [searchResult, setSearchResult] = useState([...products])
    const main=new RegExp(query, "i")
    
    useEffect(()=>{
       setSearchResult(products)
    },[products])
   

    function handleChange(e){
      setQuery(e.target.value)
    if(query.length>0){
    const res=searchResult.filter(prod=>main.test(prod.title.toLowerCase()))
    setSearchResult(res)
    }
    else if(query.length===0){setSearchResult([...products])}

    
    }

    return (
        <Box position="relative" p="8px" borderBottom="1px solid lightgray">
            <Flex border="1px" borderRadius="6px" p="4px" placeItems="center" borderColor="lightgray">
            <SearchIcon height="20px" width="20px" />
            <Box flex="auto" bg="gray.100">            
            <form style={{width:'100%'}}>
            <input required={true} style={{width:'100%'}} onChange={handleChange} value={query} type='text' placeholder="Search" />
            </form>
            </Box>
            </Flex>
            <Box display={query.length>0 ? 'block' :'none'} mx="8px" borderRadius="4px" p="8px" height="50vh" overflow="scroll" position="absolute" top="12" left="0" right="0" bottom="0" bg="gray.100" zIndex="999">
                {
                    searchResult.map(({id, title, image})=>(
                        <ProductsBySearch key={id} id={id} title={title} image={image} />
                    ))
                }


            </Box>
        </Box>
        
    )
}

export default SearchProduct
