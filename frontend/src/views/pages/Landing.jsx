import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [formData, setFormData] = useState([]);
  const handleFilters = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
  };
  return (
    <>
      <SearchBar onChangeSearch={handleFilters} />
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
