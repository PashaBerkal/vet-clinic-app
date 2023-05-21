import { Button, Checkbox, TextField } from '@material-ui/core';
import { ChangeEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import classes from './CompleteAppointment.module.scss';
import {
  nextStep,
  setIsAgreementAcepted,
  setVisitorInformation,
} from '../../../redux/appointment/appointment';
import areAllFieldsFilled from '../../../utils/areAllFieldsFilled';

const CompleteAppointment = () => {
  const dispatch = useDispatch();
  const { visitorInformation, isAgreementAcepted } = useAppSelector((state) => state.appointment);

  const textFieldHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setVisitorInformation({ ...visitorInformation, [e.target.name]: e.target.value }));
  };

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(setIsAgreementAcepted(checked));
  };

  const buttonHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(nextStep());
  };

  const clickable = areAllFieldsFilled(visitorInformation) && isAgreementAcepted;

  return (
    <div className={classes.completeAppointment}>
      <div className={classes.leftSection}>
        <TextField
          placeholder="Имя питомца"
          name="petName"
          value={visitorInformation.petName}
          onChange={textFieldHandler}
        />
        <TextField
          placeholder="Ваше имя"
          name="userName"
          value={visitorInformation.userName}
          onChange={textFieldHandler}
        />
        <TextField
          placeholder="Email"
          name="userEmail"
          value={visitorInformation.userEmail}
          onChange={textFieldHandler}
        />
      </div>
      <div className={classes.rightSection}>
        <div className={classes.appointmentCard}>
          <div className={classes.field}>
            <p className={classes.key}>Услуга</p>
            <p className={classes.value}>УЗИ органов брюшной полости</p>
          </div>
          <div className={classes.field}>
            <p className={classes.key}>Дата приема</p>
            <p className={classes.value}>17.08.2023, 10:20</p>
          </div>
        </div>
        <div className={classes.agreement}>
          <Checkbox onChange={checkboxHandler} />
          <span>Согласие на обработку персональных данных</span>
        </div>
        <Button
          onClick={buttonHandler}
          disabled={!clickable}
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
