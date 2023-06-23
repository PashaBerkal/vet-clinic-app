export const formatToTimestamp = (timestamp: Date) => {
  console.log({ res: timestamp });
  console.log({ res1: timestamp.toISOString().split('Z')[0] });
  return timestamp.toISOString().split('Z')[0];
};
