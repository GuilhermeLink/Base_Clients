import { Button, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { useContextFunction } from "../../contexts/userContext/userContext";
import { IMenuButton, MenuMobile } from "../MenuMobile";
import { BsGearWideConnected } from "react-icons/bs";


export const HeaderLandingPage = () => {
  const { onOpen, setModalControl, setModalType } = useContextFunction();

  const openRegisterModal = () => {
    setModalControl(true), setModalType("register");
  };

  const buttonsLandingPage: IMenuButton[] = [
    {
      buttonTitle: "Login",
      buttonAction: onOpen,
    },
    {
      buttonTitle: "Cadastro",
      buttonAction: openRegisterModal,
    },
  ];

  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      justify="space-between"
      px={{ base: 4, lg: 10 }}
      py={{ base: 2, lg: 4 }}
      bg="#2C7AED"
      boxShadow="0px 4px 9px rgba(0, 0, 0, 0.507)"
      position="fixed"
      top="0"
      zIndex="999"
    >
      <Flex align="center" gap={{ base: 2, lg: 4 }}>
        <BsGearWideConnected size="32px" color="#DAEEFA" />
        <Heading
          as="h1"
          fontSize={{ base: "20px", md: "24px", lg: "26px" }}
          color="#DAEEFA"
        >
          Base Clients
        </Heading>
      </Flex>
      <Stack
        display={{ base: "none", lg: "flex" }}
        direction="row"
        spacing={4}
        color="white"
      >
        <Button
          onClick={onOpen}
          bgGradient="linear(to-t, #2CEDE0, #2C7AED)"
          _hover={{ opacity: "0.7" }}
          fontSize={{ base: "12px", md: "16px" }}
          px={{ base: 3, md: 4 }}
          py={{ base: 2, md: 3 }}
          borderRadius="lg"
          boxShadow="0px 4px 9px rgba(0, 0, 0, 0.315)"
        >
          Login
        </Button>
        <Button
          onClick={openRegisterModal}
          bgGradient="linear(to-t, #2CEDE0, #2C7AED)"
          _hover={{ opacity: "0.7" }}
          fontSize={{ base: "12px", md: "16px" }}
          px={{ base: 3, md: 4 }}
          py={{ base: 2, md: 3 }}
          borderRadius="lg"
          boxShadow="0px 4px 9px rgba(0, 0, 0, 0.315)"
        >
          Cadastro
        </Button>
      </Stack>
      <MenuMobile buttons={buttonsLandingPage} />
    </Flex>
  );
};
