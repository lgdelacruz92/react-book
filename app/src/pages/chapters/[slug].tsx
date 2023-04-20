import { Box, Flex, Stack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import type { Chapter } from "../../types/chapter";
import Page from "./components/page";
interface Props {
  chapter: Chapter;
}

export default function Chapter({ chapter }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Flex>
        <Stack>
          <Link href="chapter-1">Chapter 1.1</Link>
          <Link href="chapter-2">Chapter 1.2</Link>
        </Stack>
        <Box>
          <Page page={chapter.content} />
        </Box>
      </Flex>
    </div>
  );
}

export const getStaticPaths = async () => {
  const paths = [
    { params: { slug: "chapter-1" } },
    { params: { slug: "chapter-2" } },
  ];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params) {
    return { notFound: true };
  }
  const { slug } = params;
  const response = await fetch(`http://localhost:3000/api/chapters/${slug}`);
  const chapterData = await response.json();

  return {
    props: {
      chapter: chapterData,
    },
  };
};
