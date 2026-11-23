import styled from "styled-components";
import { Social } from "./social/SocialLinks";
import Badges from "./badges/Badges";
import { useTranslation } from "./i18n/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

const StyledMain = styled.main`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 64px;
  overflow: hidden;
  isolation: isolate;

  & > svg {
    z-index: -1;
  }

  h1 {
    color: #0d3b66;
    font-size: clamp(38px, 4.1vw, 56px);
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 10px;
  }

  & > span {
    color: #555555;
    font-size: clamp(20px, 2.1vw, 28px);
    font-weight: 500;
    line-height: 1.3;
  }

  p {
    text-align: start;
    color: #777777;
    font-size: clamp(15px, 1.4vw, 18px);
    font-weight: 500;
    line-height: 1.6;
    max-width: 620px;
    width: 100%;
  }

  @media (max-width: 1200px) and (min-width: 901px) {
    padding: 44px;

    h1 {
      font-size: clamp(38px, 4vw, 48px);
    }

    p {
      max-width: 500px;
    }
  }

  @media (max-width: 900px) {
    min-height: auto;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    padding: 48px 32px 36px;

    h1 {
      font-size: clamp(38px, 7vw, 52px);
    }

    & > span {
      font-size: clamp(20px, 4vw, 26px);
    }

    p {
      max-width: 600px;
      text-align: center;
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    padding: 36px 22px 30px;

    h1 {
      font-size: clamp(34px, 9vw, 44px);
    }

    & > span {
      font-size: 19px;
    }

    p {
      font-size: 14px;
      line-height: 1.6;
      margin-top: 12px;
    }
  }
`;

const Photo = styled.img`
  position: absolute;
  display: block;

  width: clamp(150px, 18vw, 242px);
  aspect-ratio: 1;
  height: auto;

  border-radius: 50%;
  object-fit: cover;
  object-position: center;

  top: 140px;
  right: clamp(32px, 8vw, 180px);

  box-shadow:
    0 12px 30px rgba(13, 59, 102, 0.16),
    0 25px 60px rgba(37, 99, 235, 0.12),
    0 0 0 6px rgba(255, 255, 255, 0.75);

  transition:
    transform 300ms ease,
    box-shadow 300ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow:
      0 18px 38px rgba(13, 59, 102, 0.2),
      0 30px 70px rgba(37, 99, 235, 0.18),
      0 0 0 6px rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 1200px) and (min-width: 901px) {
    width: 150px;
    top: 90px;
    right: 32px;
  }

  @media (max-width: 900px) {
    position: relative;
    top: auto;
    right: auto;
    width: clamp(140px, 25vw, 180px);
    flex-shrink: 0;
    margin-bottom: 28px;
  }

  @media (max-width: 600px) {
    width: 140px;
    margin-bottom: 24px;
  }
`;

export default function Main() {
  const { t } = useTranslation();

  return (
    <StyledMain>
      <Photo
        src="/professional-photo.webp"
        alt="Felipe's profile"
        width={600}
        height={600}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <LanguageSwitcher />

      <h1>Felipe Lino</h1>
      <span>{t.hero.role}</span>
      <p>{t.hero.description}</p>

      <Badges />
      <Social />
    </StyledMain>
  );
}
