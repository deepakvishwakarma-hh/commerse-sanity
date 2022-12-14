import * as Chakra from '@chakra-ui/react'


import { useRef } from 'react'

import Router from 'next/router'

import { Searchbar } from '..'

const Header = ({ onOpen, btnRef }: any) => {

    const onCartClickHandler = () => Router.push('/cart')
    const onLogoClickHandler = () => { Router.push('/') }

    const Model = Chakra.useDisclosure()
    const finalRef = useRef(null)


    return (

        <>
            <Chakra.Grid w="100%" pos={'fixed'} zIndex={9} bg="white" top={0} left={0} boxShadow={'sm'} height="70px" px={5} >

                <Chakra.Flex alignItems="center">

                    <Chakra.Flex flex={1}>

                        <Chakra.Button name="menu-hamburger" _hover={{ bg: 'whitesmoke' }} ref={btnRef} onClick={onOpen} mx={1} variant={'unstyled'} display="flex" justifyContent={'center'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </Chakra.Button>
                    </Chakra.Flex>

                    <Chakra.Center flex={2} >
                        <Chakra.Heading onClick={onLogoClickHandler} fontSize={20}>MPCart</Chakra.Heading>
                    </Chakra.Center>

                    <Chakra.Flex flex={1} alignItems='center' justifyContent='end'>

                        <Chakra.Button name="menu-search" _hover={{ bg: 'whitesmoke' }} display={'flex'} alignItems="center" justifyContent={'center'} ml={5} variant={'unstyled'} onClick={Model.onOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Chakra.Button>

                        <Chakra.Button name="menu-cart" _hover={{ bg: 'whitesmoke' }} display={'flex'} alignItems="center" justifyContent={'center'} ml={5} variant={'unstyled'} onClick={onCartClickHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </Chakra.Button>

                    </Chakra.Flex>
                </Chakra.Flex>
            </Chakra.Grid >

            <Chakra.Modal finalFocusRef={finalRef} isOpen={Model.isOpen} onClose={Model.onClose}>
                <Chakra.ModalOverlay />
                <Chakra.ModalContent>

                    <Chakra.ModalHeader>Search</Chakra.ModalHeader>

                    <Chakra.ModalCloseButton />

                    <Chakra.ModalBody><Searchbar /></Chakra.ModalBody>

                </Chakra.ModalContent>
            </Chakra.Modal>

        </>
    )
}
export default Header





