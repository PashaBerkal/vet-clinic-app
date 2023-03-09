import { Button } from '@material-ui/core';
import {ReactComponent as Paws} from '../assets/paws.svg'
import classes from './NearestEntry.module.scss'

const NearestEntry = () => {
    return (
        <div className={classes.NearestEntry}>
            <div className={classes.paws}>
                <Paws/>
            </div>
            <div className={classes.entryContainer}>
                <div className={classes.title}>Ближайшая запись</div>
                <div className={classes.entryInfo}>
                    <div className={classes.entryTime}>
                        20 марта
                        <span>13:56</span>
                    </div>
                    <div className={classes.entryProcedure}>
                        У Кеши визит в клинику
                        <span>УЗИ органов брюшной полости</span>
                    </div>
                </div>
                <Button variant="outlined" className={classes.button}>Посмотреть все</Button>
            </div>
        </div>
    );
};

export default NearestEntry;