import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../hoc/Container/Container';
import Pet from './Pet/Pet';
import Destination from './Destination/Destination';
import { ReactComponent as Arrow } from './assets/Arrow.svg';
import classes from './MedicalCardPet.module.scss';

const MedicalCardPet = () => (
  <Container>
    <Link to="/PetsPage" style={{ textDecoration: 'none' }}>
      <div className={classes.back}>
        <Arrow />
        Назад
      </div>
    </Link>
    <div className={classes.MedicalCardPet}>
      <Pet animal="animal" breathingRate={3} breed="breed" name="name" pulse={2} weight={1} />
      <div className={classes.infoSection}>
        <Destination />
      </div>
    </div>
  </Container>
);

export default MedicalCardPet;
