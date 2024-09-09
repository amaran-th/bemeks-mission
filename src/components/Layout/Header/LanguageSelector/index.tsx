import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import dayjs from "dayjs";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { currentLanguageState } from "@/store/common";

const language: { [key: string]: string } = { 22: "한국어", 2: "English" };

const LanguageSelector = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [currentLanguage, setCurrentLanguage] =
    useRecoilState(currentLanguageState);

  const isOverLarge = useMediaQuery("(min-width:1200px");
  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setCurrentLanguage(event.target.value as any);
    dayjs.locale({ 22: "ko", 2: "en" }[event.target.value]);
    router.push({ pathname, query }, asPath, {
      locale: { 22: "ko", 2: "en" }[event.target.value],
    });
  };

  return (
    <Select
      value={String(currentLanguage)}
      variant="standard"
      disableUnderline
      onChange={handleChangeLanguage}
      sx={{
        color: "white",
        alignItems: "center",
        "& .MuiSvgIcon-root": {
          fill: "white",
        },
      }}
      renderValue={(selected) => (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={0.5}
          margin="3px 0 0 0"
        >
          <LanguageIcon />
          {isOverLarge && <Typography>{language[selected]}</Typography>}
        </Box>
      )}
    >
      <MenuItem
        value={22}
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <Image
          src={`/assets/image/flag/south-korea.svg`}
          alt="korean"
          width={20}
          height={20}
        />
        한국어
      </MenuItem>
      <MenuItem
        value={2}
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <Image
          src={`/assets/image/flag/america.svg`}
          alt="english"
          width={20}
          height={20}
        />
        English
      </MenuItem>
    </Select>
  );
};

export default LanguageSelector;
