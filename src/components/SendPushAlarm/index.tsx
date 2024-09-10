import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import InputLabel from "../Typography/InputLabel";

const SendPushAlarm = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { t } = useTranslation();
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <IconButton aria-label="sendPushAlarm" onClick={handleClickOpen}>
        <MessageIcon className="text-white" />
      </IconButton>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogTitle>{t("Push_알림_전송")}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent className="flex flex-col gap-4 w-[444px]">
          <div>
            <InputLabel label={t("수신인")} required />
            <Autocomplete
              autoFocus
              id="receiver"
              renderInput={(params) => <TextField {...params} />}
              fullWidth
              options={[]}
            />
          </div>
          <div>
            <InputLabel label={t("제목")} required />
            <TextField
              required
              id="name"
              name="email"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <InputLabel label={t("본문")} required />
            <TextField
              required
              id="name"
              name="email"
              variant="outlined"
              fullWidth
              multiline
            />
          </div>
          <div>
            <InputLabel label={t("관련_문서_번호")} />
            <TextField id="name" name="email" variant="outlined" fullWidth />
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" type="submit">
            {t("전송")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SendPushAlarm;
