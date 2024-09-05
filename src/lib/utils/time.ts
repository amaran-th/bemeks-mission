import dayjs from "dayjs";

export const formatPeriod = (startDate: string, endDate: string) => {
  if (startDate === null || endDate === null) return "";
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  if (start.date() === end.date())
    return `${start.format("YYYY-MM-DD HH:mm")} ~ ${end.format("HH:mm")}`;

  return `${start.format("YYYY-MM-DD HH:mm")} ~ ${end.format(
    "YYYY-MM-DD HH:mm"
  )}`;
};
