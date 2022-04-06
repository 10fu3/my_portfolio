import React from "react";
import Page from "./Page";
import Link from "next/link"
import {Box, Button, Center, chakra, Flex} from "@chakra-ui/react";

const SkillsPageComponent:React.FC = (props)=>{
    return <Page name={'Skills'}>
        <Box pt={10}>
            <chakra.h1 fontSize="30px" fontWeight="600" textAlign="center">My Skills</chakra.h1>
            <chakra.p pt={5} textAlign="center">使った(ことがある)プログラミング言語とフレームワーク</chakra.p>
        </Box>
        <Center>
            <Flex pt={2}>
                <Box p={1}><Link passHref={true} href={'/skills'}>
                    <a>
                        <Button>すべて表示する</Button>
                    </a>
                </Link></Box>
                <Box p={1}>
                    <Link href={`/skills/languages`}>
                        <a>
                            <Button>言語によるフィルタ</Button>
                        </a>
                    </Link>
                </Box>
            </Flex>
        </Center>
        <Center>
            <Box pt={10} textAlign="center">
                <Link passHref={true} href={'https://www.wantedly.com/id/wada_kengo'}>
                    <a target="_blank" style={{textAlign:"center"}}>
                        <Button>
                            Wantedly でコンタクトを取る
                        </Button>
                    </a>
                </Link>
            </Box>
        </Center>
        <Center pt={10}>
            <Box maxW={"600px"} w="100%" p={5} >
                <Box p={5} borderRadius="10px"  borderWidth="1px">
                    {props.children}
                </Box>
            </Box>
        </Center>
    </Page>
}

export default SkillsPageComponent