import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import {
  Page2,
  FlashDeal,
  TrendingBlogs,
  SearchBar,
  Page4,
  Sin2,
  Footer,
} from "../components";

const Landing = () => {
  return (
    <>
      <SearchBar />
      <Page2 />
      <FlashDeal />
      <TrendingBlogs />
      <Page4 />

      {/* <Sin2 /> */}
      <Footer />
    </>
  );
};

export default Landing;
