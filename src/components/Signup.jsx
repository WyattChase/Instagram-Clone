import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react'
import useSignUpWithEmailAndPassword from '../hooks/useSignUpWithEmailAndPassword';

const Signup = () => {
    const [input, setInput] = useState({
        fullName: "",
        username: "",
        email: "",
        password: ""
      });

    const[showPassword, setShowPassword] = useState(false);
    const { loading, error, signup } = useSignUpWithEmailAndPassword()


  return (
    <>
    <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        fontSize={14}
        type="text"
        size={"sm"}
        value={input.username}
        onChange={(e) => setInput({ ...input, username: e.target.value })}
      />
      <Input
        placeholder="Full Name"
        fontSize={14}
        type="text"
        size={"sm"}
        value={input.fullName}
        onChange={(e) => setInput({ ...input, fullName: e.target.value })}
      />
      
      <InputGroup>
      <Input
        placeholder="Password"
        fontSize={14}
        size={"sm"}
        type={showPassword ? "text" : "password"}
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />
      <InputRightElement h={"full"}>
        <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12} />
            {error.message}
        </Alert>
      )}

      <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            isLoading={loading}
            onClick={() => signup(input)}
          >
            Sign Up
          </Button>
    </>
  )
}

export default Signup