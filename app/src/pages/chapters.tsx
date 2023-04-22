import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import type { ChapterType } from "@/types/chapter-type";
import type { ChapterSlugType } from "@/types/chapter-slug-type";
import "highlight.js/styles/monokai.css";
import Sidebar from "./components/sidebar";
import { useEffect, useState } from "react";
import MarkDown from "./components/mark-down";

const fetchChapterSlugs = async (): Promise<ChapterSlugType[]> => {
  console.log(process.env.API_URL);
  const response = await fetch(`${process.env.API_URL}/chapters`);
  const chapterSlugs: ChapterSlugType[] = await response.json();
  return chapterSlugs;
};

const fetchChapter = async (chapterSlug: string): Promise<ChapterType> => {
  const response = await fetch(
    `${process.env.API_URL}/chapters/${chapterSlug}`
  );
  const newPosts: ChapterType = await response.json();
  return newPosts;
};

const Chapters = () => {
  const [currentChapter, setChapter] = useState<ChapterType>({
    title: "",
    content: "",
    slug: "",
  });

  const [chapterSlug, setChapterSlug] = useState<string>("");
  const [links, setLinks] = useState<ChapterSlugType[]>([]);

  const handleSideBarClick = (slug: string) => {
    setChapterSlug(slug);
  };

  useEffect(() => {
    fetchChapter(chapterSlug)
      .then((response) => {
        setChapter(response);
      })
      .catch((err) => console.error(err));
  }, [chapterSlug]);

  useEffect(() => {
    fetchChapterSlugs()
      .then((chapterSlugs) => {
        if (chapterSlugs.length > 0) {
          setChapterSlug(chapterSlugs[0].slug);
        }
        setLinks(chapterSlugs);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Center>
      <Box w="70%">
        <Flex>
          <Stack>
            <Sidebar
              activeLink={chapterSlug}
              links={links}
              onChapterClick={handleSideBarClick}
            />
          </Stack>
          <Box p="1rem">
            <MarkDown content={currentChapter.content || ""}></MarkDown>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default Chapters;
