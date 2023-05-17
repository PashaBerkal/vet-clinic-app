import { Button } from '@material-ui/core';
import { FC } from 'react';
import moment from 'moment';
import { ReactComponent as Paws } from './assets/paws.svg';
import { IMainRecord } from '../../models/IVisit';
import classes from './NearestEntry.module.scss';

interface NearestEntryProps {
  visit?: IMainRecord[]
}

const NearestEntry: FC<NearestEntryProps> = ({ visit }) => (
  <div className={classes.NearestEntry}>
    <div className={classes.paws}>
      <Paws />
    </div>
    {visit && (
      <div className={classes.entryContainer}>
        <div className={classes.title}>Ближайшая запись</div>
        <div className={classes.entryInfo}>
          <div className={classes.entryTime}>
            {moment(visit[0].date).format('D MMMM')}
            <span>{moment(visit[0].date).format('LT')}</span>
          </div>
          <div className={classes.entryProcedure}>
            У питомца { visit[0].pet.name } визит в клинику
            <span>{visit[0].description}</span>
          </div>
        </div>
        <Button variant="outlined" className={classes.button}>Посмотреть все</Button>
      </div>)}
  </div>
);

export default NearestEntry;
