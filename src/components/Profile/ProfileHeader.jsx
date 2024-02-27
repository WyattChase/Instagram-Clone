import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex gap={{base:4, sm:10}} py={10} direction={{base:"column", sm:"row"}}>
        <AvatarGroup 
            size={{base:"x1", md:"2x1"}}
            justifySelf={"center"}
            alignSelf={"center"}
            mx={"auto"}
        >
            <Avatar name='WyattChase' src='/profilepic.png' alt='Wyatt Chase' />
        </AvatarGroup>

        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
            <Flex gap={4} direction={{base:"column",sm:"row"}}
                justifyContent={{base: "center", sm:"flex-start"}}
                alignItems={"start"}
                w={"full"}>
                    <Text fontSize={{base:"sm",md:"lg"}}>WyattChase</Text>
                    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                        <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:"xd",md:"sm"}}>
                            Edit Profile
                        </Button>
                    </Flex>
                </Flex>

                <Flex alignItems={"center"} gap={{base:2,sm:4}}>
                    <Text fontSize={{base:"xs",md:"sm"}}> 
                        <Text as={span} fontWeight={"bold"} mr={1}> 
                        4 </Text>
                        Posts
                    </Text>
                    <Text fontSize={{base:"xs",md:"sm"}}> 
                        <Text as={span} fontWeight={"bold"} mr={1}> 
                        149 </Text>
                        Followers
                    </Text>
                    <Text fontSize={{base:"xs",md:"sm"}}> 
                        <Text as={span} fontWeight={"bold"} mr={1}> 
                        175 </Text>
                        Following
                    </Text>
                    
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                    <Text fontSize={"sm"}> Wyatt Chase </Text>
                </Flex>
        </VStack>
    </Flex>
  )
}

export default ProfileHeader