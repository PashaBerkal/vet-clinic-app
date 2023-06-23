import { Button, Checkbox, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useAppSelector } from '../../../hooks/redux';
import classes from './CompleteAppointment.module.scss';
import {
  nextStep,
  setIsAgreementAcepted,
} from '../../../redux/appointment/appointment';
import { useFetchUserQuery } from '../../../redux/auth/authApiSlice';
import { useFetchAppointmentMutation } from '../../../redux/visits/visitsApiSlice';
import { formatToTimestamp } from '../../../utils/dateFormat';

const CompleteAppointment = () => {
  const dispatch = useDispatch();
  const [createAppointment] = useFetchAppointmentMutation();
  const { isAgreementAcepted, pet, recordingTime, procedure } = useAppSelector((state) => state.appointment);
  const { data: user } = useFetchUserQuery('');

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(setIsAgreementAcepted(checked));
  };

  const dateObject = (date: string, time: string) => {
    const dateObj = new Date(date);
    const [hours, minutes] = time.split(':') as unknown as Array<number>;
    dateObj.setUTCHours(hours);
    dateObj.setMinutes(minutes);
    return dateObj;
  };

  const date = dateObject(recordingTime.date, recordingTime.time);

  const buttonHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    createAppointment({
      date: formatToTimestamp(date),
      pet_id: pet.id,
      surgeon_id: procedure.id,
      type: procedure.type,
    });
    dispatch(nextStep());
  };

  return (
    <div className={classes.completeAppointment}>
      <div className={classes.leftSection}>
        <TextField
          disabled
          label="Имя питомца"
          name="petName"
          value={pet.name}
        />
        <TextField
          disabled
          label="Ваше имя"
          name="userName"
          value={user?.name}
        />
        <TextField
          disabled
          placeholder="Email"
          name="userEmail"
          value={user?.email}
        />
      </div>
      <div className={classes.rightSection}>
        <div className={classes.appointmentCard}>
          <div className={classes.field}>
            <p className={classes.key}>Услуга</p>
            <p className={classes.value}>{ procedure.name }</p>
          </div>
          <div className={classes.field}>
            <p className={classes.key}>Дата приема</p>
            <p className={classes.value}>
              {moment(date).format('L')} {date.getUTCHours()}:{date.getMinutes()}
            </p>
          </div>
        </div>
        <div className={classes.agreement}>
          <Checkbox onChange={checkboxHandler} />
          <span>Согласие на обработку персональных данных</span>
        </div>
        <Button
          onClick={buttonHandler}
          disabled={!isAgreementAcepted}
          variant="contained"
          className={classes.button}
        >
          Записаться
        </Button>
      </div>
    </div>
  );
};

export default CompleteAppointment;
