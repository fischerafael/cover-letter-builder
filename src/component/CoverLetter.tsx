import React from "react";
import * as Chakra from "@chakra-ui/react";
import { IState } from "../pages/PageHome";
import { exportComponentAsPDF } from "react-component-export-image";

interface CoverLetterProps {
  state: IState;
}

const CoverLetter = ({ state }: CoverLetterProps) => {
  const qualitiesString = state.candidateQualities.map((qual, index) => {
    if (state.candidateQualities.length === 1) {
      return qual;
    }
    if (state.candidateQualities.length === 2) {
      if (index === 1) {
        return `, and ${qual}`;
      }
      return qual;
    }

    if (index === 0) {
      return qual;
    }

    if (index === state.candidateQualities.length - 1) {
      return `, and ${qual}`;
    }

    return `, ${qual}`;
  });

  const componentRef = React.useRef(null);

  const handleDownload = () => {
    exportComponentAsPDF(componentRef, {
      fileName: "Cover Letter",
      pdfOptions: {
        w: 540,
        h: 800,
        unit: "pt",
        // pdfFormat: [800, 540],
      },
    });
  };

  return (
    <Chakra.VStack
      w="full"
      p="8"
      py="16"
      gap="8"
      align="flex-start"
      fontSize="sm"
      maxW="540px"
      h="full"
      maxH="800px"
      style={{ outline: "solid 1px #e6e6e6" }}
      ref={componentRef}
      onClick={handleDownload}
      cursor="pointer"
    >
      <Chakra.Text>
        Dear {state.hiringManagerName || "HIRING MANAGER"}
      </Chakra.Text>
      <Chakra.Text>
        I am writing in response to the opening for a{" "}
        {state.jobTitle || "JOB TITLE"} at {state.companyName || "COMPANY NAME"}
        , which I believe you are the hiring manager.
      </Chakra.Text>
      <Chakra.Text>
        I can offer you{" "}
        {qualitiesString.length > 0 ? qualitiesString : "QUALITIES"},{" "}
        {state.candidateQualities.length > 1 && "all of"} which should make me
        an ideal candidate for this opening.
      </Chakra.Text>
      <Chakra.Text>
        I have submitted my CV for your review and would welcome the change to
        speak with you sometime.
      </Chakra.Text>
      <Chakra.Text>Best Regards,</Chakra.Text>
      <Chakra.VStack w="full" align="flex-start">
        <Chakra.Text>{state.candidateName || "CANDIDATE NAME"}</Chakra.Text>
        <Chakra.Text>{new Date().toLocaleDateString()}</Chakra.Text>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};

export default CoverLetter;
