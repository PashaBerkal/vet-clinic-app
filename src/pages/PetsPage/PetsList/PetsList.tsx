import Pet from './Pet/Pet';
import classes from './PetsList.module.scss';

const pets = [
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 1,
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 2,
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 3,
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 4,
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 5,
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 6,
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 7,
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 8,
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 9,
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
    id: 10,
  },
];
const PetsList = () => (
  <div className={classes.PetsList}>
    {pets.map((pet, index) => (
      <Pet
        age={pet.age}
        animal={pet.animal}
        breed={pet.breed}
        name={pet.name}
        id={pet.id}
        key={pet.name + index.toString()}
      />
    ))}
  </div>
);
export default PetsList;
