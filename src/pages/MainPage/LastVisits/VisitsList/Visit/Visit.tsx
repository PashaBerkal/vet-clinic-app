import moment from 'moment';
import { ReactComponent as Procedure } from '../../../assets/Procedure.svg';
import { ReactComponent as ArrowBig } from '../../../assets/ArrowBig.svg';
import { ReactComponent as First } from '../../../assets/visitTypes/First.svg';
import { ReactComponent as Secondary } from '../../../assets/visitTypes/Secondary.svg';
import { ReactComponent as Vaccination } from '../../../assets/visitTypes/Vaccination.svg';
import classes from './Visit.module.scss';

type visitProps = {
    name: string,
    date: string,
    procedure: string,
    result: string
}

const Visit = ({
  name, date, procedure, result,
}: visitProps) => {
  const renderType = (type: string) => {
    switch (type) {
      case 'FIRST':
        return ({
          img: <First />,
          procedure: 'Первичный прием',
        });
      case 'SECONDARY':
        return ({
          img: <Secondary />,
          procedure: 'Повторный прием',
        });
      case 'VACCINATION':
        return ({
          img: <Vaccination />,
          procedure: 'Вакцинация',
        });
      default:
        return ({
          img: <First />,
          procedure: 'Первичный прием',
        });
    }
  };
  return (
    <div className={classes.Visit}>
      <div className={classes.leftPositionInfo}>
        <div className={classes.logo}>
          {renderType(procedure).img}
        </div>
        <div className={classes.text}>
          <div className={classes.name}>
            {name}
          </div>
          <div className={classes.date}>
            {moment(date).format('L, LT')}
          </div>
        </div>
      </div>
      <div className={classes.rightPositionInfo}>
        <div className={classes.text}>
          <div className={classes.result}>
            {result}
          </div>
          <div className={classes.procedure}>
            {renderType(procedure).procedure}
          </div>
        </div>
        <div className={classes.arrow}>
          <ArrowBig />
        </div>
      </div>
    </div>
  );
};

export default Visit;
