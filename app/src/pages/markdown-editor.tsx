import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Markdown from "./components/mark-down";

function MarkDownEditor() {
  const [content, setContent] = useState("");

  const handleContentChange = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const text = event.currentTarget.innerText;
    setContent(text);
  };

  return (
    <Box w="50%" mx="auto" my={10}>
      <Heading as="h3" textAlign="center" mb="1rem">
        Content Creator
      </Heading>
      <Box
        border="1px solid white"
        borderRadius="5px"
        minHeight="22rem"
        p="1rem"
        contentEditable
        onInput={handleContentChange}
      />
      <Box mt="2rem">
        <Markdown content={content} />
      </Box>
    </Box>
  );
}

export default MarkDownEditor;
