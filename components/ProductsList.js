import { Grid, Text } from "@chakra-ui/layout"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"

function ProductsList() {
    const {products, loading}=useSelector(state=>state.productsList)
    console.log(products)

    return (
        <Grid  templateColumns='repeat(4, 1fr)' placeContent="center" placeItems="center">
            { products.length>0 ? (

                products.map(({id, category, description, image, title, price })=>(
                    <ProductCard key={id} id={id} category={category} description={description} image={image} title={title} price={price} />
                    )
                    )):(
                        <Text>
                            Loading...
                        </Text>
                )
            }
        </Grid>
    )
}

export default ProductsList
