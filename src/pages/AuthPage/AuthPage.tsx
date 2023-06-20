import React, { useEffect, useState } from 'react';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '../../hoc/Container/Container';
import { AuthRequestParams } from '../../models/IAuth';
import { useAppDispatch } from '../../hooks/redux';
import { useLoginMutation } from '../../redux/auth/authApiSlice';
import { logOut, setCredentials } from '../../redux/auth/authSlice';
import catImg from './assets/cat.png';
import classes from './AuthPage.module.scss';

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

  useEffect(() => {
    dispatch(logOut());
  }, []);

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
      <div className={classes.Auth}>
        <div className={classes.welocme}>
          <div className={classes.title}>Добро пожаловать в клинику «Кот и доГ»!</div>
          <div className={classes.subtitle}>
            Войдите в личный кабинет, чтобы следить за здоровьем
            <br />
            своего питомца или записать его на прием в клинику.
          </div>
          <div className={classes.img}>
            <img src={catImg} alt="кот" />
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.title}>
            Войти в личный кабинет
          </div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={handleChange}
            value={values.email}
            name="email"
            className={classes.email}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={isShowPassword ? 'text' : 'password'}
              name="password"
              value={values.password}
              onChange={handleChange}
              className={classes.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    className="togglePass"
                  >
                    {isShowPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
            }
              label="Password"
            />
          </FormControl>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Запомнить меня" />
          <Button variant="contained" size="large" onClick={authHandler} className={classes.button}>
            Войти
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AuthPage;
