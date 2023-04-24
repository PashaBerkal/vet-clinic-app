import React from 'react';
import { AlertColor } from '@material-ui/core/Alert';
import Visit from './Visit/Visit';
import classes from './VisitsList.module.scss';

const completed: AlertColor = 'success';
const waiting: AlertColor = 'info';
const canceled: AlertColor = 'error';

const visits = [
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
const VisitsList = () => (
  <div className={classes.VisitsList}>
    {visits.map((visit, index) => (
      <Visit
        date={visit.date}
        doctor={visit.doctor}
        name={visit.name}
        procedure={visit.procedure}
        state={visit.state}
        key={visit.name + index.toString()}
      />
    ))}
  </div>
);

export default VisitsList;
