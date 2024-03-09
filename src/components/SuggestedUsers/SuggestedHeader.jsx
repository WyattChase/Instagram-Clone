import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore'
import { Link } from 'react-router-dom'

const SuggestedHeader = () => {
  const {handleLogout, isLoggingOut} = useLogout()
  const authUser = useAuthStore(state => state.user)

  console.log(authUser)


  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
        <Avatar name='WyattChase' size={"lg"} src='/profilepic.png'/>
        </Link>
        <Link to={`${authUser.username}`}>
        <Text fontSize={12} fontWeight={"bold"}>
          {authUser.username}
          {/* WyattChase */}
        </Text>
        </Link>
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