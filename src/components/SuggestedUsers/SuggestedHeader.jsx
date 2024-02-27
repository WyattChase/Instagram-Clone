import { Avatar, Flex, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name='WyattChase' size={"lg"} src='/profilepic.png'/>
        <Text fontSize={12} fontWeight={"bold"}>
          WyattChase
        </Text>
      </Flex>

      <Link 
      as={RouterLink}
      to={"/auth"}
      fontSize={14}
      fontWeight={"medium"}
      color={"blue.400"}
      cursor={"pointer"}
      style={{textDecoration: "none"}}
      _hover={{color:"white"}}
      >
      Log Out
      </Link>
        
    </Flex>
  )
}

export default SuggestedHeader