import styled from "styled-components";
import { useTranslation } from "./i18n/useTranslation";

const Switch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 112px;
  height: 38px;
  padding: 3px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.045);
  backdrop-filter: blur(12px);

  @media (max-width: 600px) {
    width: 104px;
    height: 36px;
  }
`;

const ActiveIndicator = styled.div<{ $language: "pt" | "en" }>`
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(50% - 3px);
  height: 28px;
  border-radius: 999px;
  background: #292d36;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transform: ${({ $language }) =>
    $language === "pt" ? "translateX(100%)" : "translateX(0)"};
  transition: transform 250ms cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 600px) {
    height: 26px;
  }
`;

const Option = styled.button<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0;
  white-space: nowrap;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: ${({ $active }) => ($active ? "#ffffff" : "#512b8a")};
  font-family: inherit;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: color 200ms ease;

  &:hover {
    color: ${({ $active }) => ($active ? "#ffffff" : "#6c3eb8")};
  }

  &:focus-visible {
    outline: 2px solid #8b7cff;
    outline-offset: 2px;
  }
`;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <Switch role="group" aria-label="Language selector">
      <ActiveIndicator $language={language} />

      <Option
        type="button"
        $active={language === "en"}
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
      >
        EN
      </Option>

      <Option
        type="button"
        $active={language === "pt"}
        aria-pressed={language === "pt"}
        onClick={() => setLanguage("pt")}
      >
        PT
      </Option>
    </Switch>
  );
}
