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
          <div className={classes.resultsTitle}>Анализы отсутствуют</div>
          <div className={classes.resultsInfo}>
            В последнее время ваши питомцы не сдавали анализы
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
