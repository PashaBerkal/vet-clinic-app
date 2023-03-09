import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as Search } from '../assets/Search.svg'
import { ReactComponent as Paw } from '../assets/Paw.svg'
import classes from './MyPets.module.scss';

const pets = [
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка, dsdsdsdssnsdfjbs dkfhadfbasdfbdabfkafbdfnab ',
        id: 1
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 1
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 1
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 1
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 1
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 1
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 1
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 1
    },
]

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
            <div className={classes.pets}>
                {pets.map((pet, index) =>{
                    return(
                        <div className={classes.pet}>
                            <div className={classes.petLogo}>
                                <Paw/>
                            </div>
                            <div className={classes.petInfo}>
                                <div className={classes.name}>{pet.name}</div>
                                <div className={classes.breed}>{pet.breed}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MyPets;