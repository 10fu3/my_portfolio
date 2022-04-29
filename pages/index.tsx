import { NextPage } from 'next'
import Link from 'next/link'
import Page from "../component/Page";
import {Box, Center, chakra, Divider, Flex, Spacer} from "@chakra-ui/react";
import React from "react";
import {EditIcon, ExternalLinkIcon, RepeatClockIcon} from '@chakra-ui/icons';
import {GoMarkGithub} from "react-icons/go";
import Square from "../component/Square";

const Home: NextPage = () => {

  const Profile :{[key:string]:string} = {
    "名前":"和田 健吾",
    "誕生日": "2001/0?/0?",
    "居住地": "東京都23区",
    "所属大学": "芝浦工業大学",
    "所属学部": "システム理工学部",
    "所属学科": "電子情報システム学科",
    "卒業予定": "2024/03",
  }

  const TopSkills:{[key:string]:string} = {
    "C10Kに対応したJava向けWebフレームワークの実装":"",
    "OpenID ConnectのプロバイダーをJava(Javalin)+Vue.jsで実装":"",
    "JamStack構成で使うCMSをGolang(Gin)+Reactでフルスクラッチ実装":"",
    "記事メディアをJamStack構成(Next.js SSG)で実装 自作のCMSを使って運用中":"",
  }

  return <Page name={'Home'}>
    <Box h={"full"} w={"full"}>
      <Flex justifyContent="center" h={"calc(100vh - 56px)"}>
        <Box w={"full"}>
          <Center>
            <Box w="full" position="relative" overflow="hidden">
              <Box h={"400px"} filter="blur(10px) brightness(70%)">
                <chakra.img objectFit="cover" w={["auto","auto","full"]} h={["full","full","auto"]} src="top-bg.jpg"/>
              </Box>
              <Center p={[2,2,0]} w="full" position="absolute" top={["70px","25%"]} left="0">
                <Center flexDir={["column","inherit"]} display="flex" justifyContent="space-between" w="full" maxW="800px">
                  <Box>
                    <chakra.h1 pr={8} pl={4} pb={[10,0]} color='white' fontSize="30px">
                      {`Kengo's portfolio`}
                    </chakra.h1>
                  </Box>
                  <Box borderRadius="50%" overflow="hidden">
                    <chakra.img w="200px" h="200px" src="https://media.discordapp.net/attachments/965280577936838746/969217813053054976/IMG_2652.png?width=822&height=812"/>
                  </Box>
                </Center>
              </Center>
            </Box>
          </Center>
          <Box pt={10}>
            <Center w="full">
              <Box borderRadius="20px" borderWidth="1px" p={4} maxW="800px" w="full">
                <chakra.h1 fontSize="30px">
                  Links
                </chakra.h1>
                <Center justifyContent="space-around" pt={10}>
                  <Link passHref={true} href={'skills'}>
                    <chakra.a w={"33%"} style={{aspectRatio:"1"}}>
                      <Square w={"100%"}>
                        <Box p={2}>
                          <Center pt={2}>
                            <ExternalLinkIcon boxSize="65%"/>
                          </Center>
                          <chakra.p pt={5} fontWeight="600" textAlign="center">Skills</chakra.p>
                        </Box>
                      </Square>
                    </chakra.a>
                  </Link>
                  <Link passHref={true} href={'https://github.com/10fu3'}>
                    <chakra.a w={"33%"} target="_blank" style={{aspectRatio:"1"}}>
                      <Square w={"100%"}>
                        <Box p={2}>
                          <Center pt={2}>
                            <GoMarkGithub size="65%"/>
                          </Center>
                          <chakra.p pt={5} fontWeight="600" textAlign="center">Github</chakra.p>
                        </Box>
                      </Square>
                    </chakra.a>
                  </Link>
                  <Link passHref={true} href={'http://den3.net/activity_diary/author/tofu/'}>
                    <chakra.a w={"33%"} target="_blank" style={{aspectRatio:"1"}}>
                      <Square w={"100%"}>
                        <Box p={2}>
                          <Center pt={2}>
                            <EditIcon boxSize="65%"/>
                          </Center>
                          <chakra.p pt={5} fontWeight="600" textAlign="center">Tech Blog(?)</chakra.p>
                        </Box>
                      </Square>
                    </chakra.a>
                  </Link>
                </Center>
              </Box>
            </Center>
          </Box>
          <Box mt={10} w="full">
            <Center pb={10} bgColor={"#1f1f1f"}>
              <Box color="white" maxW="800px" p={4} w="full">
                <chakra.h1 pt={10} pb={10} fontSize="30px">
                  Introduction
                </chakra.h1>
                <Box pt={6} pb={2}>
                  {
                    (()=>{
                      const a = Object.keys(Profile).map(i=>{
                        return <Center pt={1} key={i}>
                          <Flex w={"full"} maxW={"800px"} justifyContent="space-between">
                            <Box fontWeight="400">{i}</Box>
                            <Box>{Profile[i]}</Box>
                          </Flex>
                        </Center>
                      });
                      return ([] as JSX.Element[]).concat(...a.map((e,i) => [
                        <Center key={`profile-divider-${i}`}>
                          <Divider maxW={"800px"}/>
                        </Center>
                        , e])).slice(1)
                    })()
                  }
                </Box>
              </Box>
            </Center>
          </Box>
          <Box pt={10} pb={10} bgColor={"#006ad3"}>
            <Center w="full">
              <Box p={4} maxW="800px" w="full">
                <chakra.h1 fontSize="30px">
                  Select Software & Skills
                </chakra.h1>
                <chakra.ul mt={14}>
                  {
                    Object.keys(TopSkills).map((s,i)=>{
                      return <chakra.li key={s} listStyleType="none">
                        <Center mb={2}>
                          <Flex p={8} maxW="800px" w="full" bgColor="white">
                            <Center fontSize="20px" h="30px" w="30px" border="solid 2px #006ad3" borderRadius="50%">
                              {i+1}
                            </Center>
                            <Center>
                              <Box pl={4}>
                                {s}
                              </Box>
                            </Center>
                          </Flex>
                        </Center>
                      </chakra.li>
                    })
                  }
                </chakra.ul>
              </Box>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Box>
  </Page>
}

export default Home
