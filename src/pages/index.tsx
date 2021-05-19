import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Topics from '../components/Topics';

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>Início | Worldtrip</title>
      </Head>

      <Header />

      <img src="/images/Banner.png" alt="Banner" width="100%" />

      <Flex w="100%" maxWidth={1280} pt="20" px="6" pb="6" mx="auto">
        <Topics />
      </Flex>

      <Flex w="90px" h="2px" mx="auto" mb="14" backgroundColor="#47585B">
        <Text opacity="0">.</Text>
      </Flex>

      <Flex w="100%" maxWidth={1280} pt="20" px="6" pb="6" mx="auto" justifyContent="center" direction="column">
        <Text color="#47585B" fontSize="36px" lineHeight="54px" textAlign="center">Vamos nessa?</Text>
        <Text color="#47585B" fontSize="36px" lineHeight="54px" textAlign="center">Então escolha seu continente</Text>
      </Flex>

      <Flex w="100%" maxWidth={1280} pt="20" px="6" pb="6" mx="auto">
        <Link href="/europe">
          <a>
            <img src="/images/slider/Europe.png" alt="Europa" />
          </a>
        </Link>
      </Flex>
    </Flex>
  )
}
