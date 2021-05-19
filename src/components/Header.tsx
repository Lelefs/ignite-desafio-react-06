import { Flex } from "@chakra-ui/react";
import Link from 'next/link';

interface HeaderProps {
  showBackButton?: boolean;
}

export default function Header({ showBackButton }: HeaderProps) {
  return (
    <Flex
      align="center"
      justify="center"
      w="100%"
      p="6"
    >
      {showBackButton && (
        <Link href="/">
          <a style={{ position: 'absolute', left: '2rem' }}>
            <img src="/images/back.svg" alt="Voltar" />
          </a>
        </Link>  
      )}

      <Link href="/">
        <a>
          <img src="/images/Logo.png" alt="Worldtrip" />
        </a>
      </Link>
    </Flex>
  )
}