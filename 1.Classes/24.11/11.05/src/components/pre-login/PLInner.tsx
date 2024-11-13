// components/Main.tsx
import React from "react";
import styled from "styled-components";
import PopularContent from "./PopularContent";
import Slide from "./Slide";
import TargetValueBanner from "./TargetValuBanner";
import Benefits from "./Benefits";
import Devices from "./Device";
import Inquiries from "./Inquries";
import OriginalMovies from "./OriginalMovies";
import Variety from "./Variety";
import PlanGuide from "./PlanGuide";

const MainContainer = styled.main`
  padding-bottom: 8vw;
`;

const PLInner = () => (
  <MainContainer>
    <Slide />
    <PopularContent />
    <Devices />
    <TargetValueBanner />
    <Variety />
    <OriginalMovies />
    <Benefits />
    <PlanGuide />
    <Inquiries />
  </MainContainer>
);

export default PLInner;
