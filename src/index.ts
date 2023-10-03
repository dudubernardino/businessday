import { addDays, differenceInBusinessDays, isSaturday, isSunday } from 'date-fns';

interface IDeadline {
  date: Date;
  deadline: number;
}

const getDeadline = ({ date, deadline }: IDeadline): Date => {
  let newDeadline = addDays(date, deadline);

  const businessDays = differenceInBusinessDays(newDeadline, date);

  const difference = deadline - businessDays;

  newDeadline = addDays(newDeadline, difference);

  if (isSaturday(newDeadline)) {
    newDeadline = addDays(newDeadline, 2);
  } else if (isSunday(newDeadline)) {
    newDeadline = addDays(newDeadline, 1);
  }

  return newDeadline;
};

const getdifferenceInBusinessDays = ({ date, deadline }: IDeadline): number => {
  const newDeadline = addDays(date, deadline);

  const businessDays = differenceInBusinessDays(newDeadline, date);

  return businessDays;
};
