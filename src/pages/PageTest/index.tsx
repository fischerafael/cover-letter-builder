import React from "react";
import * as Chakra from "@chakra-ui/react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const PageTestReactPDF = () => {
  const card = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const pages = 2;

  const handleDownloadPDF = async () => {
    const element = card.current;
    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      unit: "px",
      compress: true,
      format: [800, 800],
    });
    const props = pdf.getImageProperties(data);
    const width = pdf.internal.pageSize.getWidth();
    // const height = (props.height * width) / props.width;
    const height = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, "PNG", 0, 0, width, height);
    pdf.addPage();
    pdf.addImage(data, "PNG", 0, 0, width, height);

    pdf.save("print.pdf");
  };

  // const handleDownloadImage = async () => {
  //   const element = card.current;
  //   const canvas = await html2canvas(element, {
  //     scale: 4,
  //   });
  //   const data = canvas.toDataURL("image/png");
  //   const link = document.createElement("a");
  //   if (typeof link.download === "string") {
  //     link.href = data;
  //     link.download = "image.jpg";

  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else {
  //     window.open(data);
  //   }
  // };

  return (
    <Chakra.VStack w="full" minH="100vh" justify="center">
      <Chakra.VStack w="full" minH="100vh" justify="center" spacing="0">
        <Chakra.VStack
          bg="gray.50"
          w="400px"
          h="400px"
          p="8"
          justify="space-around"
          ref={card}
        >
          <Chakra.VStack bg="gray.50" p="8" h="fit-content">
            <Chakra.Text>Rafael Fischer</Chakra.Text>
            <Chakra.Text>@fischerafael</Chakra.Text>
          </Chakra.VStack>
          <Chakra.Text fontSize="3xl" h="fit-content">
            Testing Something
          </Chakra.Text>
        </Chakra.VStack>
        {/* <Chakra.VStack
          bg="gray.50"
          w="400px"
          h="400px"
          p="8"
          justify="space-around"
        >
          <Chakra.VStack bg="gray.50" p="8" h="fit-content">
            <Chakra.Text>Rafael Fischer</Chakra.Text>
            <Chakra.Text>@fischerafael</Chakra.Text>
          </Chakra.VStack>
          <Chakra.Text fontSize="3xl" h="fit-content">
            Testing Something
          </Chakra.Text>
        </Chakra.VStack> */}
      </Chakra.VStack>

      <Chakra.Button onClick={handleDownloadPDF}>Download PDF</Chakra.Button>
    </Chakra.VStack>
  );
};
