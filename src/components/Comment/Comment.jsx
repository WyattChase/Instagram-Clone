import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import React from 'react'
import useGetProfileById from '../../hooks/useGetProfileById'

const Comment = ({comment}) => {
    const { userProfile, isLoading } = useGetProfileById(comment.createdBy);
    if(isLoading) return <CommentSkeleton />;

  return (
    <Flex gap={4}>
        <Avatar src={userProfile.profilePicUrl} size={"sm"}/>
        <Flex direction={"column"}>
            <Flex gap={2}>
                <Text fontWeight={"bold"} fontSize={12}>
                    {userProfile.username}
                </Text>
                <Text fontSize={14}>
                    {comment.comment}
                </Text>
                
                
            </Flex>
            
                <Text fontSize={12} color={"gray"}>
                    {comment.createdAt}
                </Text>
        </Flex>
    </Flex>
  )
}

export default Comment

const CommentSkeleton = () => {
    return (
    <Flex gap={4} w={"full"} alignItems={"center"}>
        <SkeletonCircle h={10} w='10'/>
        <Flex gap={1} flexDir={"column"}>
            <Skeleton height={2} width={100}/>
            <Skeleton height={2} width={50}/>
        </Flex>
    </Flex>
    );
};