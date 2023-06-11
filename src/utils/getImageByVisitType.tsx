import First from './assets/visitTypes/First.png';
import Secondary from './assets/visitTypes/Secondary.png';
import Vaccination from './assets/visitTypes/Vaccination.png';

const getImageByVisitType = (type: string) => {
  const imgStyle = { width: '100%', height: '100%' };
  switch (type) {
    case 'FIRST':
      return {
        img: <img src={First} alt="First" style={imgStyle} />,
        procedure: 'Первичный прием',
      };
    case 'SECONDARY':
      return {
        img: <img src={Secondary} alt="Secondary" style={imgStyle} />,
        procedure: 'Повторный прием',
      };
    case 'VACCINATION':
      return {
        img: <img src={Vaccination} alt="Vaccination" style={imgStyle} />,
        procedure: 'Вакцинация',
      };
    default:
      return {
        img: <img src={First} alt="First" style={imgStyle} />,
        procedure: 'Первичный прием',
      };
  }
};

export default getImageByVisitType;
