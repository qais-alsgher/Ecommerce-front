import { React, useEffect } from "react";
import Hero from "../components/home/Hero";
import TopSellingCarousel from "../components/home/TopSellingCarousel";
import Feature from "../components/home/Feature";
import {  Container } from "@chakra-ui/react";
import TitleSection from "../components/home/TitleSection";
import Categories from "../components/home/Categories";
import Partner from "../components/home/Partner";
import BgContainer from "../components/home/BgContainer";
import { getTopSellingItems } from "../store/actions/itemAction";
import { useDispatch, useSelector } from "react-redux";
import { selectTopSellingItems } from "../store/features/itemSlicer";

export default function Home() {
  const dispatch = useDispatch();
  const topSellingItems = useSelector(selectTopSellingItems);

  useEffect(() => {
    getTopSellingItems(dispatch);
  }, []);

  return (
    <>
      <Hero />
      <BgContainer>
        <TitleSection title="Top Selling Products" />
        <TopSellingCarousel items={topSellingItems} />
      </BgContainer>

      <Container maxW="container.xl">
        <TitleSection title="Categories" />
        <Categories />
      </Container>

      <BgContainer>
        <TitleSection title="Featur" />
        <Feature />
      </BgContainer>

      <Container maxW="container.xl">
        <TitleSection title="Our Partner" />
        <Partner />
      </Container>
    </>
  );
}
