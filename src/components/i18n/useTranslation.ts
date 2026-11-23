import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

export function useTranslation() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useTranslation must be used inside LanguageProvider");
  }

  const { language, setLanguage } = context;

  return {
    language,
    setLanguage,
    t: translations[language],
  };
}
