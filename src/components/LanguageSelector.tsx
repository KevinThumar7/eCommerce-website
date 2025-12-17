import type React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const languages = [
    {
      name: "English",
      code: "en",
    },
    {
      name: "Hindi",
      code: "hi",
    },
    {
      name: "Arabic",
      code: "ar",
    },
  ];

  const { i18n } = useTranslation();

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <i className="bi bi-globe"></i>
      <select
        name="language"
        title="language"
        id="language"
        value={i18n.language}
        onChange={handleLanguage}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
