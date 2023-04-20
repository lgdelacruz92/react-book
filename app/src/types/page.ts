
import type { PageTitle } from './page-title'
import type { PageSection } from './page-section';
export interface Page {
    title: PageTitle;
    content: PageSection[]
}