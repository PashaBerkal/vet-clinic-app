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
import Container from '../../hoc/Container/Container';
import { AuthRequestParams, AuthResponseParams } from '../../models/IAuth';
import authApi from '../../services/AuthService';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authSlice } from '../../services/reducers/AuthSlice';
import storageUtil from '../../utils/storageUtil';

const AuthPage = () => {
//   const { isAuth } = useAppSelector((state) => state.authSlice);
  const { setCredentials } = authSlice.actions;
  const dispatch = useAppDispatch();
  const [auth] = authApi.useAuthMutation();
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
    const result = await auth(values);
    if ('data' in result) {
      dispatch(setCredentials(result));
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
