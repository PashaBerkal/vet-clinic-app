const areAllFieldsFilled = (obj: object) => {
  const values = Object.values(obj);
  return values.every((value) => value !== '');
};

export default areAllFieldsFilled;
