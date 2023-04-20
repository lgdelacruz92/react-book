import { SectionContentType } from "@/types/section-content-type";
import { Text } from "@chakra-ui/react";

const SectionContent: React.FC<SectionContentType> = ({ text, attributes }) => {
  return (
    <>
      <Text {...attributes}>{text}</Text>
    </>
  );
};

export default SectionContent;
