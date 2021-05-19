import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header';
import TopicsEurope from '../components/TopicsEurope';

export default function Europe() {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>Europe | Worldtrip</title>
      </Head>

      <Header showBackButton />

      <img src="/images/pages/Europe.png" alt="Europa" width="100%" />

      <Flex w="100%" maxWidth={1280} pt="20" px="6" pb="6" mx="auto">
        <TopicsEurope />
      </Flex>
    </Flex>
  )
}
