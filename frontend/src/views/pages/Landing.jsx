import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import {
  FlashDeal,
  TrendingBlogs,
  SearchBar,
  OurHighlights,
  FeaturedDestination,
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
      <FeaturedDestination />
      <FlashDeal />
      <TrendingBlogs />
      <OurHighlights />
    </>
  );
};

export default Landing;
