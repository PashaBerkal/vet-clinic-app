import FilterControls from '../../../../common/FilterControls/FilterControls';

const selectors = [
  {
    width: '46%',
    label: 'кличка',
    options: ['барсик', 'кот'],
  },
  {
    width: '32%',
    label: 'кличка',
    options: ['барсик', 'кот'],
  },
  {
    width: '32%',
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
