const getRandomId = () => {
  const timestamp = new Date().getTime();
  const randomId =
    timestamp.toString(36) + Math.random().toString(36).substring(2, 5);
  return randomId;
};

export default getRandomId;
