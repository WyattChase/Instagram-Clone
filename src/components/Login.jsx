import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const  {loading, error, login} = useLogin()

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        size={"sm"}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />
      
      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12} />
            {error.message}
        </Alert>
      )}

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={() => login(input)} isLoading={loading}>
        Log In
      </Button>
    </>
  );
};

export default Login;
