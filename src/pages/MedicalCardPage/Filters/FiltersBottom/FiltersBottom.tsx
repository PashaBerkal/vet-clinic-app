import FilterControls from '../../../../common/FilterControls/FilterControls';

const selectors = [
  {
    width: '34%',
    label: 'кличка',
    options: ['барсик', 'кот'],
  },
  {
    width: '22%',
    label: 'кличка',
    options: ['барсик', 'кот'],
  },
  {
    width: '22%',
    label: 'кличка',
    options: ['барсик', 'кот'],
  },
  {
    width: '22%',
    label: 'кличка',
    options: ['барсик', 'кот'],
  },
];

const FiltersBottom = () => (
  <div>
    <FilterControls selectors={selectors} />
  </div>
);
export default FiltersBottom;
