import { ChangeEventHandler } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as Search } from './assets/Search.svg'
import clsx from 'clsx';
import classes from './SearchField.module.scss'

type Props = {
    value: string,
    onChangeValue: ChangeEventHandler<HTMLInputElement>,
    className?: string,
    fullWidth?: boolean
}

const SearchField = ({value, onChangeValue, className, fullWidth}: Props) => {
    return (
        <Box
                component="form"
                className={clsx(classes.SearchField, className)}
            >  
                <TextField
                    fullWidth={fullWidth}
                    id="outlined-secondary"
                    label="Поиск"
                    className={classes.textField}
                    value={value}
                    onChange={onChangeValue}
                />
                <div className={classes.icon}>
                    <IconButton >
                        <Search/>
                    </IconButton>
                </div>
        </Box>
    );
};

export default SearchField;