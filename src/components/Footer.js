import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex 
          margin="0 auto"
          px={12}
          color="#cebc81"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Ghadeer Doba 🔥️ • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
