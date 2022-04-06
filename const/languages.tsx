import {FaDocker, FaJava, FaNodeJs, FaReact, FaVuejs} from "react-icons/fa";
import {SiGoland, SiMongodb, SiMysql, SiNextdotjs, SiNuxtdotjs, SiRuby, SiSwift} from "react-icons/si";
import {DiGoogleCloudPlatform} from "react-icons/di";
import {Center} from "@chakra-ui/react";
import React from "react";
import {LanguageSkill} from "../model/LanguagesSkill";

export type Language = 'Java' | 'Golang' | 'Ruby' | 'Swift' | 'React' | 'Vue.js' | 'Node.js' | 'Next.js' | 'Nuxt.js' | 'CloudRun' | 'Docker' | 'MySQL' | 'MongoDB'

export type PageMode = 'All' | 'LanguageList' | Language

const ProgrammingLanguage: LanguageSkill[] = [
    {
        name: 'Java',
        icon: <FaJava color="red" size="55%"/>,
    }, {
        name: 'Golang',
        icon: <SiGoland color={"#009dff"} size="75%"/>,
    }, {
        name: 'Ruby',
        icon: <SiRuby color="red" size="75%"/>,
    }, {
        name: 'Swift',
        icon: <SiSwift color={"#ff5900"} size="75%"/>,
    },{
        name: 'React',
        icon: <FaReact color={"#009dff"} size="75%"/>,
    },{
        name: 'Vue.js',
        icon: <FaVuejs color={"#35af00"} size="75%"/>,
    },{
        name: 'Node.js',
        icon: <FaNodeJs color={"#35af00"} size="65%"/>,
    }
    ,{
        name: 'Next.js',
        icon: <SiNextdotjs color="black" size="75%"/>,
    }, {
        name: 'Nuxt.js',
        icon: <SiNuxtdotjs color="green" size="75%"/>,
    }, {
        name: 'CloudRun',
        icon: <DiGoogleCloudPlatform color={"#0540a9"} size="75%"/>,
    }, {
        name: 'Docker',
        icon: <Center pt={5}>
            <FaDocker color={"#009dff"} size="75%"/>
        </Center>,
    }, {
        name: 'MySQL',
        icon: <SiMysql size="75%"/>,
    }, {
        name: 'MongoDB',
        icon: <SiMongodb color="green" size="75%"/>,
    }
]

export default ProgrammingLanguage