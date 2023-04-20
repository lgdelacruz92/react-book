import type { Chapter } from "../../../types/chapter";
import PageSection from "./page-section";
import PageTitle from "./page-title";
import type { Page } from "../../../types/page";
interface PageProps {
  page: Page;
}

const Page: React.FC<PageProps> = ({ page }) => {
  return (
    <>
      <PageTitle {...page.title}></PageTitle>
      <PageSection content={page.content}></PageSection>
    </>
  );
};

export default Page;
