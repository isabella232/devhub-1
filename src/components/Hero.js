import PropTypes from 'prop-types';
import React from 'react';
import commandModule from '../assets/command-module.svg';
import {Box, Flex, Heading, Img, Text} from '@chakra-ui/core';
import {MAX_WIDTH, SECTION_SPACING} from '../utils';

const WRAPPER_PADDING = {base: '0', lg: '6', xl: '14'};
const HERO_TEXT_MARGIN = Object.entries(SECTION_SPACING.mx).reduce(
  (acc, [key, val]) => {
    const isWrapperNum = Number(WRAPPER_PADDING[key]);
    const isSectionNumAuto = val === 'auto';

    return {
      ...acc,
      [key]:
        isSectionNumAuto || !isWrapperNum
          ? val
          : `${Number(val) - Number(WRAPPER_PADDING[key])}`
    };
  },
  {}
);

export default function Hero({title, description}) {
  return (
    <Flex px={WRAPPER_PADDING} w="full" justify="center" align="center" mb="8">
      <Flex
        alignItems="center"
        py={{base: '6', lg: '44px'}}
        borderRadius={{base: '0', lg: '12px'}}
        color="white"
        w="full"
        maxW="1392px"
        css={({theme}) => ({
          backgroundImage: `linear-gradient(360deg, #0A061E 8.24%, ${theme.colors.indigo[800]} 100.52%)`
        })}
      >
        <Box w="full" mx={HERO_TEXT_MARGIN}>
          <Flex
            align="center"
            justify="space-between"
            w="full"
            maxW={MAX_WIDTH}
            mx="auto"
          >
            <Box>
              <Text
                fontSize="xs"
                fontWeight="semibold"
                fontFamily="mono"
                textTransform="uppercase"
              >
                GraphQL Resources
              </Text>
              <Heading my="2" as="h1" fontSize="2rem">
                {title}
              </Heading>
              <Text w={{lg: '370px'}} display="inline-block">
                An Apollo data graph helps you build apps faster with less code.{' '}
                {description}
              </Text>
            </Box>
            <Img
              src={commandModule}
              alt="Space command module"
              display={{base: 'none', lg: 'block'}}
            />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
