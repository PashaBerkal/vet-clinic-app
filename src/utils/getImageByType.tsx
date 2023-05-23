import { ReactComponent as First } from './assets/visitTypes/First.svg';
import { ReactComponent as Secondary } from './assets/visitTypes/Secondary.svg';
import { ReactComponent as Vaccination } from './assets/visitTypes/Vaccination.svg';

const getImageByType = (type: string) => {
  switch (type) {
    case 'FIRST':
      return ({
        img: <First />,
        procedure: 'Первичный прием',
      });
    case 'SECONDARY':
      return ({
        img: <Secondary />,
        procedure: 'Повторный прием',
      });
    case 'VACCINATION':
      return ({
        img: <Vaccination />,
        procedure: 'Вакцинация',
      });
    default:
      return ({
        img: <First />,
        procedure: 'Первичный прием',
      });
  }
};

export default getImageByType;
