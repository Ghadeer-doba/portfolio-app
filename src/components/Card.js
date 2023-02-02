import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

    return(
        <Box 
        bg="#FAFAFA"
        borderRadius={25}
        maxW="md" 
        borderWidth="0" 
        overflow="hidden"
        >
        <Image 
        src={imageSrc} 
        alt={title}
        height ={300}
        width= {500}
        objectFit='cover' 
        />
        <VStack p="6" >
            <Box>
                <HStack><Heading  
                        size='md'
                        color='#cebc82'
                        textAlign='left'
                        
                        >{title} 
                        </Heading>
                </HStack>
                <HStack>
                        <Text fontSize='md'
                              color='gray'
                              py={15}
                            >
                        {description}
                        </Text>
                </HStack>
                <HStack>
                <Text textAlign='left' color='#cebc82'>see more <span><FontAwesomeIcon icon={faArrowRight} size="1x" /></span></Text>
                </HStack>
        

        
            </Box>
        
        </VStack>
       
        </Box>
            
    );
  };
export default Card;