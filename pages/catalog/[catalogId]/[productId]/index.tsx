import * as Chakra from "@chakra-ui/react"
import { type GetServerSideProps } from 'next'
import { client } from "../../../../src/lib/client"
import { NotFound } from '../../../../src/components/elements'
import { HomeLayout as Layout } from '../../../../src/components/layouts'
import { Image as ImageComp } from '../../../../src/components/elements/@Product'


const Page = ({ product }: any) => {

    const Product = product[0]

    if (product.length == 0) {
        return (
            <Layout>
                <NotFound title={'Product is Not Found'} discription={' invalid slug'} />
            </Layout>
        )
    }

    return (
        <Layout>
            <Chakra.Box
                // bg={'pink.100'}
                bg="whitesmoke"
                py={10}>

                <Chakra.Flex px={10}>
                    <ImageComp Product={Product} />

                    <Chakra.Box px={5}>

                        <Chakra.Heading py={5} fontSize={30}> {Product.name}</Chakra.Heading>
                        <Chakra.Text> {Product.name}</Chakra.Text>
                        <Chakra.Flex my={2} p={2} alignItems={'center'} borderRadius={5}>
                            <Chakra.Text fontSize={20} pr={2} fontWeight={800}>Price : </Chakra.Text>
                            <Chakra.Text fontSize={20} fontWeight={800} >₹{Product.price} </Chakra.Text>
                        </Chakra.Flex>

                        <Chakra.Flex>
                            <Chakra.Button px={10} mx={2} bg="#0070f3" color="white">Add to Cart</Chakra.Button>
                            <Chakra.Button px={10} mx={2} border=" 2px solid #0070f3" color="#0070f3"  >Buy Now</Chakra.Button>
                        </Chakra.Flex>

                    </Chakra.Box>

                </Chakra.Flex>

            </Chakra.Box>
        </Layout >

    )
}





export const getServerSideProps: GetServerSideProps = async (context) => {
    const { productId } = context.query
    const queryProducts = `*[_type == "product" && slug.current == "${productId}"]`;
    const product = await client.fetch(queryProducts);
    return {
        props: { product }
    }
}
export default Page