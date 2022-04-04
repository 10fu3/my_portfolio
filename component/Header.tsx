import {Box, Flex, Stack, Switch, useColorMode, useColorModeValue} from "@chakra-ui/react"
import React from "react";
import Link from "next/link"

const Header:React.FC<{name:string}> = (props)=>{

    return <Flex boxShadow="md" bg={'gray.50'} alignItems="center" py={2} px={4} >
        <Box flex="1" fontWeight="bold">
            <Flex>
                <Link href={'/'}>
                    <a>
                        <Box _hover={{textDecoration:"underline"}}>
                            {`Kengo Wada's portfolio`}
                        </Box>
                    </a>
                </Link>
                <Box pl={1}>
                    {`- ${props.name}`}
                </Box>
            </Flex>
        </Box>
        <Stack direction="row" alignItems="center" spacing={3} h="40px">
            {props.children}
        </Stack>
    </Flex>
}

export default Header