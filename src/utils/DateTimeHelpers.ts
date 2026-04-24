import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

class DateTimeHelpers {
  static methodName = () => {};
  static getTzAbbreviation = ({
    date,
    timezone,
  }: {
    date: Date;
    timezone: string;
  }) => {
    return new Intl.DateTimeFormat('en-AU', {
      timeZone: timezone,
      timeZoneName: 'short',
    })
      .formatToParts(date)
      .find((part) => part.type === 'timeZoneName')?.value;
  };

  static formatDateTimeWithTimezone = ({
    date,
    timezone,
    format,
  }: {
    date: dayjs.ConfigType;
    timezone: string;
    format: string;
  }) => {
    return dayjs(date).tz(timezone).format(format);
  };
}

export default DateTimeHelpers;
