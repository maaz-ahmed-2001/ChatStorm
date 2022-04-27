import { Box, Container, Input, useToast,InputGroup, InputLeftElement, InputRightElement, Stack, Text, Button } from '@chakra-ui/react'
import { EmailIcon, LockIcon } from "@chakra-ui/icons"
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"



function Login() {
    const navigate = useNavigate()
    const toast = useToast()
    const [show, setShow] = React.useState(false)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [loading,setloading] = useState(false)
    const handleClick = () => setShow(!show)
    const submitHandler = async() => {
        setloading(true);
        if (!email || !password ) {
          toast({
            title: "Please Fill all the Feilds",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
            
          });
          setloading(false);
          return;
        }
        try{
            const config = {
                headers : {
                    "Content-type" : "application/json"
                }
            }
            const {data} = await axios.post("/api/user/login",{email,password},config)
            toast({
                title: "Login Successful !",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
                
              });
              localStorage.setItem("userInfo",JSON.stringify(data))
              setloading(false);
              navigate("/chats")
        } catch(e){
            toast({
                title: "Error Occured!",
                description: e.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              setloading(false);
        }

    }

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
                            value={password} onChange={(e)=>setpassword(e.target.value)}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bgColor={"#d3d3d3"}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                </Stack>
                <Button
                    isLoading={loading}
                    loadingText=''
                    colorScheme='blue'
                    variant='solid'
                    w={"200px"}
                    marginTop={"40px"}
                    onClick={submitHandler}
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
                        setpassword("12345678")
                    }}
                >
                    Get Guest Credentials
                </Button>
            </Box>
        </Container>
    )
}

export default Login