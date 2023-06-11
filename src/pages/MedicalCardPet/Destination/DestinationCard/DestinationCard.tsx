import React, { FC } from 'react';
import classes from './DestinationCard.module.scss';

interface PropsDestinationCard {
  prescription: string,
  recommendation: string
}

const DestinationCard: FC<PropsDestinationCard> = ({ prescription, recommendation }) => (
  <div className={classes.DestinationCard}>
    {prescription || 'Нет назначений'}
    <div className={classes.line} />
    {recommendation || 'Нет рекомендаций'}
  </div>
);

export default DestinationCard;
