interface props {
    data: product
}

import Image from "next/image";
import Router from "next/router"
import * as Chakra from "@chakra-ui/react"
import { useNextSanityImage } from 'next-sanity-image';
import { configuredSanityClient } from "../../../lib/client"
import { useRef, type FunctionComponent, useState } from "react";
import { type product } from "../../../../pages/catalog/[catalogId]"

const Product: FunctionComponent<props> = ({ data }) => {

    const [Routing, setRouting] = useState(false)

    const elementRef = useRef(null)
    const dimensions = Chakra.useDimensions(elementRef)

    const imageProps: any = useNextSanityImage(
        configuredSanityClient,
        data.varients[0].image[0]
    );

    const cropText = (str: string, length: number) => {
        return str.length > length ? str.slice(0, length) + '...' : str
    }

    const onClickHandler = () => {
        Router.push(`${Router.asPath}/${data.slug.current}`)
        setRouting(true)
    }

    return (

        <>
            {Routing &&
                <Chakra.Center pos="fixed" w="100%" h="100%" top={0} left={0} zIndex={99999999} bg="blackAlpha.400">
                    <Chakra.Spinner color="white" />
                </Chakra.Center>
            }

            <Chakra.Box bg="white" cursor="pointer" onClick={onClickHandler} ref={elementRef} p={[2, 2]} >
                <Image  {...imageProps} loader={imageProps.loader} layout="intrinsic"
                    alt="none"
                    height={dimensions?.contentBox?.width ?? '200px'}
                    width={dimensions?.contentBox?.width ?? '200px'} />
                <Chakra.Text p={1} fontWeight={800} textTransform={'capitalize'}>{cropText(data.name, 20)}</Chakra.Text>
                <Chakra.Text p={1} fontWeight={500} textTransform={'capitalize'}>₹{data.price}</Chakra.Text>
            </Chakra.Box>

        </>

    )
}
export default Product

