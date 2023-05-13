import React, { useEffect } from 'react';
import { AlertColor } from '@material-ui/core/Alert';
import Visit from './Visit/Visit';
import classes from './VisitsList.module.scss';
import { useFetchAllRecordsQuery } from '../../../redux/records/recordsApiSlice';

const completed: AlertColor = 'success';
const waiting: AlertColor = 'info';
const canceled: AlertColor = 'error';

const visits = [
  {
    name: 'Кеша',
    date: '12.12.12',
    procedure: 'any(процедура)',
    doctor: 'Иванова И.И.',
    state: waiting,
  },
  {
    name: 'Кеша',
    date: '12.12.12',
    procedure: 'УЗИ органов брюшной полости',
    doctor: 'Иванова И.И.',
    state: canceled,
  },
  {
    name: 'Кеша',
    date: '12.12.12',
    procedure: 'УЗИ органов брюшной полости',
    doctor: 'Иванова И.И.',
    state: completed,
  },
  {
    name: 'Кеша',
    date: '12.12.12',
    procedure: 'УЗИ органов брюшной полости',
    doctor: 'Иванова И.И.',
    state: waiting,
  },
  {
    name: 'Кеша',
    date: '12.12.12',
    procedure: 'УЗИ органов брюшной полости',
    doctor: 'Иванова И.И.',
    state: canceled,
  },
  {
    name: 'Кеша',
    date: '12.12.12',
    procedure: 'УЗИ органов брюшной полости',
    doctor: 'Иванова И.И.',
    state: completed,
  },
  {
    name: 'Кеша',
    date: '12.12.12',
    procedure: 'УЗИ органов брюшной полости',
    doctor: 'Иванова И.И.',
    state: waiting,
  },
  {
    name: 'Кеша',
    date: '12.12.12',
    procedure: 'УЗИ органов брюшной полости',
    doctor: 'Иванова И.И.',
    state: canceled,
  },
  {
    name: 'Кеша',
    date: '12.12.12',
    procedure: 'УЗИ органов брюшной полости',
    doctor: 'Иванова И.И.',
    state: completed,
  },
];
const VisitsList = () => {
  const { data: records, isLoading, isError, refetch } = useFetchAllRecordsQuery(100);

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={classes.VisitsList}>
      {records?.map((record, index) => (
        <Visit
          date={`${record.date[1]}.${record.date[2]}.${record.date[0]}, ${record.date[3]}:${record.date[4]}`}
          doctor={record.doctor_name}
          name={record.pet.name}
          procedure={visits[0].procedure}
          state={canceled}
          key={record.pet.name + index.toString()}
        />
      ))}
    </div>
  );
};

export default VisitsList;
