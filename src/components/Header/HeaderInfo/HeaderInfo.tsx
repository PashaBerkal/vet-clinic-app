import Contacts from './Contacts';
import User from './User';
import classes from './HeaderInfo.module.scss';

const HeaderInfo = () => {
    return (
        <div className={classes.HeaderInfo}>
            <Contacts/>
            <User/>
        </div>
    );
};

export default HeaderInfo;