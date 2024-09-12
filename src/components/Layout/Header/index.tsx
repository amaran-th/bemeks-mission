"use client";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSelector from "./LanguageSelector";
import SendPushAlarm from "@/components/SendPushAlarm";
const Header = () => {
  return (
    <div className="bg-primary px-6 py-4 flex items-center justify-between text-white shadow-md fixed top-0 left-0 right-0">
      <IconButton aria-label="menu">
        <MenuIcon className="text-white" />
      </IconButton>
      <div className="flex items-center gap-4">
        <SendPushAlarm />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Header;
