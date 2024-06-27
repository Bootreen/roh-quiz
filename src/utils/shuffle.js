export const shuffle = (total) => {
  const result = new Array(total).fill([0, 1, 2, 3]);
  return result.map((array) =>
    array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  );
};
