import type { ChapterSlugType } from "@/types/chapter-slug-type";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import type { MouseEventHandler } from "react";

interface SideBarProps {
  links: ChapterSlugType[];
  onChapterClick: (chapter: string) => void;
}
const SideBar: React.FC<SideBarProps> = ({ links, onChapterClick }) => {
  return (
    <Box minW="15rem" p="1rem">
      <Heading as="h2">Chapters</Heading>
      <Stack spacing={0} borderTop="1px solid white" alignContent="center">
        {links.map((link, i) => {
          return (
            <Button
              key={`link-${i}`}
              onClick={() => onChapterClick(link.slug)}
              id={`${link.slug}`}
            >{`${link.title}`}</Button>
          );
        })}
      </Stack>
    </Box>
  );
};

export default SideBar;
