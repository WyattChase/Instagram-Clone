import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import FeedPosts from '../../components/FeedPosts/FeedPosts';
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers';

const Home = () => {
  return (
    <Container maxW="container.lg" py={10} px={4}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        align="flex-start"
        justify="space-between"
        gap={10}
      >
        {/* Feed Posts */}
        <Box flex="1" w="100%">
          <FeedPosts />
        </Box>

        {/* Suggested Users */}
        <Box
          w="300px"
          display={{ base: 'none', lg: 'block' }}
          position="sticky"
          top="100px"
          alignSelf="flex-start"
          flexShrink={0}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
