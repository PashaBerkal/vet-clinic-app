import { ReactComponent as Paw } from '../../../assets/Paw.svg'
import classes from './Pet.module.scss'

type Props = {
    name: string,
    breed: string
}

const Pet = ({name, breed}: Props) => {
    return (
        <div className={classes.pet}>
            <div className={classes.petLogo}>
                <Paw/>
            </div>
            <div className={classes.petInfo}>
                <div className={classes.name}>{name}</div>
                <div className={classes.breed}>{breed}</div>
            </div>
        </div>
    );
};

export default Pet;