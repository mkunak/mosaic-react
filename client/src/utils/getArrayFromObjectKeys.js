const getArrayFromObjectKeys = (object) => {
  const keys = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) keys.push(key);
  }
  return keys;
};

export {getArrayFromObjectKeys};
