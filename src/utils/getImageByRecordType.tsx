import { ReactComponent as Surgeon } from './assets/recordTypes/Surgeon.svg';
import { ReactComponent as Ultrasound } from './assets/recordTypes/Ultrasound.svg';
import { ReactComponent as Visit } from './assets/recordTypes/Visit.svg';

const getImageByRecordType = (type: string) => {
  let img = <Visit />;
  if (type === 'ULTRASOUND') {
    img = <Ultrasound />;
  } else if (type === 'VISIT') {
    img = <Visit />;
  } else if (type === 'SURGEON') {
    img = <Surgeon />;
  }
  return img;
};

export default getImageByRecordType;
