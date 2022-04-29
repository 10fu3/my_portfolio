import React from "react";
import {Box, chakra, Flex, Spacer} from "@chakra-ui/react";
import Header from "./Header";

const Page:React.FC<{name:string}> = (props)=>{
    return <Box w={"full"} h="full" minH={"100vh"} fontFamily="'Noto Sans JP', sans-serif">
        <Header name={props.name}/>
        <Box w={"full"} minH={"calc(100vh - 56px)"}>
            {
                props.children
            }
        </Box>
    </Box>
}

export default Page