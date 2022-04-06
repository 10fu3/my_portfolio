import {
    Box,
    Button,
    Center,
    chakra,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import {NextPage} from "next";
import Link from "next/link";
import Page from "../../component/Page";
import Square from "../../component/Square";
import React, {useState} from "react";
import ProgrammingLanguage, {PageMode} from "../../const/languages";
import {AllSkills} from "../../const/skills";
import {GithubSkill} from "../../model/GithubSkill";

const ProgrammingLanguageSkillPage:React.FC<{onClick:(id:PageMode)=>void}> = (props)=>{
    return <Box display="flex" flexWrap="wrap" w="full" maxW="600px" pt={10}>
        {
            ProgrammingLanguage.map(i=>{
                return <Box p={5} style={{flexShrink:"0"}} w={"33%"} key={`${i.name}`}>
                    <div onClick={()=>{props.onClick(i.name as PageMode)}} style={{width:"100%"}}>
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
            })
        }
    </Box>
}

const SkillsComponent:React.FC<{skills:GithubSkill[]}> = (props)=>{

    const [detail,setDetail] = useState<GithubSkill|null>(null)

    const { isOpen, onOpen, onClose } = useDisclosure()

    return props.skills.length > 0  ? <Flex>
        <Box borderRadius="20px" p={2} position="relative" bg={"gray.100"}>
            <Box fontWeight="600">新</Box>
            <Box fontWeight="600" position="absolute" bottom="10px">古</Box>
        </Box>
        <Box>
            {
                detail && <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{detail.projectTitle}</ModalHeader>
                        <ModalBody>
                            {detail.description}
                        </ModalBody>

                        <ModalFooter>
                            {
                                detail.url && <Box pl={3}>
                                    <Link href={'https://github.com/10fu3/'+detail.url} passHref={true}>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <Button borderWidth="1px" colorScheme='gray' variant='ghost'>Github</Button>
                                        </a>
                                    </Link>
                                </Box>
                            }
                            {
                                detail.pageUrl && <Box pl={3}>
                                    <Link href={detail.pageUrl} passHref={true}>
                                        <a  target="_blank" rel="noopener noreferrer">
                                            <Button borderWidth="1px" colorScheme='gray' variant='ghost'>Visit Site</Button>
                                        </a>
                                    </Link>
                                </Box>
                            }
                            <Button ml={3} colorScheme='blue' onClick={()=>{
                                onClose();
                                setDetail(null)
                            }}>
                                閉
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            }
            {
                props.skills.map(s=>{
                    return <div key={s.projectTitle} onClick={()=>{
                        setDetail(s);
                        onOpen();
                    }}>
                        <Box bg={"gray.50"} borderRadius="10px" borderWidth="1px" m={5} p={5}>
                            <chakra.p fontWeight="600">{s.projectTitle}</chakra.p>
                            <chakra.p color="gray">{s.date}</chakra.p>
                        </Box>
                    </div>
                })
            }
        </Box>
    </Flex> : <Box>

    </Box>
}

const SkillsPage:NextPage = ()=>{

    const [mode,setMode] = useState<PageMode>('All')

    return <Page name={'Skills'}>
        <Box pt={10}>
            <chakra.h1 fontSize="30px" fontWeight="600" textAlign="center">My Skills</chakra.h1>
            <chakra.p pt={5} textAlign="center">使った(ことがある)プログラミング言語とフレームワーク</chakra.p>
        </Box>
        <Center>
            <Flex pt={2}>
                <Box p={1}><Button onClick={()=>{setMode('All')}}>すべて表示する</Button></Box>
                <Box p={1}><Button onClick={()=>{setMode('LanguageList')}}>言語によるフィルタ</Button></Box>
            </Flex>
        </Center>
        <Center>
            {
                (()=>{
                    switch (mode) {
                        case "LanguageList":
                            return <ProgrammingLanguageSkillPage onClick={(i)=>{setMode(i);console.log(i)}}/>
                        case "All":
                            return <SkillsComponent skills={AllSkills}/>
                    }
                    return <SkillsComponent skills={AllSkills.filter(i=>{
                        return i.skillTag.includes(mode)
                    })}/>
                })()
            }
        </Center>
    </Page>
}

export default SkillsPage