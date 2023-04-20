import { Heading } from "@chakra-ui/react";

interface PageTitleProps {
  attributes: Record<string, string>;
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ attributes, text }) => {
  return <Heading {...attributes}>{text}</Heading>;
};

export default PageTitle;
