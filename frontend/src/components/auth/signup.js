import { Box, Container, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, Button, FormControl, FormLabel, useToast } from '@chakra-ui/react'
import { EmailIcon, InfoIcon, LockIcon } from "@chakra-ui/icons"
import {useNavigate} from "react-router-dom"
import React from 'react'
import { useState } from 'react'
import axios from "axios"



function SignUp() {
    const navigate = useNavigate()
    const [show, setShow] = React.useState(false)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confPass, setconfPass] = useState("")
    const [pic, setpic] = useState("")
    const [loading, setloading] = useState(false)
    const handleClick = () => setShow(!show)
    const toast = useToast()
    const postDetails = async(pics) => {
        setloading(true)
        if (pics === undefined) {
            toast({
                title: 'Please select an image.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            return
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png"){
            const data = new FormData()
            data.append("file",pics)
            data.append("upload_preset", "ChatStorm")
            data.append("cloud_name","dyshqnwc9")
            try{
                fetch("https://api.cloudinary.com/v1_1/dyshqnwc9/image/upload",{method:"POST",body:data})
                .then((res)=>res.json())
                .then(data=>{
                    setpic(data.url.toString())
                    setloading(false)
                    console.log(pic)
                })
                
                
                // let result = api.json()
                // setpic(result.url.toString());
                // setloading(false)
            } catch (e){
                console.log(e)
            }
        } else {
            toast({
                title: 'Please select an image.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            setloading(false)
            return
        }
    }
    const submitHandler = async() => {
        setloading(true);
        if (!name || !email || !password || !confPass) {
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
        if (password !== confPass) {
          toast({
            title: "Passwords Do Not Match",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          return;
        }
        console.log(name, email, password, pic);
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const { data } = await axios.post(
            "/api/user",
            {
              name,
              email,
              password,
              pic,
            },
            config
          );
          console.log(data);
          toast({
            title: "Registration Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          localStorage.setItem("userInfo", JSON.stringify(data));
          setloading(false);
          navigate("/chats");
        } catch (error) {
          toast({
            title: "Error Occured!",
            description: error.response.data.message,
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
                    Sign Up
                </Text>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<InfoIcon color='blue.300' />}
                        />
                        <Input type='text' placeholder='Username' borderColor={"#9cc1ff"} value={name} onChange={(e) => setname(e.target.value)} />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<EmailIcon color='blue.300' />}
                        />
                        <Input type='email' placeholder='Email Address' borderColor={"#9cc1ff"} value={email} onChange={(e) => setemail(e.target.value)} />
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
                            value={password} onChange={(e) => setpassword(e.target.value)}
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
                            value={confPass} onChange={(e) => setconfPass(e.target.value)}
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
                            onChange={(e) => postDetails(e.target.files[0])} />
                    </FormControl>
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
                    Sign Up
                </Button>
            </Box>
        </Container>
    )
}

export default SignUp