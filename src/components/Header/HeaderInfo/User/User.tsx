import { ReactComponent as Client} from '../../assets/User.svg'
import classes from './User.module.scss'

const User = () => {
    return (
        <div className={classes.User}>
            <div className={classes.client}>
                <Client/>
            </div>
            <div>Наталья<br/>Григорьевна</div>
        </div>
    );
};

export default User;