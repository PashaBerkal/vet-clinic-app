import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import classes from './Destination.module.scss';
import DestinationCard from './DestinationCard/DestinationCard';

interface PropsDestination {
  prescription: string,
  recommendation: string,
  firstVisitId?: number,
}

const Destination: FC<PropsDestination> = ({ prescription, recommendation, firstVisitId }) => (
  <div className={classes.Destination}>
    {(prescription || recommendation)
    && (
      <>
        <div className={classes.title}>
          Назначения и рекомендации
        </div>
        <DestinationCard prescription={prescription} recommendation={recommendation} />
      </>)}
    {firstVisitId
      && (
        <Link to={`/MedicalCardPage/${firstVisitId}`} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" className={classes.button}>Первичный прием</Button>
        </Link>)}
  </div>
);

export default Destination;
