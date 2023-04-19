/* eslint-disable react/jsx-props-no-spreading */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import { FC } from 'react';
import classes from './FilterControls.module.scss';

type Selector = {
  width: string;
  label: string;
  options: string[];
};

interface FilterControlsProps {
  selectors: Selector[];
}

const FilterControls: FC<FilterControlsProps> = ({ selectors }) => (
  <div className={classes.FilterControls}>
    {selectors.map(({ label, options, width }, id) => (
      <Autocomplete
        key={label + id.toString()}
        disablePortal
        id={id.toString()}
        options={options}
        sx={{ width }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    ))}
  </div>
);

export default FilterControls;
