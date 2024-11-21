export default data => {
  if (data) {
    return Object.keys(data)
      .map(key => {
        return {
          id: key,
          ...data[key],
        };
      })
      .sort(function (a, b) {
        return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;
      });
  } else return false;
};
