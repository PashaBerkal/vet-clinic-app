/* eslint-disable react/jsx-props-no-spreading */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import { FC } from 'react';
import classes from './FilterControls.module.scss';

type Selector = {
  width: string;
  name: string;
  label: string;
  options: string[];
};

interface FilterControlsProps {
  selectors: Selector[];
  onChange: (value: string | null, name: string) => void
}

const FilterControls: FC<FilterControlsProps> = ({ selectors, onChange }) => (
  <div className={classes.FilterControls}>
    {selectors.map(({ label, options, width, name }, id) => (
      <Autocomplete
        onChange={(_, value) => onChange(value, name)}
        key={label + id.toString()}
        disablePortal
        id={name}
        options={options}
        sx={{ width }}
        renderInput={(params) => (
          <TextField
            onChange={(e) => onChange(e.target.value, name)}
            name={name}
            {...params}
            label={label}
          />
        )}
      />
    ))}
  </div>
);

export default FilterControls;
