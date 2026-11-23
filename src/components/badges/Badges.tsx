import styled from "styled-components";

const technologies = [
  "TypeScript",
  "Node.js",
  "React",
  "NestJS",
  "Express",
  "Socket.IO",
  "Prisma",
  "AWS",
];

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0;
  max-width: 600px;
  width: 100%;
  min-width: 0;

  @media (max-width: 900px) {
    justify-content: center;
    margin: 20px 0;
  }

  @media (max-width: 600px) {
    gap: 7px;
    margin: 18px 0;
  }
`;

const Badge = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #344054;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid #dedee5;
  border-radius: 6px;
  padding: 7px 12px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #6c3eb8;
    border-color: #6c3eb8;
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 6px 10px;
  }

  @media (max-width: 360px) {
    font-size: 11px;
    padding: 6px 8px;
  }
`;

export default function Badges() {
  return (
    <BadgeContainer aria-label="Technology skills">
      {technologies.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </BadgeContainer>
  );
}
