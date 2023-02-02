import React, { useEffect, useRef ,useState } from "react";
import { Box, HStack,Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faFacebook ,
} from "@fortawesome/free-brands-svg-icons";
const socials = [
    {
      icon: faEnvelope,
      url: "mailto: mnb7335@gmail.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/Ghadeer-doba",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/ghadeer-doba-12b97418a",
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/ghadeer.abdulwahab?mibextid=ZbWKwL",
    },

  ];


 const Header=()=>{
    const handleClick = (anchor) => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
      const headerRef = useRef(null);
      const [visible, setVisible] = useState(true);
      const [previousScrollPos, setPreviousScrollPos] = useState(0);
    
      useEffect(() => {
        function handleScroll() {
          const currentScrollPos = window.pageYOffset;
          
          if (currentScrollPos > previousScrollPos && visible) {
            setVisible(false);
          } else if (currentScrollPos < previousScrollPos && !visible) {
            setVisible(true);
          }
    
          setPreviousScrollPos(currentScrollPos);
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [visible, previousScrollPos]);
      
      
  
    return(
       
        <Box 
            position="fixed"
            top={0}
            left={0}
            right={0}
            //translateY={0}
            backgroundColor="#19181a"
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            //style={{zIndex:1000 ,boxSizing: "border-box"}}
            ref={headerRef} 
            style={{ display: visible ? "block" : "none" ,zIndex:1000 ,boxSizing: "border-box"}}

            

        >
            <Box color="#cebc81" maxWidth="1280px" margin="0 auto" fontSize={['xs', 'md', 'lg']} >
                <HStack px={[10,16]} py={4} justifyContent="space-between" alignItems="center">
                    <nav >
                      <a href={socials[0].url}><FontAwesomeIcon icon={socials[0].icon} size='2x' style={{ marginRight: '16px' }} /></a>
                      <a href={socials[1].url}><FontAwesomeIcon icon={socials[1].icon} size='2x' style={{ marginRight: '16px' }} /></a>
                      <a href={socials[2].url}><FontAwesomeIcon icon={socials[2].icon} size='2x' style={{ marginRight: '16px' }} /></a>
                      <a href={socials[3].url}><FontAwesomeIcon icon={socials[3].icon} size='2x' style={{ marginRight: '16px' }} /></a>

          
                    </nav>
                    <nav>
                        <HStack spacing={5} >
                        <a href="#contact-me" onClick={handleClick }> <Text>Contact Me</Text> </a>
                        <a href="#projects-section" onClick={handleClick }><Text>Projects</Text></a>
                        </HStack>
                    </nav>

                </HStack>

            </Box>
       </Box>
        

  

        
    );
};

 export default Header;