import { Box, Container, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, Button, FormControl, FormLabel } from '@chakra-ui/react'
import { EmailIcon, InfoIcon, LockIcon } from "@chakra-ui/icons"
import React from 'react'
import { useState } from 'react'


function SignUp() {
    const [show, setShow] = React.useState(false)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confPass, setconfPass] = useState("")
    const [pic, setpic] = useState("")
    const handleClick = () => setShow(!show)
    const postDetails = (pics) => {}

    return (
        <Container maxW={'xl'} textAlign="center">
            <Box>
                <Text
                    fontSize={26}
                    fontWeight={500}
                    textAlign="center"
                    marginBottom="20px"
                >
                    Sign Up
                </Text>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<InfoIcon color='blue.300' />}
                        />
                        <Input type='text' placeholder='Username' borderColor={"#9cc1ff"} value={name} onChange={(e)=>setname(e.target.value)}/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<EmailIcon color='blue.300' />}
                        />
                        <Input type='email' placeholder='Email Address' borderColor={"#9cc1ff"} value={email} onChange={(e)=>setemail(e.target.value)} />
                    </InputGroup>

                    <InputGroup size='md'>
                        <InputLeftElement
                            children={<LockIcon color='blue.300' />}
                        />
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            borderColor={"#9cc1ff"}
                            value={password} onChange={(e)=>setpassword(e.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bgColor={"#d3d3d3"}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup size='md'>
                        <InputLeftElement
                            children={<LockIcon color='blue.300' />}
                        />
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Confirm password'
                            borderColor={"#9cc1ff"}
                            value={confPass} onChange={(e)=>setconfPass(e.target.value)}
                        />
                        <InputRightElement width='4.5rem' mb={"20px"}>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bgColor={"#d3d3d3"}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormControl>
                        <FormLabel>Upload your picture</FormLabel>
                        <Input type="file" accept="image/*"
                            borderColor={"#9cc1ff"}
                            p={"1.5"}
                            onChange={(e)=>postDetails(e.target.files[0])}/>
                    </FormControl>
                </Stack>
                <Button
                    isLoading={false}
                    loadingText=''
                    colorScheme='blue'
                    variant='solid'
                    w={"200px"}
                    marginTop={"40px"}
                >
                    Sign Up
                </Button>
            </Box>
        </Container>
    )
}

export default SignUp