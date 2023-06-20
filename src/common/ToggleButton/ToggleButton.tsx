import * as React from 'react';
import ToggleButton from '@material-ui/core/ToggleButton';
import ToggleButtonGroup from '@material-ui/core/ToggleButtonGroup';
import classes from './ToggleButton.module.scss';
import { setReceiveFilter } from '../../redux/visits/visitsSlice';
import { useAppDispatch } from '../../hooks/redux';

const ToggleButtons = () => {
  const [alignment, setAlignment] = React.useState<string | null>('1');
  const dispatch = useAppDispatch();
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
    dispatch(setReceiveFilter({ newAlignment }));
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      fullWidth
      size="small"
      className={classes.button}
    >
      <ToggleButton value="1">
        <div className={classes.text}>
          все
        </div>
      </ToggleButton>
      <ToggleButton value="2">
        <div className={classes.text}>
          Первичный диагноз
        </div>
      </ToggleButton>
      <ToggleButton value="3">
        <div className={classes.text}>
          Вторичный диагноз
        </div>
      </ToggleButton>
      <ToggleButton value="4" className={classes.red}>
        <div className={classes.text}>
          Вакцинация
        </div>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
export default ToggleButtons;
