import { useState } from "react";

const LanguageSelector = () => {
  const [language, setLanguage] = useState<string>("22");

  return (
    <select
      value={language}
      onChange={(e) => {
        setLanguage(e.target.value);
      }}
      className="[&_select]:!outline-none bg-transparent focus:outline-none text-sm"
    >
      <option value="22">한국어</option>
      <option value="2">English</option>
    </select>
  );
};

export default LanguageSelector;
