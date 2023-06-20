/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import DatePicker from '@material-ui/lab/DatePicker';
import ruLocale from 'date-fns/locale/ru';
import { Button, TextField } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { LocalizationProvider } from '@material-ui/lab';
import Autocomplete from '@material-ui/core/Autocomplete';
import classes from './ChooseDate.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { nextStep, setDateParams } from '../../../redux/appointment/appointment';
import areAllFieldsFilled from '../../../utils/areAllFieldsFilled';
import { useFetchFreeTimeQuery } from '../../../redux/visits/visitsApiSlice';
import { formatToTimestamp } from '../../../utils/dateFormat';

const ChooseDate = () => {
  const [dateValue, setDateValue] = useState<string>(new Date().toISOString().split('Z')[0]);

  function formatFromTimestamp(dateString: string) {
    const date = new Date(dateString);
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hours}:${minutes}`;
  }

  const { data, refetch } = useFetchFreeTimeQuery({ doctorId: 0, date: dateValue });

  useEffect(() => {
    refetch();
  }, [dateValue]);

  const timeOptions = data?.free_time?.map((time: string) => formatFromTimestamp(time)) || [];

  const dispatch = useAppDispatch();
  const { recordingTime } = useAppSelector((state) => state.appointment);
  const timePickerHandler = (value: string | null) => {
    dispatch(setDateParams({ ...recordingTime, time: value ?? '' }));
  };
  const datePickerHandler = (newDate: Date | null) => {
    if (newDate) {
      const formatDate = formatToTimestamp(newDate);
      setDateValue(formatDate);
      dispatch(setDateParams({ ...recordingTime, date: formatDate }));
    }
  };

  const buttonHandler = () => {
    dispatch(nextStep());
  };

  const clickable = areAllFieldsFilled(recordingTime);

  return (
    <div className={classes.chooseDate}>
      <div className={classes.dateSettings}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          locale={ruLocale}
        >
          <DatePicker
            className={classes.datePicker}
            mask="__.__.____"
            value={dateValue}
            onChange={datePickerHandler}
            renderInput={(params) => (
              <TextField
                className={classes.textField}
                {...params}
              />
            )}
          />
          <Autocomplete
            className={classes.datePicker}
            style={{ width: '100%' }}
            onChange={(_, value) => timePickerHandler(value)}
            disablePortal
            options={timeOptions}
            noOptionsText="нет свободного времени"
            renderInput={(params) => (
              <TextField
                label="время записи"
                {...params}
              />
            )}
          />
        </LocalizationProvider>
      </div>
      <div className={classes.footer}>
        <Button
          disabled={!clickable}
          onClick={buttonHandler}
          style={{ width: 133 }}
          variant="outlined"
          className={classes.button}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default ChooseDate;
