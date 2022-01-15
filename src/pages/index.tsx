import { HomeLayout } from "@/components/layout/HomeLayout";
import { Index } from "@/components/page/index";

const HomePage = (): JSX.Element => {
  return <Index />;
};

HomePage.getLayout = HomeLayout;

export default HomePage;
