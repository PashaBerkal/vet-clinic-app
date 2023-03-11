import Visit from './Visit/Visit';
import classes from './VisitsList.module.scss';

type VisitItem = {
    name: string,
    date: string,
    procedure: string,
    result: string,
    id: number
}

const lastVisits: VisitItem[] = [
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 1,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 2,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 3,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 4,
  },
];

const VisitsList = () => (
  <div className={classes.VisitsList}>
    {lastVisits.slice(0, 3).map((visit) => (
      <Visit
        name={visit.name}
        date={visit.date}
        procedure={visit.procedure}
        result={visit.result}
        key={visit.id + visit.name}
      />
    ))}
  </div>
);

export default VisitsList;
