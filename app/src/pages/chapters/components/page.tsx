import PageSection from "./page-section";
import PageTitle from "./page-title";
import type { PageType } from "../../../types/page-type";

const Page: React.FC<PageType> = ({ title, sections }) => {
  return (
    <>
      <PageTitle {...title}></PageTitle>
      {sections.map((section, index) => {
        return <PageSection key={`page-section-${index}`} {...section} />;
      })}
    </>
  );
};

export default Page;
