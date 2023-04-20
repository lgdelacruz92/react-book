import { SectionTitleType } from "@/types/section-title-type";
import { Heading } from "@chakra-ui/react";

const SectionTitle: React.FC<SectionTitleType> = ({ text, attributes }) => {
  return (
    <>
      <Heading {...attributes}>{text}</Heading>
    </>
  );
};

export default SectionTitle;
