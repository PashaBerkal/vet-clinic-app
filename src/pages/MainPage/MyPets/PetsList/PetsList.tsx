import Pet from './Pet/Pet';
import classes from './PetsList.module.scss'

type PetItem = {
    id: number;
    name: string;
    breed: string
}

const pets: PetItem[] = [
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка, dsdsdsdssnsdfjbs dkfhadfbasdfbdabfkafbdfnab ',
        id: 1
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 2
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 3
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 4
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 5
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 6
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 7
    },
    {
        name: 'Кеша',
        breed: 'Ориентальная кошка',
        id: 8
    },
]

const PetsList = () => {
    return (
        <div className={classes.pets}>
            {pets.map((pet) =>{
                return(
                    <Pet 
                        name={pet.name}
                        breed={pet.breed}
                        key={pet.id + pet.name}
                    />
                )
            })}
        </div>
    );
};

export default PetsList;