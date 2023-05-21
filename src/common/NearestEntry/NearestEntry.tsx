import { Button } from '@material-ui/core';
import { FC } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ReactComponent as Paws } from './assets/paws.svg';
import { IMainRecord } from '../../models/IVisit';
import classes from './NearestEntry.module.scss';

interface NearestEntryProps {
  visitInfo?: IMainRecord,
}

const NearestEntry: FC<NearestEntryProps> = ({ visitInfo }) => (
  <div className={classes.NearestEntry}>
    <div className={classes.paws}>
      <Paws />
    </div>
    {visitInfo
      ? (
        <div className={classes.entryContainer}>
          <div className={classes.title}>Ближайшая запись</div>
          <div className={classes.entryInfo}>
            <div className={classes.entryTime}>
              {moment(visitInfo.date).format('D MMMM')}
              <span>{moment(visitInfo.date).format('LT')}</span>
            </div>
            <div className={classes.entryProcedure}>
              У питомца { visitInfo.pet.name } визит в клинику
              <span>{visitInfo.description}</span>
            </div>
          </div>
          <Link to="/RecordsPage" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" className={classes.button}>Посмотреть все</Button>
          </Link>
        </div>)
      : (
        <div className={classes.entryContainer}>
          <div className={classes.title}>Нет ближайшей записи </div>
          <div className={classes.entryProcedure}>
            <span>На данный момент у вас нет активных записей в клинику</span>
          </div>
          <Button variant="outlined" className={classes.button}>Записаться</Button>

        </div>)}
  </div>
);

export default NearestEntry;
