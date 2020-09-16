const formatDate = (date: Date): string => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  const formatedDate = `${day < 10 ? '0' : ''}${day}/${
    month < 10 ? '0' : ''
  }${month}/${year}`;

  return formatedDate;
};

export default formatDate;
