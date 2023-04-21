import { Box, Flex, Stack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import type { ChapterType } from "@/types/chapter-type";
import type { ChapterSlugType } from "@/types/chapter-slug-type";
import "highlight.js/styles/monokai.css";
interface Props {
  chapter: ChapterType;
  paths: ChapterSlugType[];
}

export default function Chapter({ chapter, paths }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Flex>
        <Stack>
          {paths.map((path, i) => {
            return (
              <Link key={`slug-${i}`} href={`${path.slug}`}>
                {path.title}
              </Link>
            );
          })}
        </Stack>
        <Box dangerouslySetInnerHTML={{ __html: chapter.content }}></Box>
      </Flex>
    </div>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:3000/api/chapters`);
  const chapterData = await response.json();
  const paths = chapterData.map((c: ChapterType) => ({
    params: { slug: c.slug },
  }));

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

  // Get paths again
  const chapterSlugsResponse = await fetch(
    `http://localhost:3000/api/chapters`
  );
  const chapterSlugs = await chapterSlugsResponse.json();
  const paths = chapterSlugs.map((c: ChapterType) => ({
    slug: c.slug,
    title: c.title,
  }));

  return {
    props: {
      chapter: chapterData,
      paths,
    },
  };
};
