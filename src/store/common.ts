import { Language } from "@/types/common";
import { atom } from "recoil";

export const currentLanguageState = atom<Language>({
  key: "currentLanguage",
  default: 22,
});
