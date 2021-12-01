import { Button } from "@chakra-ui/button"
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Flex } from "@chakra-ui/layout"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addReview } from "../redux/actions/addreview.action"
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/toast"


function AddReviews({id}) {
    const dispatch=useDispatch()
    const toast=useToast()
    
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    
    function handleFormSubmit(values){

        dispatch(addReview(id,values.review))
        toast({
            title: "Review Added",
            status:'success',
            duration:3000,
            isClosable:true
        })
        reset()
    }

    // console.log(review)
    return (
            <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Flex my="16px">
            <FormControl  flex="0.8" borderRadius="4px" outline="none" border="1px" borderColor="gray.100"  isRequired>
            <Input {...register('review',{
                required:'This is required',
                minLength:{value:4, message:'Minimum length should be 4'}, pattern:/[A-Za-z]/})} id='review' type="text" border="0px" placeholder="Add review" />
                {errors.name && errors.name.message}
            </FormControl>
            <Button type="submit" flex="0.2" ml="2px" isLoading={isSubmitting}>Add</Button>
        </Flex>
            </form>
    )
}

export default AddReviews
