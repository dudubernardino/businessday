#!/usr/bin/env node

const {
  addDays,
  differenceInBusinessDays,
  isSaturday,
  isSunday,
} = require("date-fns");

const getDeadline = (date, deadline) => {
  let newDeadline = addDays(date, deadline);

  const businessDays = differenceInBusinessDays(newDeadline, date);

  let difference;
  difference = deadline - businessDays;

  newDeadline = addDays(newDeadline, difference);

  if (isSaturday(newDeadline)) {
    newDeadline = addDays(newDeadline, 2);
  }

  if (isSunday(newDeadline)) {
    newDeadline = addDays(newDeadline, 1);
  }

  return newDeadline;
};

const getdifferenceInBusinessDays = (date, deadline) => {
  let newDeadline = addDays(date, deadline);

  const businessDays = differenceInBusinessDays(newDeadline, date);

  return businessDays;
};
