import moment from 'moment';
import { ReactComponent as Procedure } from '../../../assets/Procedure.svg';
import { ReactComponent as ArrowBig } from '../../../assets/ArrowBig.svg';
import classes from './Visit.module.scss';

type Props = {
    name: string,
    date: string,
    procedure: string,
    result: string
}

const Visit = ({
  name, date, procedure, result,
}: Props) => (
  <div className={classes.Visit}>
    <div className={classes.leftPositionInfo}>
      <div className={classes.logo}>
        <Procedure />
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
          {procedure}
        </div>
      </div>
      <div className={classes.arrow}>
        <ArrowBig />
      </div>
    </div>
  </div>
);

export default Visit;
