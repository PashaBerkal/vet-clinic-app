import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { useFetchAllPetsQuery } from '../../../redux/pets/petsApiSlice';
import { updatePets } from '../../../redux/pets/petsSlice';
import Pet from './Pet/Pet';
import classes from './PetsList.module.scss';

const Pets = [
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
const PetsList = () => {
  const { data: pets, isError, isLoading, refetch } = useFetchAllPetsQuery({ name: '' });
  const disaptch = useAppDispatch();
  useEffect(() => {
    refetch();
    disaptch(updatePets(pets));
  }, pets);
  return (
    <div className={classes.PetsList}>
      {pets && pets.map((pet, index) => (
        <Pet
          age={Pets[0].age}
          animal={pet.kind.kind_name ? pet.kind.kind_name : 'Нет данных'}
          breed={pet.breed ? pet.breed.breed_name : 'Нет данных'}
          name={pet.name ? pet.name : 'Нет данных'}
          id={pet.pet_id}
          key={pet.name + index.toString()}
        />
      ))}
    </div>
  );
};
export default PetsList;
