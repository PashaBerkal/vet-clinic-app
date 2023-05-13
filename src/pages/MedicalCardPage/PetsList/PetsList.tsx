import Pet from './Pet/Pet';
import classes from './PetsList.module.scss';

type PetItem = {
    name: string,
    date: string,
    procedure: string,
    result: string,
    id: number
}

const pets: PetItem[] = [
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 1,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 2,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 3,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 4,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 1,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 2,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 3,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 4,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 1,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 2,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 3,
  },
  {
    name: 'Кеша',
    date: '12.03.2023, 12:12',
    procedure: 'Вакцинация',
    result: 'Название вакцины',
    id: 4,
  },
];

const PetsList = () => (
  <div className={classes.PetsList}>
    {pets.map((pet, index) => (
      <Pet
        name={pet.name}
        date={pet.date}
        procedure={pet.procedure}
        result={pet.result}
        key={index.toString() + pet.name}
      />
    ))}
  </div>
);

export default PetsList;
