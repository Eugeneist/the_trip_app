const getDate = (
  date: string,
): { restructuredDate: string; normalizedDate: Date } => {
  const [startDay, startMonth, startYear] = date.split(/[\p{P}\s]/gu);
  const restructuredDate = `${startYear}-${startMonth}-${startDay}`;
  const normalizedDate = new Date(restructuredDate);

  return { restructuredDate, normalizedDate };
};

export default getDate;
