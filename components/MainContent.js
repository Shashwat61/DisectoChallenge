import { Button } from "@chakra-ui/button"
import { Box, Center, Text } from "@chakra-ui/layout"
import { useState } from "react"
import ProductsList from "./ProductsList"

function MainContent() {
    const [view, setView]=useState(false)
    return (
        <Box mt="16px">
            <Center>
                <Button onClick={()=>setView(!view)}>{view ? 'Hide Products' : 'Show Products'}</Button>
            </Center>
            <Box my="24px">
            {view && <ProductsList/>}
            </Box>

        </Box>
    )
}

export default MainContent
