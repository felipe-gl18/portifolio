import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  box-sizing: border-box;
  border: 1px solid #dedee5;
  border-radius: 10px;
  color: #555566;
  transition: all 0.2s ease;

  &:hover {
    color: #6c3eb8;
    border-color: #6c3eb8;
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid #6c3eb8;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/felipe-gl18",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/felipe-lino-developer",
    icon: FaLinkedin,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5588992048450",
    icon: FaWhatsapp,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/felipe.glino",
    icon: FaInstagram,
  },
];

export function Social() {
  return (
    <SocialLinks aria-label="Social media links">
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <SocialLink
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
        >
          <Icon size={19} />
        </SocialLink>
      ))}
    </SocialLinks>
  );
}
