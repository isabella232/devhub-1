import FeedTable from '../components/FeedTable';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import React from 'react';
import {BackButton} from '../components/ArrowLink';
import {Box, Container, Heading, Text} from '@chakra-ui/core';
import {combinePosts} from '../utils';
import {graphql} from 'gatsby';

export default function Feed({data}) {
  const posts = combinePosts(data);
  return (
    <Layout>
      <Container maxW="xl" px="16">
        <BackButton />
        <Box maxW="container.sm" mb="24">
          <Heading mb="4" fontSize="4xl">
            News Feed
          </Heading>
          <Text fontSize="lg">
            This copy should be descriptive of why this collection exists.
            Including what is in the collection – types of content that
            dominate, maybe this one is blog post heavy but has a single
            implementation item making it more of an overview type of
            collection. If we know what the collection includes we can present
            it as tailored to a skill.
          </Text>
        </Box>
        <FeedTable posts={posts} swapDate />
      </Container>
    </Layout>
  );
}

Feed.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query FeedQuery {
    allWpPost {
      nodes {
        ...PostFragment
      }
    }
    allWpFeedItem(filter: {feedItemSettings: {showInFeed: {eq: true}}}) {
      nodes {
        ...FeedItemFragment
      }
    }
    allTwitchVideo(filter: {published_at: {gt: "0"}}) {
      nodes {
        ...VideoFragment
      }
    }
  }
`;
