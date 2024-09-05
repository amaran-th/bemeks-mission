import { WorkPermitFilterValues } from "@/pages";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { FormikErrors } from "formik";

interface DatePickerProps {
  startDate: string;
  endDate: string;
  startDateName: string;
  endDateName: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void> | Promise<FormikErrors<WorkPermitFilterValues>>;
}

const DatePicker = ({
  startDate,
  endDate,
  startDateName,
  endDateName,
  setFieldValue,
}: DatePickerProps) => {
  return (
    <div>
      <p className="text-label text-md mb-1">날짜</p>
      <div className="flex items-center">
        <DesktopDatePicker
          defaultValue={dayjs(startDate)}
          format="YYYY.MM.DD."
          onChange={(value) =>
            setFieldValue(startDateName, value?.format("YYYY-MM-DD"))
          }
          maxDate={dayjs(endDate)}
        />
        ~
        <DesktopDatePicker
          defaultValue={dayjs(endDate)}
          format="YYYY.MM.DD."
          onChange={(value) =>
            setFieldValue(endDateName, value?.format("YYYY-MM-DD"))
          }
          minDate={dayjs(startDate)}
        />
      </div>
    </div>
  );
};

export default DatePicker;
