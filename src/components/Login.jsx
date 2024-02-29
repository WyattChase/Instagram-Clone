import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

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

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log In
      </Button>
    </>
  );
};

export default Login;
