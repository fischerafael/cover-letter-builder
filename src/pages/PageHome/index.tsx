import React from "react";
import * as Chakra from "@chakra-ui/react";

interface IState {
  hiringManagerName: string;
  jobTitle: string;
  companyName: string;
  quality: string;
  candidateQualities: string[];
  candidateName: string;
  date: string;
}

export const PageHome = () => {
  const [state, setState] = React.useState<IState>({
    hiringManagerName: "",
    jobTitle: "",
    companyName: "",
    quality: "",
    candidateQualities: [],
    candidateName: "",
    date: "",
  });

  console.log(state);

  const handleChange = (value: string, key: string) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const handleAddQuality = () => {
    try {
      if (state.candidateQualities.length >= 5)
        throw new Error("You cannot add more than 5 qualities");
      setState((state) => ({
        ...state,
        candidateQualities: [...state.candidateQualities, state.quality],
        quality: "",
      }));
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <Chakra.SimpleGrid
      columns={[1, 1, 1, 2]}
      w="full"
      minH="100vh"
      gap="8"
      fontFamily="sans-serif"
    >
      <Chakra.SimpleGrid gap="8" alignContent="flex-start" h="100vh" p="8">
        <Chakra.VStack align="flex-start">
          <Chakra.Text fontSize="lg">
            Cover Letter{" "}
            <Chakra.Text as="span" fontWeight="black">
              Creator
            </Chakra.Text>
          </Chakra.Text>
          <Chakra.Text>
            Based on the template, as per Harvard Business Review's David
            Silverman, is the best template a hiring manager can ever receive.
          </Chakra.Text>
        </Chakra.VStack>

        <Chakra.Input
          placeholder="Hiring Manager Name"
          borderRadius="0"
          fontSize="xs"
          value={state.hiringManagerName}
          onChange={(e) => handleChange(e.target.value, "hiringManagerName")}
        />
        <Chakra.Input
          placeholder="Job Title"
          borderRadius="0"
          fontSize="xs"
          value={state.jobTitle}
          onChange={(e) => handleChange(e.target.value, "jobTitle")}
        />
        <Chakra.Input
          placeholder="Company Name"
          borderRadius="0"
          fontSize="xs"
          value={state.companyName}
          onChange={(e) => handleChange(e.target.value, "companyName")}
        />

        <Chakra.HStack align="flex-end" gap="8">
          <Chakra.Textarea
            placeholder="Candidate Quality"
            borderRadius="0"
            fontSize="xs"
            value={state.quality}
            onChange={(e) => handleChange(e.target.value, "quality")}
          />
          <Chakra.Button
            borderRadius="2"
            colorScheme="linkedin"
            fontSize="xs"
            minW="100px"
            onClick={handleAddQuality}
          >
            Add
          </Chakra.Button>
        </Chakra.HStack>

        <Chakra.VStack w="full" spacing="2">
          <Chakra.HStack w="full" gap="8">
            <Chakra.Text w="full">
              5 years of experience working in tech
            </Chakra.Text>
            <Chakra.Button
              borderRadius="2"
              colorScheme="linkedin"
              fontSize="xs"
              minW="100px"
              variant="outline"
            >
              Remove
            </Chakra.Button>
          </Chakra.HStack>
          <Chakra.HStack w="full" gap="8">
            <Chakra.Text w="full">
              5 years of experience working in tech
            </Chakra.Text>
            <Chakra.Button
              borderRadius="2"
              colorScheme="linkedin"
              fontSize="xs"
              minW="100px"
              variant="outline"
            >
              Remove
            </Chakra.Button>
          </Chakra.HStack>
          <Chakra.HStack w="full" gap="8">
            <Chakra.Text w="full">
              5 years of experience working in tech
            </Chakra.Text>
            <Chakra.Button
              borderRadius="2"
              colorScheme="linkedin"
              fontSize="xs"
              minW="100px"
              variant="outline"
            >
              Remove
            </Chakra.Button>
          </Chakra.HStack>
        </Chakra.VStack>

        <Chakra.Input
          placeholder="Candidate Name"
          borderRadius="0"
          fontSize="xs"
          value={state.candidateName}
          onChange={(e) => handleChange(e.target.value, "candidateName")}
        />
        <Chakra.Input
          placeholder="Date"
          type="date"
          borderRadius="0"
          fontSize="xs"
          value={state.date}
          onChange={(e) => handleChange(e.target.value, "date")}
        />
      </Chakra.SimpleGrid>

      <Chakra.SimpleGrid p="8" w="full" gap="8" justifyItems="flex-end">
        <Chakra.VStack
          w="full"
          p="8"
          py="16"
          shadow="2xl"
          gap="8"
          align="flex-start"
          fontSize="sm"
          maxW="540px"
          h="full"
          maxH="800px"
        >
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
          <Chakra.VStack w="full" align="flex-start">
            <Chakra.Text>John Travolta</Chakra.Text>
            <Chakra.Text>03/11/2002</Chakra.Text>
          </Chakra.VStack>
        </Chakra.VStack>
        <Chakra.Button
          borderRadius="2"
          colorScheme="linkedin"
          fontSize="xs"
          minW="100px"
          justifySelf="flex-end"
        >
          Download Cover Letter
        </Chakra.Button>
      </Chakra.SimpleGrid>
    </Chakra.SimpleGrid>
  );
};
