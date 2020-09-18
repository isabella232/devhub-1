import CollectionCard from '../components/CollectionCard';
import FeedTable from '../components/FeedTable';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import React from 'react';
import parse from 'html-react-parser';
import striptags from 'striptags';
import {BackButton} from '../components/ArrowLink';
import {Box, Container, Grid, Heading, Stack, Text} from '@chakra-ui/core';
import {graphql} from 'gatsby';

export default function CollectionTemplate({data}) {
  return (
    <Layout>
      <Container maxW="xl" px="16">
        <BackButton to="/collections">Collections</BackButton>
        <Heading mb="4" fontSize="4xl">
          {data.collection.title}
        </Heading>
        <Grid mb="16" gap="16" templateColumns="2fr 1fr">
          <Stack fontSize="lg">{parse(data.collection.content)}</Stack>
          <Text fontFamily="mono" color="gray.500" position="relative">
            <Box
              as="span"
              position="absolute"
              top="0"
              left="0"
              fontSize="90px"
              fontFamily="mono"
              fontWeight="bold"
              color="indigo.50"
              lineHeight="1"
              transform="translate(-55%, calc(-100% / 3))"
              userSelect="none"
            >
              &ldquo;
            </Box>
            <Box as="span" position="relative">
              {striptags(data.collection.excerpt).trim()}&rdquo;
            </Box>
          </Text>
        </Grid>
        <FeedTable mb="24" posts={data.collection.collectionSettings.items} />
        <Heading as="h3" mb="6" fontSize="3xl">
          Related collections
        </Heading>
        <Grid gap="8" templateColumns="repeat(auto-fill, minmax(270px, 1fr))">
          <CollectionCard collection={data.collection} />
        </Grid>
      </Container>
    </Layout>
  );
}

CollectionTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query CollectionQuery($id: String!) {
    collection: wpCollection(id: {eq: $id}) {
      ...CollectionFragment
      excerpt
    }
  }
`;
