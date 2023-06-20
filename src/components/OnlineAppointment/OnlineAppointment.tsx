/* eslint-disable react/jsx-no-useless-fragment */
import React, { MouseEventHandler } from 'react';
import { prevStep, resetState, setIsWindowOpen } from '../../redux/appointment/appointment';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import ChooseService from './ChooseService/ChooseService';
import { ReactComponent as Arrow } from './assets/arrowLeft.svg';
import { ReactComponent as Close } from './assets/close.svg';
import ChooseDate from './ChooseDate/ChooseDate';
import classes from './OnlineAppointment.module.scss';
import CompleteAppointment from './CompleteAppointment';
import SuccessfullyAppointment from './SuccessfullyAppointment';
import ChoosePet from './ChoosePet/ChoosePet';

type OnlineAppointmentProps = {
  visible: boolean;
}

const OnlineAppointment: React.FC<OnlineAppointmentProps> = ({ visible }) => {
  const { step } = useAppSelector((state) => state.appointment);
  const dispatch = useAppDispatch();
  const stepOptions = [
    {
      name: 'Выберите услугу',
      className: classes.onlineEntry,
      isArrow: false,
      content: <ChooseService />,
    },
    {
      name: 'Выберите дату и время',
      className: classes.onlineEntry,
      isArrow: true,
      content: <ChooseDate />,
    },
    {
      name: 'Выберите питомца',
      className: classes.onlineEntry,
      isArrow: true,
      content: <ChoosePet />,
    },
    {
      name: 'Завершите запись',
      className: classes.onlineEntry,
      isArrow: true,
      content: <CompleteAppointment />,
    },
    {
      name: '',
      className: classes.finishWindow,
      isArrow: false,
      content: <SuccessfullyAppointment />,
    },
  ];

  const prevClickHandler = () => {
    dispatch(prevStep());
  };

  const clickHandler: MouseEventHandler<SVGSVGElement> = () => {
    dispatch(setIsWindowOpen(false));
    dispatch(resetState());
  };

  return (
    <>
      {visible && (
        <div className={classes.onlineEntryWrapper}>
          <div className={stepOptions[step - 1].className}>
            <div className={classes.header}>
              <div className={classes.topPart}>
                <div>
                  <p className={classes.name}>Ветеринарная клиника «Кот и доГ»</p>
                  <p className={classes.number}>+7 (900) 111-12-12</p>
                </div>
                <Close onClick={clickHandler} />
              </div>
              <div className={classes.statusBar}>
                <div style={{ width: `${step * 25}%` }} className={classes.status} />
              </div>
              <div className={classes.bottomPart}>
                {stepOptions[step - 1].isArrow && (<Arrow onClick={prevClickHandler} />)}
                {stepOptions[step - 1].name}
              </div>
            </div>
            {stepOptions[step - 1].content}
          </div>
        </div>
      )}
    </>
  );
};

export default OnlineAppointment;
