import React from "react";
import { Avatar, Heading, HStack, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Ghadeer!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React";
const imageStyles = {
    objectFit: "cover",
    width: "200px",
    height: "200px",

  };

const LandingSection = () => (
    
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#cebc81"
    >
        <HStack py={50}>
            <VStack>
            <Avatar size='2xl' name='Ghadeer Doba' src= 'https://i.pinimg.com/564x/a4/3c/ef/a43cef357319727232c2afa36abb2c53.jpg' style={imageStyles} />
                <Heading  size='md' py={5} color='#19181a' fontWeight='bold'>
                    {greeting}
                </Heading> 
            </VStack>

        </HStack>
        <HStack py={5}>
            <Heading as='h1' size='2xl' color='#19181a' fontWeight='normal'>
                {bio1}
            </Heading>
        </HStack>
        <HStack>
            <Heading as='h1' size='2xl' color='#19181a' fontWeight='normal'>
                {bio2}
            </Heading>
        </HStack>
        



    </FullScreenSection>
   );
  
  export default LandingSection;