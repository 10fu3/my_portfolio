import React, {useState} from "react";
import {GithubSkill} from "../model/GithubSkill";
import {
    Box, Button, Center, chakra,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";

const SkillsComponent:React.FC<{skills:GithubSkill[]}> = (props)=>{

    const [detail,setDetail] = useState<GithubSkill|null>(null)

    const { isOpen, onOpen, onClose } = useDisclosure()

    return props.skills.length > 0  ? <Flex pr={5}>
        <Box borderRadius="20px" p={2} position="relative" bg={"gray.100"}>
            <Box fontWeight="600">新</Box>
            <Box fontWeight="600" position="absolute" bottom="10px">古</Box>
        </Box>
        <Box w={"full"}>
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
                        <Box w="100%" cursor={'pointer'} bg={"gray.50"} borderRadius="10px" borderWidth="1px" m={5} p={5}>
                            <chakra.p fontWeight="600">{s.projectTitle}</chakra.p>
                            <chakra.p color="gray">{s.date}</chakra.p>
                        </Box>
                    </div>
                })
            }
        </Box>
    </Flex> : <Box pt={10}>
        <chakra.p textAlign="center" fontSize="30px">Not found skills</chakra.p>
        <Box pt={10}>
            <chakra.p textAlign="center">ここにはまだスキルがありません.</chakra.p>
            <chakra.p  textAlign="center">よろしければ、私のスキルを増やすことに協力していただけませんか?</chakra.p>
        </Box>
        <Center>
            <Box w={"300px"} h={"auto"}>
                <img src="/people.png"/>
            </Box>
        </Center>
    </Box>
}

export default SkillsComponent