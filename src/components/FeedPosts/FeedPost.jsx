import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'
import useGetProfileById from '../../hooks/useGetProfileById'


const FeedPost = ({post}) => {
  const { userProfile } = useGetProfileById(post.createdBy);
  console.log(post.createdBy)
  console.log(userProfile)
  return (
    <>
    <PostHeader post={post} creatorProfile={userProfile}/>
    <Box my={2} borderRadius={4} overflow={"hidden"}>
      <Image src={post.imageURL} alt={"Feed Post Image"} />
    </Box>
    {/* <PostFooter username={username}/> */}
    </>
  )
}

export default FeedPost