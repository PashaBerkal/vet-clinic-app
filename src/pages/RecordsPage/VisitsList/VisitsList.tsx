import React, { useEffect } from 'react';
import { AlertColor } from '@material-ui/core/Alert';
import Visit from './Visit/Visit';
import classes from './VisitsList.module.scss';
import { useFetchRecordsQuery } from '../../../redux/visits/visitsApiSlice';

const completed: AlertColor = 'success';
const waiting: AlertColor = 'info';
const canceled: AlertColor = 'error';

const VisitsList = () => {
  const { data: records, isLoading, isError, refetch } = useFetchRecordsQuery({});
  useEffect(() => {
    refetch();
  }, []);
  const renderRecordState = (status: string) => {
    switch (status) {
      case 'WAITING':
        return waiting;
      case 'COMPLETED':
        return completed;
      case 'CANCELED':
        return canceled;
      default:
        return canceled;
    }
  };
  return (
    <div className={classes.VisitsList}>
      {isLoading && <p>загрузка...</p>}
      {isError && <p>Произошла ошибка</p>}
      {records && records?.map((record, index) => (
        <Visit
          date={record.date}
          doctor={record.doctor_name}
          name={record.pet.name}
          procedure={record.description}
          state={renderRecordState(record.status)}
          key={record.pet.name + index.toString()}
          type={record.type}
        />
      ))}
    </div>
  );
};

export default VisitsList;
