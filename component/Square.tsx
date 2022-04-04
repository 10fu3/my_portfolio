import React from "react";
import {Box} from "@chakra-ui/react";

const Square:React.FC<{w:string}> = (props)=>{
    return <Box w={props.w} style={{aspectRatio:"1"}}>
        <Box boxShadow="md" borderRadius="20px" borderWidth="1px" h={"full"} m={1}>
            {props.children}
        </Box>
    </Box>
}

export default Square