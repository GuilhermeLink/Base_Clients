import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { HeaderDashboard } from "../../components/HeaderDashboard";

export const ClientListPage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("/api/clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

    return (
      <>
        <HeaderDashboard />
        <Box
          mt="6.2rem"
          p="1rem"
          display={{ sm: "flex", lg: "none" }}
          justifyContent="center"
          alignItems="center"
          position="fixed"
          zIndex="1"
          w="100%"
          h="60px"
          bg="white"
        >
        </Box>
        <Box pt={{ sm: "190px", lg: "120px" }} p={{ base: "1rem", md: "2rem" }}>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb="2rem">
            Client List Page
          </Text>
          {/* add your client list here */}
        </Box>
      </>
    );
  };
  
  export default ClientListPage;