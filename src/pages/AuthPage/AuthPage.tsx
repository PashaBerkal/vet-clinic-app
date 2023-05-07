import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Container from '../../hoc/Container/Container';
import { AuthRequestParams } from '../../models/IAuth';
import { useAppDispatch } from '../../hooks/redux';
import { useLoginMutation } from '../../redux/auth/authApiSlice';
import { setCredentials } from '../../redux/auth/authSlice';

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [createSession] = useLoginMutation();
  const [values, setValues] = useState<AuthRequestParams>({
    email: '',
    password: '',
  });
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const newObj = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newObj);
  };

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const authHandler = async () => {
    const result = await createSession(values);
    if ('data' in result) {
      dispatch(setCredentials(result));
      navigate('/');
    }
  };

  return (
    <Container>
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={handleChange}
          value={values.email}
          name="email"
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={isShowPassword ? 'text' : 'password'}
            name="password"
            value={values.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {isShowPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" size="large" onClick={authHandler}>
          Войти
        </Button>
      </div>
    </Container>
  );
};

export default AuthPage;
