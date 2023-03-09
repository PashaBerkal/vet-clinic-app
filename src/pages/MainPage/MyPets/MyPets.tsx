import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as Search } from '../assets/Search.svg'
import classes from './MyPets.module.scss';
import PetsList from './PetsList';

const MyPets = () => {
    return (
        <div className={classes.MyPets}>
            <div className={classes.title}>Мои питомцы</div>
            <Box
                component="form"
                className={classes.box}
            >  
                <TextField
                    id="outlined-secondary"
                    label="Поиск"
                    className={classes.textField}
                />
                <div className={classes.icon}>
                    <IconButton >
                        <Search/>
                    </IconButton>
                </div>
            </Box>
            <PetsList/>
        </div>
    );
};

export default MyPets;