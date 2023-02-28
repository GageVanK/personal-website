import "./styles.css";
import NavBar from "./components/NavBar";
import HeroHeader from "./components/HeroHeader";
import { StyledPageContainer } from "./components/StyledPageContainer";
import ProjectAccordion from "./components/ProjectAccordion";
import { Space } from "@mantine/core";

export default function App() {
  return (
    <>
      <NavBar />
      <StyledPageContainer>
        <HeroHeader />
        <Space h="xl" />
        <ProjectAccordion />
      </StyledPageContainer>
    </>
  );
}
