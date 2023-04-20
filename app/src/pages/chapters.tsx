import { useEffect } from "react";
import { useRouter } from "next/router";

const Chapters = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/chapters/chapter-1");
  }, []);

  return null;
};

export default Chapters;
