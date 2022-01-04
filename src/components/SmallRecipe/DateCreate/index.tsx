
interface Props {
  date: string
};

export const DateCreate = (props: Props) => {
  const {
    date
  } = props;

  const calcDate = (date: string) => {
    const [year, month, day] = date.substring(0, 10).split('-');
    return `${day}-${month}-${year}`
  }

  return (
    <div>
      {calcDate(date)}
    </div>
  );
};
