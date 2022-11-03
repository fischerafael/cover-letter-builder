import React from "react";
import * as Chakra from "@chakra-ui/react";

export const PageHome = () => {
  return (
    <Chakra.SimpleGrid>
      <Chakra.SimpleGrid>
        <Chakra.Input placeholder="Hire Manager Name" />
        <Chakra.Input placeholder="Job Title" />
        <Chakra.Input placeholder="Company Name" />

        <Chakra.HStack>
          <Chakra.Textarea placeholder="Candidate Quality" />
          <Chakra.Button>Add</Chakra.Button>
        </Chakra.HStack>

        <Chakra.VStack>
          <Chakra.HStack>
            <Chakra.Text>5 years of experience working in tech</Chakra.Text>
            <Chakra.Button>Remove</Chakra.Button>
          </Chakra.HStack>
          <Chakra.HStack>
            <Chakra.Text>5 years of experience working in tech</Chakra.Text>
            <Chakra.Button>Remove</Chakra.Button>
          </Chakra.HStack>
          <Chakra.HStack>
            <Chakra.Text>5 years of experience working in tech</Chakra.Text>
            <Chakra.Button>Remove</Chakra.Button>
          </Chakra.HStack>
        </Chakra.VStack>

        <Chakra.Input placeholder="Candidate Name" />
        <Chakra.Input placeholder="Date" />
      </Chakra.SimpleGrid>

      <Chakra.SimpleGrid>
        <Chakra.VStack>
          <Chakra.Text>Dear HIRE_MANAGER</Chakra.Text>
          <Chakra.Text>
            I am writing in response to the opening for a JOB_TITLE at COMPANY,
            which I believe you are the hiring manager.
          </Chakra.Text>
          <Chakra.Text>
            I can offer you {"ALL_QUALITIES"}, all of which should make me an
            ideal candidate for this opening.
          </Chakra.Text>
          <Chakra.Text>
            I have submitted my CV for your review and would welcome the change
            to speak with you sometime.
          </Chakra.Text>
          <Chakra.Text>Best Regards,</Chakra.Text>
          <Chakra.Text>John Travolta</Chakra.Text>
          <Chakra.Text>03/11/2002</Chakra.Text>
        </Chakra.VStack>
      </Chakra.SimpleGrid>
    </Chakra.SimpleGrid>
  );
};
