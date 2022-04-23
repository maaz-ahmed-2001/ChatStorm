import { Box, Container, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, Button } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from "@chakra-ui/icons"
import React, { useState } from 'react'


function Login() {
    const [show, setShow] = React.useState(false)
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const handleClick = () => setShow(!show)

    return (
        <Container maxW={'xl'} textAlign="center">
            <Box>
                <Text
                    fontSize={26}
                    fontWeight={500}
                    textAlign="center"
                    marginBottom="20px"
                >
                    Login
                </Text>
                <Stack spacing={4} align="center">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<EmailIcon color='blue.300' />}
                        />
                        <Input type='email' placeholder='Email Address' borderColor={"#9cc1ff"} value={email} onChange={(e)=>setemail(e.target.value)}/>
                    </InputGroup>

                    <InputGroup size='md' mb={"20px"}>
                        <InputLeftElement
                            children={<LockIcon color='blue.300' />}
                        />
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            borderColor={"#9cc1ff"}
                            value={pass} onChange={(e)=>setpass(e.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bgColor={"#d3d3d3"}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                </Stack>
                <Button
                    isLoading={false}
                    loadingText=''
                    colorScheme='blue'
                    variant='solid'
                    w={"200px"}
                    marginTop={"40px"}
                >
                    Login
                </Button>
                <br/>
                <Button
                    isLoading={false}
                    loadingText=''
                    colorScheme='red'
                    variant='solid'
                    w={"200px"}
                    marginTop={"10px"}
                    onClick={(e)=>{
                        setemail("abc@abc.com")
                        setpass("12345678")
                    }}
                >
                    Get Guest Credentials
                </Button>
            </Box>
        </Container>
    )
}

export default Login