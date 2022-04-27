import React from 'react'

import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import SignUp from '../components/auth/signup'
import Login from '../components/auth/login'
function Home() {

  return (
    <Container maxW={'xl'} display="flex" flexDirection={"column"} justifyContent="center">
      <Box
        d="flex"
        justifyContent={"center"}
      >
        <Text
          fontSize="38"
          fontWeight={"900"}
          fontFamily="work sans"
          color={"#fff"}
          textShadow="0px 0px 3px black"
          letterSpacing={"0.05em"}
          margin="20px 0px 20px 0px"
        >ThatsApp
        </Text>
      </Box>

      <Box
        p={4}
        bgColor="rgba(230,230,230,1)"
        borderRadius={"4px"}
        border="1px solid #5b5b5b"
        boxShadow="0px 0px 10px 2px #5b5b5b"
        mb={"30px"}
      >
        <Tabs variant='soft-rounded' colorScheme='green'>

          <TabList mb={"1em"} >
            <Tab width={"50%"} mr={"1.5"}>Login</Tab>
            <Tab width={"50%"} ml={"1.5"}>Sign Up</Tab>
          </TabList>

          <TabPanels>
            <TabPanel pt={"5px"}>
              <Login />
            </TabPanel>

            <TabPanel pt={"5px"}>
              <SignUp />
            </TabPanel>
          </TabPanels>

        </Tabs>
      </Box>

    </Container>

  )
}

export default Home