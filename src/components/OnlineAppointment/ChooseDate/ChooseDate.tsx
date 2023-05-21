/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import DatePicker from '@material-ui/lab/DatePicker';
import ruLocale from 'date-fns/locale/ru';
import { Button, TextField } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { LocalizationProvider, TimePicker } from '@material-ui/lab';
import classes from './ChooseDate.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { nextStep, setDateParams } from '../../../redux/appointment/appointment';
import areAllFieldsFilled from '../../../utils/areAllFieldsFilled';

const ChooseDate = () => {
  const [dateValue, setDateValue] = useState<Date | null>(new Date());
  const [timeValue, setTimeValue] = useState<Date | null>(new Date());

  const dispatch = useAppDispatch();
  const { recordingTime } = useAppSelector((state) => state.appointment);
  const timePickerHandler = (newDate: Date | null) => {
    if (newDate) {
      setDateValue(newDate);
      const hours = String(newDate.getHours()).padStart(2, '0');
      const minutes = String(newDate.getMinutes()).padStart(2, '0');
      const time = `${hours}:${minutes}`;

      dispatch(setDateParams({ ...recordingTime, time }));
    }
  };
  const datePickerHandler = (newDate: Date | null) => {
    if (newDate) {
      setTimeValue(newDate);
      const day = String(newDate.getDate()).padStart(2, '0');
      const month = String(newDate.getMonth() + 1).padStart(2, '0');
      const year = newDate.getFullYear();
      const date = `${day}.${month}.${year}`;

      dispatch(setDateParams({ ...recordingTime, date }));
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
          <TimePicker
            className={classes.datePicker}
            value={timeValue}
            onChange={timePickerHandler}
            renderInput={(params) => (
              <TextField
                className={classes.textField}
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
