import styled from "styled-components";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "FlowBit Tech",
    role: "Mid Software Engineer",
    period: "Jan 2025 – Present",
    description:
      "Building scalable applications and real-time communication systems.",
    highlights: [
      "Developed real-time systems with Node.js, TypeScript, Express, Socket.IO and Prisma.",
      "Reduced initial load time by 45% and API requests by approximately 30%.",
      "Implemented presence tracking with 98% synchronization accuracy.",
      "Built an FCM notification system delivering 12,000+ notifications/month with less than 1% failure.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "React",
      "Socket.IO",
      "Prisma",
      "AWS",
    ],
  },
  {
    company: "Síntese BI",
    role: "Junior Software Engineer",
    period: "Aug 2023 – Dec 2024",
    description:
      "Developed web applications, automation workflows and CI/CD pipelines.",
    highlights: [
      "Automated report generation, reducing manual effort by 70%.",
      "Implemented authentication and authorization using NestJS.",
      "Reduced deployment time from 15 to 10 minutes using GitHub Actions and AWS.",
      "Increased release frequency by 20%.",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "React",
      "Next.js",
      "AWS",
      "GitHub Actions",
    ],
  },
  {
    company: "Center Cartuchos",
    role: "Software Engineer Intern",
    period: "Nov 2021 – Feb 2022",
    description:
      "Contributed to e-commerce improvements and payment integrations.",
    highlights: [
      "Improved navigation and product discovery, increasing navigation speed by 20%.",
      "Improved Stripe payment reliability, reducing payment errors by 15%.",
    ],
    technologies: ["React", "JavaScript", "Stripe"],
  },
];

const Section = styled.section`
  width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0 10px;

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

  @media (max-width: 600px) {
    padding: 0 4px;
  }
`;

const Header = styled.div`
  margin-bottom: 22px;

  h2 {
    color: #17172b;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    margin-top: 5px;
    color: #858598;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    margin-bottom: 18px;

    h2 {
      font-size: 17px;
    }

    p {
      font-size: 11px;
    }
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 600px) {
    gap: 18px;
  }
`;

const ExperienceCard = styled.article`
  position: relative;
  min-width: 0;
  padding-left: 20px;
  border-left: 2px solid #e8def8;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: -6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #8050c8;
    border: 2px solid #ffffff;
  }

  @media (max-width: 600px) {
    padding-left: 16px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-bottom: 5px;

  h3 {
    color: #24243a;
    font-size: 14px;
    font-weight: 700;
    margin: 0;
  }

  span {
    display: inline-flex;
    align-items: center;
    color: #7650ad;
    font-size: 10px;
    white-space: normal;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 5px;

    h3 {
      font-size: 14px;
    }

    span {
      font-size: 10px;
    }
  }
`;

const Role = styled.div`
  color: #55556b;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 7px;
  overflow-wrap: anywhere;
`;

const Description = styled.p`
  color: #858598;
  font-size: 11px;
  line-height: 1.5;
  margin-bottom: 10px;
  overflow-wrap: anywhere;
`;

const Highlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 15px;
  margin-bottom: 12px;

  li {
    color: #626276;
    font-size: 11px;
    line-height: 1.5;
    overflow-wrap: anywhere;
  }

  li::marker {
    color: #8050c8;
  }

  @media (max-width: 600px) {
    li {
      font-size: 11px;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  min-width: 0;
`;

const Tag = styled.span`
  padding: 4px 7px;
  border-radius: 5px;
  background: #f1edf8;
  color: #68439d;
  font-size: 9px;
  font-weight: 600;
  overflow-wrap: anywhere;
`;

import { useTranslation } from "../i18n/useTranslation";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <Section>
      <Header>
        <h2>/ {t.experience.title}</h2>
        <p>{t.experience.subtitle}</p>
      </Header>

      <Timeline>
        {experiences.map((experience) => {
          const translated =
            experience.company === "FlowBit Tech"
              ? t.experience.flowbit
              : experience.company === "Síntese BI"
                ? t.experience.sintese
                : experience.company === "Center Cartuchos"
                  ? t.experience.center
                  : null;

          const role = translated?.role ?? experience.role;
          const description = translated?.description ?? experience.description;
          const highlights = translated?.highlights ?? experience.highlights;

          return (
            <ExperienceCard key={experience.company}>
              <CardHeader>
                <h3>{experience.company}</h3>

                <span>
                  <CalendarDays
                    size={11}
                    style={{ verticalAlign: "middle", marginRight: 4 }}
                  />
                  {experience.period}
                </span>
              </CardHeader>

              <Role>
                <BriefcaseBusiness
                  size={12}
                  style={{ verticalAlign: "middle", marginRight: 5 }}
                />
                {role}
              </Role>

              <Description>{description}</Description>

              <Highlights>
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </Highlights>

              <Tags>
                {experience.technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </Tags>
            </ExperienceCard>
          );
        })}
      </Timeline>
    </Section>
  );
}
