import { Flex, Image, Text } from "@chakra-ui/react";

import { useContextFunction } from "../../contexts/userContext/userContext";
import { ModalLogin } from "../ModalLogin";
import background from "../../assets/img/background.jpg"


export const MainLandingPage = () => {
  const { isOpen } = useContextFunction();

  const breakpoints = {
    sm: "319px",
    md: "950px",
  };

  return (
    <>
      {isOpen ? <ModalLogin /> : null}
      <Flex
        as={"main"}
        bgImage={background}
        w={{ base: "100%", md: "" }}
        h={{ base: "100%", md: "" }}
        object-fit= "contain"
        p={"20px"}
        align={"center"}
        justify="center"
      >
        <Flex
          marginTop="100px"
          w={{ base: "100%", md: "" }}
          display={{ md: "flex" }}
          align="center"
          justify="center"
          gap="50px"
        >
          <Flex
            justifySelf={"left"}
            bg={"#2C7AED"}
            h={{ sm: "300px", md: "400px" }}
            align={"center"}
            justify="center"
            p={"20px 20px"}
            maxW="400px"
            margin={{ sm: "0 auto", md: "0" }}
            flexDir="column"
            gap={{ sm: "30px", md: "60px" }}
            borderRadius="8px"
          >
            <Text
              color={"white"}
              fontSize={{ base: "20px", lg: "26px" }}
              fontWeight="600"
            >
              Soluções completas para gerenciamento de clientes e contatos, com relatório de dados. Gestão eficiente e profissional dos contatos de sua empresa.
            </Text>
            <Text
              color={"white"}
              fontSize={{ base: "20px", lg: "26px" }}
              fontWeight="600"
            >
              Crie sua conta agora mesmo!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
