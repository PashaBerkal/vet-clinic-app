import { ReactComponent as Procedure } from '../../assets/Procedure.svg';
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import classes from './Pet.module.scss';

type Props = {
    name: string,
    date: string,
    procedure: string,
    result: string
}

const Pet = ({
  name, date, procedure, result,
}: Props) => (
  <div className={classes.Pet}>
    <div className={classes.leftPositionInfo}>
      <div className={classes.logo}>
        <Procedure />
      </div>
      <div className={classes.text}>
        <div className={classes.name}>
          {name}
        </div>
        <div className={classes.date}>
          {date}
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
        Первичный диагноз
        <Arrow />
      </div>
    </div>
  </div>
);

export default Pet;
