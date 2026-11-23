import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  HeartHandshake,
  BrainCircuit,
  ExternalLink,
  Play,
  GraduationCap,
} from "lucide-react";
import { createPortal } from "react-dom";

import { useTranslation } from "../i18n/useTranslation";

interface Project {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  video?: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    name: "AURA",
    description: "",
    tags: ["React", "TypeScript", "Tailwind", "CARTO"],
    href: "https://aura-orpg.onrender.com",
    video: "/videos/aura.mp4",
    icon: <HeartHandshake size={25} />,
  },
  {
    name: "Exatitech",
    description: "",
    tags: ["React", "TypeScript", "Tailwind", "NestJS", "Firebase"],
    video: "/videos/exatitech.mp4",
    icon: <GraduationCap size={25} />,
  },
  {
    name: "Local RAG Engine",
    description: "",
    tags: ["TypeScript", "Ollama", "RAG", "Embeddings"],
    icon: <BrainCircuit size={25} />,
  },
];

const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
  padding: 24px 52px 40px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #b5b5b5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #888;
  }

  @media (max-width: 1100px) {
    padding: 22px 28px 32px;
  }

  @media (max-width: 900px) {
    padding: 24px 20px 32px;
  }

  @media (max-width: 600px) {
    padding: 20px 14px 28px;
  }

  @media (max-width: 360px) {
    padding: 18px 10px 24px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #17172b;
  }

  span {
    color: #6d36d8;
    font-size: 12px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 17px;
    }

    span {
      font-size: 11px;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  min-width: 0;

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
  }
`;

const ProjectCard = styled.article<{ $clickable: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 175px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 13px;
  background: #171725;
  color: #f5f5fa;
  border: 1px solid #29293d;

  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    ${({ $clickable }) =>
      $clickable &&
      `
        transform: translateY(-4px);
        border-color: #8050e8;
        box-shadow: 0 10px 28px rgba(80, 40, 150, 0.14);
      `}
  }

  &:focus-visible {
    outline: 2px solid #a982e8;
    outline-offset: 3px;
  }

  @media (max-width: 900px) {
    padding: 18px;
  }

  @media (max-width: 600px) {
    min-height: 160px;
    padding: 18px;
  }

  @media (max-width: 360px) {
    padding: 15px;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const ProjectIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  color: #b99aff;
  background: #30234d;
`;

const ProjectLink = styled.a`
  color: #a7a7bd;
  display: flex;
  transition: color 0.2s ease;

  &:hover {
    color: #c5a9ff;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 16px;
  font-weight: 650;
  margin-bottom: 8px;
`;

const ProjectDescription = styled.p`
  color: #b7b7c8;
  font-size: 12px;
  line-height: 1.6;
  margin-bottom: 18px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
`;

const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 20px;
  background: #302b45;
  color: #d3c5f5;
  font-size: 10px;
  font-weight: 500;
`;

const WatchDemo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  color: #b99aff;
  font-size: 11px;
  font-weight: 600;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: transparent;
`;

const Video = styled.video`
  display: block;
  position: relative;
  width: min(900px, calc(100vw - 32px));
  max-height: calc(100svh - 32px);
  object-fit: contain;
  border-radius: 12px;

  box-shadow:
    0 12px 30px rgba(13, 59, 102, 0.16),
    0 25px 60px rgba(37, 99, 235, 0.12),
    0 0 0 6px rgba(255, 255, 255, 0.75);

  @media (max-width: 600px) {
    width: calc(100vw - 28px);
    max-height: calc(100svh - 28px);
    border-radius: 8px;
  }
`;

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  const getDescription = (project: Project) => {
    if (project.name === "AURA") {
      return t.projects.aura.description;
    }

    if (project.name === "Local RAG Engine") {
      return t.projects.rag.description;
    }

    if (project.name === "Exatitech") {
      return t.projects.exatitech.description;
    }

    return project.description;
  };

  return (
    <>
      <Section id="projects">
        <SectionHeader>
          <h2>/ {t.projects.title}</h2>
          <span>{t.projects.subtitle}</span>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.name}-${index}`}
              $clickable={Boolean(project.video)}
              role={project.video ? "button" : undefined}
              tabIndex={project.video ? 0 : undefined}
              onClick={() => {
                if (project.video) setSelectedProject(project);
              }}
              onKeyDown={(event) => {
                if (
                  project.video &&
                  (event.key === "Enter" || event.key === " ")
                ) {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <CardTop>
                <ProjectIcon>{project.icon}</ProjectIcon>

                {project.href && (
                  <ProjectLink
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.projects.openProject}: ${project.name}`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <ExternalLink size={17} />
                  </ProjectLink>
                )}
              </CardTop>

              <ProjectTitle>{project.name}</ProjectTitle>

              <ProjectDescription>{getDescription(project)}</ProjectDescription>

              <Tags>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>

              {project.video && (
                <WatchDemo>
                  <Play size={13} fill="currentColor" />
                  Watch demo
                </WatchDemo>
              )}
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>

      {selectedProject?.video &&
        createPortal(
          <ModalOverlay onClick={() => setSelectedProject(null)}>
            <Video
              src={selectedProject.video}
              controls
              autoPlay
              playsInline
              preload="metadata"
              onClick={(event) => event.stopPropagation()}
            />
          </ModalOverlay>,
          document.body,
        )}
    </>
  );
}
