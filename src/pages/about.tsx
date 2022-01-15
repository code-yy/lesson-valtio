import { AboutLayout } from "@/components/layout/AboutLayout";
import { About } from "@/components/page/about";

const AboutPage = (): JSX.Element => {
  return <About />;
};

AboutPage.getLayout = AboutLayout;

export default AboutPage;
