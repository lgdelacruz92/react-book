import type { PageSectionType } from "../../../types/page-section-type";
import Section from "./section";
import SectionTitle from "./section-title";

const PageSection: React.FC<PageSectionType> = ({ title, section }) => {
  return (
    <>
      <SectionTitle {...title} />
      <Section {...section} />
    </>
  );
};

export default PageSection;
