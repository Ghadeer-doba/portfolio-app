import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  FormHelperText,
  Alert,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen, onClose } = useAlertContext();
  
    const formik = useFormik({
      initialValues: {firstName:'',email:'',type:'hireMe',comment:''},

      onSubmit: (values) => { 
        submit('https://john.com/contactme', values); 
      }, 

      validationSchema: Yup.object({
        firstName: Yup.string().required("Name is required"),
        email:Yup.string().email("Invalid email address").required("Email is required"),
        type: Yup.string().required("Type of enquiry is required"),
        comment: Yup.string().required("Comment is required"),
      }),
    });

    useEffect(() => { 
      if (response) { 
        onOpen(response.type, response.message); 
        if (response.type === 'success') { 
          formik.resetForm(); 
        } 
      } 
    }, [response]); 


    return (
        <FullScreenSection
          isDarkBackground
          backgroundColor="#a16e83"
          py={16}
          spacing={8}
        >
          <VStack w={{ base: "300px", md: "1024px", lg: "1024px" }} p={{ base:1, md: 32, lg: 32 }} alignItems="flex-start" color='white'>
            <Heading as="h1" id="contact-me">
              Contact me
            </Heading>
            <Box p={{ base:1, md: 6, lg: 6 }} rounded="md" w="100%">
              <form onSubmit={formik.handleSubmit} >
                <VStack spacing={4} >
                  <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      focusBorderColor='#cebc81'
                      {...formik.getFieldProps("firstName")}
                    
                    />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      {...formik.getFieldProps("email")}
                      focusBorderColor='#cebc81'
                    />
                    
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl >
                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                    <Select id="type" name="type" color='#cebc81' fontWeight='bold' {...formik.getFieldProps("type")} focusBorderColor='#cebc81'>
                      <option value="hireMe">Freelance project proposal</option>
                      <option value="openSource">
                        Open source consultancy session
                      </option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                    <FormLabel htmlFor="comment">Your message</FormLabel>
                    <Textarea
                      id="comment"
                      name="comment"
                      height={250}
                      {...formik.getFieldProps("comment")}
                      focusBorderColor='#cebc81'
                    />
                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" colorScheme='gray' bg='#cebc81'  width="full">
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          </VStack>
        </FullScreenSection>
      );
};

export default LandingSection;
