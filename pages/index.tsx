import { NextPage } from 'next'
import Link from 'next/link'
import Page from "../component/Page";
import {Box, Center, chakra, Flex, Spacer} from "@chakra-ui/react";
import React from "react";
import {ExternalLinkIcon, RepeatClockIcon} from '@chakra-ui/icons';
import {GoMarkGithub} from "react-icons/go";
import Square from "../component/Square";

const Home: NextPage = () => {
  return <Page name={'Home'}>
    <Box h={"full"} w={"full"}>
      <Center h={"calc(100vh - 56px)"}>
        <Box maxW={"500px"} w={"full"}>
          <Center pb={5}>
            <chakra.h1 fontSize={"30px"}> {`Kengo's portfolio`} </chakra.h1>
          </Center>
          <Flex>
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
            <Link passHref={true} href={'history'}>
              <chakra.a w={"33%"} style={{aspectRatio:"1"}}>
                <Square w={"100%"}>
                  <Box p={2}>
                    <Center pt={2}>
                      <RepeatClockIcon boxSize="65%" />
                    </Center>
                    <chakra.p pt={5} fontWeight="600" textAlign="center">My History</chakra.p>
                  </Box>
                </Square>
              </chakra.a>
            </Link>
            <Link passHref={true} href={'https://github.com/10fu3'}>
              <chakra.a w={"33%"} style={{aspectRatio:"1"}}>
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
          </Flex>
        </Box>
      </Center>
    </Box>
  </Page>
}

export default Home
