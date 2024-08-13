// HomePage.js
import React from 'react';
import { Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import bgimg from "./background.jpg";
import SignIn from '../components/SignIn';
import SignUp from '../components/Signup';


function HomePage() {
  return (
    <Box
      as="main"
      bgImage={`url(${bgimg})`}  
      bgSize="cover"
      bgPosition="center"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={0}  
      p={0}  
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={8}
        bg="white"
        w={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)"
        border="1px solid"
        borderColor="gray.200"
        bgGradient="linear(to-br, gray.50, white)"
      >
        <Text
          fontSize="3xl"
          mb={5}
          fontFamily="Work sans"
          color="black"
        >
          Talk-A-Tive
        </Text>
        <Tabs variant="enclosed" width="100%">
          <TabList>
            <Tab>Sign In</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignIn/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default HomePage;
