import { Flex, Text } from "@chakra-ui/react";

export default function Topics() {
  return (
    <Flex px="2" mb="8" justifyContent="space-between" width="100%">
      <Flex direction="column" mx="2" align="center">
        <img src="/images/topics/cocktail.png" alt="Vida noturna" />
        <Text fontSize="24px" mt="4" fontWeight="bold" color="#47585b" lineHeight="36px">vida noturna</Text>
      </Flex>

      <Flex direction="column" mx="2" align="center">
        <img src="/images/topics/surf.png" alt="Praia" />
        <Text fontSize="24px" mt="4" fontWeight="bold" color="#47585b" lineHeight="36px">praia</Text>
      </Flex>

      <Flex direction="column" mx="2" align="center">
        <img src="/images/topics/building.png" alt="Moderno" />
        <Text fontSize="24px" mt="4" fontWeight="bold" color="#47585b" lineHeight="36px">moderno</Text>
      </Flex>

      <Flex direction="column" mx="2" align="center">
        <img src="/images/topics/museum.png" alt="Clássico" />
        <Text fontSize="24px" mt="4" fontWeight="bold" color="#47585b" lineHeight="36px">clássico</Text>
      </Flex>

      <Flex direction="column" mx="2" align="center">
        <img src="/images/topics/earth.png" alt="Mais" />
        <Text fontSize="24px" mt="4" fontWeight="bold" color="#47585b" lineHeight="36px">e mais...</Text>
      </Flex>
    </Flex>
  )
}