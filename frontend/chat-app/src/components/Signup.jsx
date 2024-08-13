import React, { useState } from 'react';
import { VStack, Input, Button, FormControl, FormLabel, InputGroup, InputRightElement, IconButton, Image } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pic, setPic] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPic(URL.createObjectURL(file));
    }
  };

  const handleSignUp = () => {
    console.log({
      name,
      email,
      password,
      confirmPassword,
      pic,
    });
  };

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
        <InputGroup size="lg">
          <Input
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="3rem">
            <IconButton
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
              icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
              aria-label="Toggle Password Visibility"
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="lg">
          <Input
            placeholder="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="3rem">
            <IconButton
              h="1.75rem"
              size="sm"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              icon={showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
              aria-label="Toggle Confirm Password Visibility"
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="profile-pic">
        <FormLabel>Upload Profile Picture</FormLabel>
        <Input
          type="file"
          size="lg"
          accept="image/*"
          onChange={handlePicUpload}
        />
        {pic && <Image src={pic} alt="Profile Preview" boxSize="150px" mt={4} borderRadius="full" />}
      </FormControl>

      <Button colorScheme="teal" size="lg" width="100%" onClick={handleSignUp}>
        Sign Up
      </Button>
    </VStack>
  );
}

export default SignUp;
