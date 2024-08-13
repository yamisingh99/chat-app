import React, { useState } from 'react';
import { VStack, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <VStack spacing={4} width="100%">
      <FormControl id="username" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          placeholder="Username"
          size="lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          size="lg"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Password"
          size="lg"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button colorScheme="teal" size="lg" width="100%">
        Sign In
      </Button>

      <Button 
        colorScheme="red" 
        size="lg" 
        width="100%" 
        variant="solid"
        onClick={()=>{
            setEmail("guest@example.com");
            setPassword("12345678")
        }}
      >
        Sign In as Guest
      </Button>
    </VStack>
  );
}

export default SignIn;
