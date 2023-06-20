import FilterControls from '../../../../common/FilterControls/FilterControls';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setAnimalTypeFilter } from '../../../../redux/visits/visitsSlice';

const FiltersBottom = () => {
  const { animalTypeFilter } = useAppSelector((state) => state.visits);
  const dispatch = useAppDispatch();
  const autocompleteHandler = (
    value: string | null,
    name: string,
  ) => {
    dispatch(setAnimalTypeFilter({ name, value: value || '' }));
  };
  return (
    <div>
      <FilterControls onChange={autocompleteHandler} selectors={animalTypeFilter} />
    </div>
  );
};
export default FiltersBottom;
