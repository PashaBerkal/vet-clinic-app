import { useEffect } from 'react';
import { useFetchVisitsQuery } from '../../../../redux/visits/visitsApiSlice';
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

const VisitsList = () => {
  const { data: visits, isLoading, isError, refetch } = useFetchVisitsQuery({ maxCount: 3 });

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={classes.VisitsList}>
      {visits && visits.slice(0, 3).map((visit) => (
        <Visit
          name={visit.pet.name}
          date={visit.date}
          procedure="Нет данных"
          result="Нет данных"
          key={visit.date + visit.pet.name}
        />
      ))}
    </div>
  );
};

export default VisitsList;
