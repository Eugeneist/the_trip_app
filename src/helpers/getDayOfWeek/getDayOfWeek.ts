const getDayOfWeek = (dateString: string): string => {
  return [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ][new Date(dateString).getDay()];
};

export default getDayOfWeek;
