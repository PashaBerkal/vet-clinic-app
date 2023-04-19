import Pet from './Pet/Pet';
import classes from './PetsList.module.scss';

const pets = [
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
  },
  {
    name: 'Барски',
    age: '5 лет',
    animal: 'Кот',
    breed: 'Веслоухий',
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
        key={pet.name + index.toString()}
      />
    ))}
  </div>
);
export default PetsList;
