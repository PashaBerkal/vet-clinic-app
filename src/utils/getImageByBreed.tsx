import Cat from './assets/pets/Cat.png';
import Dog from './assets/pets/Dog.png';
import Ferret from './assets/pets/Ferret.png';
import GuineaPig from './assets/pets/GuineaPig.png';
import Horse from './assets/pets/Horse.png';
import Mouse from './assets/pets/Mouse.png';
import Turtle from './assets/pets/Turtle.png';
import Сhinchilla from './assets/pets/Сhinchilla.png';
import Pig from './assets/pets/Pig.png';

const getImageByBreed = (breed: string) => {
  const imgStyle = { width: '100%', height: '100%' };
  let img = <img src="./assets/pets/Other.png" alt="Other" style={imgStyle} />;
  if (breed === 'Кошка' || breed === 'Кот') {
    img = <img src={Cat} alt="Cat" style={imgStyle} />;
  } else if (breed === 'Собака') {
    img = <img src={Dog} alt="Dog" />;
  } else if (breed === 'Хорек' || breed === 'Ласка' || breed === 'Норка' || breed === 'Соболь') {
    img = <img src={Ferret} alt="Ferret" style={imgStyle} />;
  } else if (breed === 'Морская свинка') {
    img = <img src={GuineaPig} alt="GuineaPig" style={imgStyle} />;
  } else if (breed === 'Сурикат' || breed === 'Енот' || breed === 'Лошадь') {
    img = <img src={Horse} alt="Horse" style={imgStyle} />;
  } else if (breed === 'Мышь' || breed === 'Хомяк' || breed === 'Крыса' || breed === 'Дегу') {
    img = <img src={Mouse} alt="Mouse" style={imgStyle} />;
  } else if (breed === 'Минипиг') {
    img = <img src={Pig} alt="Pig" style={imgStyle} />;
  } else if (breed === 'Черепаха') {
    img = <img src={Turtle} alt="Turtle" style={imgStyle} />;
  } else if (breed === 'Шиншилла') {
    img = <img src={Сhinchilla} alt="Сhinchilla" style={imgStyle} />;
  }
  return img;
};

export default getImageByBreed;
