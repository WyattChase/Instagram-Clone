import { Avatar, Button, Flex, Text } from '@chakra-ui/react'

import React from 'react'
import useLogout from '../../hooks/useLogout'

const SuggestedHeader = () => {
  const {handleLogout, isLoggingOut}=useLogout()
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name='WyattChase' size={"lg"} src='/profilepic.png'/>
        <Text fontSize={12} fontWeight={"bold"}>
          WyattChase
        </Text>
      </Flex>

      <Button
      size={"xs"}
      background={"transparent"}
      _hover={{background: "transparent"}}
      onClick={handleLogout}
      isLoading={isLoggingOut}
      fontSize={14}
      fontWeight={"medium"}
      color={"blue.400"}
      cursor={"pointer"}
      >
      Log Out
      </Button>
        
    </Flex>
  )
}

export default SuggestedHeader