import { Box, Heading, Text } from "@chakra-ui/layout"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AddReviews from "./AddReviews"

const reviews=[{
    id:1,
    review:'it is good what is this'
},
{   id:2,
    review:"I haven't seen something like this. I would like to buy this one and let my friends also know about this product."
},{
    id:3,
    review:'This one is amazing and it has got something different about its look'
}]

function Reviews({id}) {
    const [reviews,setReviews]=useState([])

    const {reviewList}=useSelector(state=>state.reviews)
    
    useEffect(()=>{
        const item=reviewList.find(item=>item.id===id)
        setReviews(item.reviews)
    },[reviewList,id])

    return (
        <Box my="16px">
            <Heading py="8px" as='h5' size='base'>Reviews</Heading>
            {reviews.map((review,index)=>(
                <Text py="4px" fontSize='15px' key={index}>{review}</Text>
            ))} 
            {/* add review */}
            <AddReviews id={id} />
        </Box>
    )
}

export default Reviews

