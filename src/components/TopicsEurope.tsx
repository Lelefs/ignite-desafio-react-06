import { Flex, Text } from "@chakra-ui/react";

export default function Topics() {
  return (
    <Flex px="2" mb="8" justifyContent="space-between" width="100%" alignItems="center">
      <Text maxWidth="50%" mx="2" textAlign="justify" fontSize="24px" lineHeight="36px" color="#47585b">
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental 
        da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes 
        Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <Flex direction="column" mx="2" align="center">
        <Text fontSize="48px" lineHeight="72px" color="#FFBA08">50</Text>
        <Text fontSize="24px" fontWeight="bold" color="#47585b" lineHeight="36px">países</Text>
      </Flex>

      <Flex direction="column" mx="2" align="center">
        <Text fontSize="48px" lineHeight="72px" color="#FFBA08">60</Text>
        <Text fontSize="24px" fontWeight="bold" color="#47585b" lineHeight="36px">línguas</Text>
      </Flex>

      <Flex direction="column" mx="2" align="center">
        <Text fontSize="48px" lineHeight="72px" color="#FFBA08">27</Text>
        <Text fontSize="24px" fontWeight="bold" color="#47585b" lineHeight="36px">cidades +100</Text>
      </Flex>
    </Flex>
  )
}