import { useEffect } from 'react';
import { ReactComponent as Rabbits } from '../assets/Rabbits.svg';
import classes from './TestResults.module.scss';
import { useFetchAnalyzesQuery } from '../../../redux/analyzes/analyzesApiSlice';

const TestResults = () => {
  const { data: analyzes, isLoading, isError, refetch } = useFetchAnalyzesQuery('');

  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className={classes.TestResults}>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {analyzes && (
        <>
          <div className={classes.resultsTitle}>Результаты анализов</div>
          <div className={classes.resultsInfo}>
            Готов анализ на пироплазмов
            <span>12.02.23, Кеша</span>
          </div>
          <div className={classes.resultsMore}>
            <Rabbits />
          </div>
        </>
      )}
    </div>
  );
};

export default TestResults;
