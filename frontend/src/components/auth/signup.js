import { Box, Container, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, Button } from '@chakra-ui/react'
import { EmailIcon, InfoIcon, LockIcon } from "@chakra-ui/icons"
import React from 'react'


function SignUp() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Container maxW={'xl'}>
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
                        <Input type='text' placeholder='Username' borderColor={"#9cc1ff"} />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<EmailIcon color='blue.300' />}
                        />
                        <Input type='email' placeholder='Email Address' borderColor={"#9cc1ff"} />
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
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick} bgColor={"#d3d3d3"}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Stack>
            </Box>
        </Container>
    )
}

export default SignUp