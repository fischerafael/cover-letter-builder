import React from "react";

import * as Chakra from "@chakra-ui/react";
import Router from "next/router";

export const PageInitial = () => {
  const handleCreateLetter = () => {
    Router.push("/letter");
  };

  return (
    <Chakra.VStack w="full" minH="100vh" justify="center">
      <Chakra.Button onClick={handleCreateLetter} colorScheme="linkedin">
        Create Cover Letter
      </Chakra.Button>
    </Chakra.VStack>
  );
};
