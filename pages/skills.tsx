import {Box, Center, chakra, Flex} from "@chakra-ui/react";
import {NextPage} from "next";
import Page from "../component/Page";
import Square from "../component/Square";
import React from "react";
import {FaDocker, FaJava, FaNodeJs, FaReact} from "react-icons/fa";
import {SiGoland, SiMongodb, SiMysql, SiNextdotjs, SiNuxtdotjs, SiRuby, SiSwift} from "react-icons/si";
import {DiGoogleCloudPlatform} from "react-icons/di";

interface GithubItem{
    name: string,
    description: string,
    time: string,
}

interface Skill {
    name: string,
    icon: JSX.Element,
    github: GithubItem[]
}

const SkillsPage:NextPage = ()=>{

    const skills: Skill[] = [
        {
            name: 'Java',
            icon: <FaJava color="red" size="55%"/>,
            github: []
        }, {
            name: 'Golang',
            icon: <SiGoland color={"#009dff"} size="75%"/>,
            github: []
        }, {
            name: 'Ruby',
            icon: <SiRuby color="red" size="75%"/>,
            github: []
        }, {
            name: 'Swift',
            icon: <SiSwift color={"#ff5900"} size="75%"/>,
            github: []
        },{
            name: 'React',
            icon: <FaReact color={"#009dff"} size="75%"/>,
            github: []
        },{
            name: 'Node.js',
            icon: <FaNodeJs color={"#35af00"} size="65%"/>,
            github: []
        }
        ,{
            name: 'Next.js',
            icon: <SiNextdotjs color="black" size="75%"/>,
            github: []
        }, {
            name: 'Nuxt.js',
            icon: <SiNuxtdotjs color="green" size="75%"/>,
            github: []
        }, {
            name: 'CloudRun',
            icon: <DiGoogleCloudPlatform color={"#0540a9"} size="75%"/>,
            github: []
        }, {
            name: 'Docker',
            icon: <Center pt={5}>
                <FaDocker color={"#009dff"} size="75%"/>
            </Center>,
            github: []
        }, {
            name: 'MySQL',
            icon: <SiMysql size="75%"/>,
            github: []
        }, {
            name: 'MongoDB',
            icon: <SiMongodb color="green" size="75%"/>,
            github: []
        }
    ]

    return <Page name={'Skills'}>
        <Box pt={10}>
            <chakra.h1 fontSize="30px" fontWeight="600" textAlign="center">My Skills</chakra.h1>
            <chakra.p pt={5} textAlign="center">使った(ことがある)プログラミング言語とフレームワーク</chakra.p>
        </Box>
        <Center>
            <Box display="flex" flexWrap="wrap" w="full" maxW="600px" pt={10}>
                {
                    skills.map(i=>{
                        return <Box p={5} style={{flexShrink:"0"}} w={"33%"} key={`${i.name}`}>
                            <Square w={"100%"}>
                                <Center p={2}>
                                    {i.icon}
                                </Center>
                                <Box textAlign="center">
                                    {i.name}
                                </Box>
                            </Square>
                        </Box>
                    })
                }
            </Box>
        </Center>
    </Page>
}

export default SkillsPage