import moment from 'moment';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBig } from '../../../assets/ArrowBig.svg';
import classes from './Visit.module.scss';
import getImageByVisitType from '../../../../../utils/getImageByVisitType';

type VisitProps = {
    name: string,
    date: string,
    procedure: string,
    result: string,
    id: number,
}

const Visit = ({
  name, date, procedure, result, id,
}: VisitProps) => (
  <Link to={`/MedicalCardPage/${id}`} style={{ textDecoration: 'none' }}>
    <div className={classes.Visit}>
      <div className={classes.leftPositionInfo}>
        <div className={classes.logo}>
          {getImageByVisitType(procedure).img}
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
            {getImageByVisitType(procedure).procedure}
          </div>
        </div>
        <div className={classes.arrow}>
          <ArrowBig />
        </div>
      </div>
    </div>
  </Link>
);

export default Visit;
