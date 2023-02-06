import {NextPage} from "next";
import SkillsPageComponent from "../../component/SkillsPageComponent";
import React from "react";
import {Box, Center} from "@chakra-ui/react";
import ProgrammingLanguage from "../../const/languages";
import Link from "next/link";
import Square from "../../component/Square";

const LanguagesSelectComponent:React.FC = ()=>{
    return <Box display="flex" flexWrap="wrap" w="full" maxW="600px" pt={10}>
        {
            ProgrammingLanguage.map(i=>{
                return <Box w={"33%"} key={`${i.name}`} p={1}>
                    <Link href={`${i.name}`} passHref={true}>
                        <a>
                            <Box style={{flexShrink:"0"}} key={`${i.name}`}>
                                <div style={{width:"100%"}}>
                                    <Square w={"100%"}>
                                        <Center p={2}>
                                            {i.icon}
                                        </Center>
                                        <Box textAlign="center">
                                            {i.name}
                                        </Box>
                                    </Square>
                                </div>
                            </Box>
                        </a>
                    </Link>
                </Box>
            })
        }
    </Box>
}

const LanguagesPage:NextPage = ()=>{
    return <SkillsPageComponent>
        <LanguagesSelectComponent/>
    </SkillsPageComponent>
}

export default LanguagesPage