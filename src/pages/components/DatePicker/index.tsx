import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const DatePicker = () => {
  const [period, setPeriod] = useState<{ startDate: Dayjs; endDate: Dayjs }>({
    startDate: dayjs(new Date()),
    endDate: dayjs(new Date()),
  });

  return (
    <div>
      <p className="text-label text-md mb-1">날짜</p>
      <div className="flex items-center">
        <DesktopDatePicker
          defaultValue={dayjs(new Date())}
          format="YYYY.MM.DD."
          onChange={(startDate) =>
            setPeriod((prev) => {
              return { ...prev, startDate: startDate!! };
            })
          }
          maxDate={period.endDate}
        />
        ~
        <DesktopDatePicker
          defaultValue={dayjs(new Date())}
          format="YYYY.MM.DD."
          onChange={(endDate) =>
            setPeriod((prev) => {
              return { ...prev, endDate: endDate!! };
            })
          }
          minDate={period.startDate}
        />
      </div>
    </div>
  );
};

export default DatePicker;
