import { useState } from "react";
import styled from "styled-components";
import "./App.css";

import Main from "./components/Main";
import Terminal from "./components/terminal/Terminal";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import NetworkBackground from "./components/NetworkBackground";
import { useTranslation } from "./components/i18n/useTranslation";

type View = "terminal" | "projects" | "experience";

const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  isolation: isolate;
  background-color: #f5f5f5;
  overflow-x: clip;
`;

const BackgroundLayer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;

  background-image:
    linear-gradient(to right, rgba(13, 59, 102, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(13, 59, 102, 0.06) 1px, transparent 1px);

  background-size: 40px 40px;
  background-position: 0 0;
`;

const Layout = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.03fr) minmax(0, 0.97fr);
  align-items: start;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const RightPanel = styled.div`
  position: fixed;
  top: 50%;
  left: 51.5%;
  transform: translateY(-50%);

  width: calc(48.5% - 16px);
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 900px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;

    width: calc(100% - 40px);
    max-width: 760px;
    margin: 0 20px 40px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 28px);
    margin: 0 14px 28px;
    gap: 12px;
  }
`;

const ViewSwitcher = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 100%;
  min-width: 0;

  @media (max-width: 420px) {
    gap: 4px;
  }
`;

const ViewButton = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  min-width: 0;
  padding: 9px 15px;
  border: 1px solid ${({ $active }) => ($active ? "#512b8a" : "#dedee8")};
  border-radius: 8px;

  background: ${({ $active }) => ($active ? "#512b8a" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#666678")};

  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    border-color: #512b8a;
    color: ${({ $active }) => ($active ? "#ffffff" : "#512b8a")};
  }

  &:focus-visible {
    outline: 2px solid #8050e8;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    padding: 9px 8px;
    font-size: 11px;
  }

  @media (max-width: 360px) {
    padding: 8px 5px;
    font-size: 10px;
  }
`;

const ViewContainer = styled.div`
  width: 100%;
  height: min(720px, calc(100vh - 100px));
  min-height: 480px;
  min-width: 0;

  @media (max-width: 900px) {
    height: clamp(420px, 72svh, 640px);
    min-height: 0;
  }

  @media (max-width: 600px) {
    height: clamp(400px, 70svh, 580px);
  }
`;

const LeftNetwork = styled.div`
  position: absolute;
  inset: 0 48.5% 0 0;
  overflow: hidden;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 28px;
  left: 36px;
  z-index: 2;

  color: #512b8a;
  font-family: inherit;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1;

  user-select: none;

  @media (max-width: 900px) {
    top: 22px;
    left: 24px;
  }

  @media (max-width: 600px) {
    top: 18px;
    left: 18px;
    font-size: 22px;
  }
`;

function App() {
  const [activeView, setActiveView] = useState<View>("terminal");
  const { t } = useTranslation();

  return (
    <AppShell>
      <Logo>FL</Logo>
      <BackgroundLayer>
        <LeftNetwork>
          <NetworkBackground showNetwork />
        </LeftNetwork>
      </BackgroundLayer>

      <Layout>
        <Main />

        <RightPanel>
          <ViewSwitcher aria-label={t.navigation.ariaLabel}>
            <ViewButton
              $active={activeView === "terminal"}
              onClick={() => setActiveView("terminal")}
              aria-pressed={activeView === "terminal"}
            >
              {t.navigation.terminal}
            </ViewButton>

            <ViewButton
              $active={activeView === "projects"}
              onClick={() => setActiveView("projects")}
              aria-pressed={activeView === "projects"}
            >
              {t.navigation.projects}
            </ViewButton>

            <ViewButton
              $active={activeView === "experience"}
              onClick={() => setActiveView("experience")}
              aria-pressed={activeView === "experience"}
            >
              {t.navigation.experience}
            </ViewButton>
          </ViewSwitcher>

          <ViewContainer>
            {activeView === "terminal" && <Terminal />}
            {activeView === "projects" && <Projects />}
            {activeView === "experience" && <Experience />}
          </ViewContainer>
        </RightPanel>
      </Layout>
    </AppShell>
  );
}

export default App;
