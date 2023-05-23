import { ReactComponent as Cat } from './assets/pets/Cat.svg';
import { ReactComponent as Dog } from './assets/pets/Dog.svg';
import { ReactComponent as Ferret } from './assets/pets/Ferret.svg';
import { ReactComponent as GuineaPig } from './assets/pets/GuineaPig.svg';
import { ReactComponent as Horse } from './assets/pets/Horse.svg';
import { ReactComponent as Mouse } from './assets/pets/Mouse.svg';
import { ReactComponent as Other } from './assets/pets/Other.svg';
import { ReactComponent as Pig } from './assets/pets/Pig.svg';
import { ReactComponent as Turtle } from './assets/pets/Turtle.svg';
import { ReactComponent as Сhinchilla } from './assets/pets/Сhinchilla.svg';

const getImageByBreed = (breed: string) => {
  let img = <Other />;
  if (breed === 'Кошка' || breed === 'Кот') {
    img = <Cat />;
  } else if (breed === 'Собака') {
    img = <Dog />;
  } else if (breed === 'Хорек' || breed === 'Ласка' || breed === 'Норка' || breed === 'Соболь') {
    img = <Ferret />;
  } else if (breed === 'Морская свинка') {
    img = <GuineaPig />;
  } else if (breed === 'Сурикат' || breed === 'Енот' || breed === 'Лошадь') {
    img = <Horse />;
  } else if (breed === 'Мышь' || breed === 'Хомяк' || breed === 'Крыса' || breed === 'Дегу') {
    img = <Mouse />;
  } else if (breed === 'Минипиг') {
    img = <Pig />;
  } else if (breed === 'Черепаха') {
    img = <Turtle />;
  } else if (breed === 'Шиншилла') {
    img = <Сhinchilla />;
  }
  return img;
};

export default getImageByBreed;
