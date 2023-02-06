import {Box, Flex, Stack} from "@chakra-ui/react"
import React from "react";
import Link from "next/link"

const Header:React.FC<{name:string}> = (props)=>{

    return <Flex color="white" boxShadow="md" bg={"#006ad3"} alignItems="center" py={2} px={4} >
        <Box pt={4} pb={4} flex="1">
            <Flex fontSize="25px">
                <Link href={'/'}>
                    <a>
                        <Box _hover={{textDecoration:"underline"}}>
                            {`Kengo Wada`}
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