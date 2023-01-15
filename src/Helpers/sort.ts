import { IItem } from 'Types/gameItemsType';
const Moment = require('moment');

export const parsePrice = (x: string) => parseFloat(x.replace(/^\$/, '')) || 0;

export const sortedByPrice = (filterButtonStatus: string, props: IItem[]) => {
  if (filterButtonStatus === 'lower' && filterButtonStatus) {
    const sortedByLowerPrice = props
      .slice()
      .sort((a: any, b: any) => parsePrice(a.price) - parsePrice(b.price));

    return sortedByLowerPrice;
  } else if (filterButtonStatus === 'bigger') {
    const sortedByBiggerPrice = props
      .slice()
      .sort((a: any, b: any) => parsePrice(b.price) - parsePrice(a.price));

    return sortedByBiggerPrice;
  }
  return [];
};

export const sortedByDate = (filterButtonStatus: string, props: IItem[]) => {
  if (filterButtonStatus === 'lower' && filterButtonStatus) {
    const sortedByLowerDate = props.sort(
      (a: any, b: any) =>
        Moment(new Date(a.released)).format('YYYYMMDD') -
        Moment(new Date(b.released)).format('YYYYMMDD')
    );
    return sortedByLowerDate;
  }
  if (filterButtonStatus === 'bigger' && filterButtonStatus) {
    const sortedByHigherDate = props.sort(
      (a: any, b: any) =>
        Moment(new Date(b.released)).format('YYYYMMDD') -
        Moment(new Date(a.released)).format('YYYYMMDD')
    );
    return sortedByHigherDate;
  }
  return [];
};

// export const filterToggle = (
//   filterButtonStatus: string,
//   props: IItem[],
//   filterToggleStatus: string
// ) => {
//   if (filterToggleStatus === 'priceBtn') {
//     const sortedPrice = sortedByPrice(filterButtonStatus, props);
//     return sortedPrice;
//   } else if (filterToggleStatus === 'dateBtn') {
//     const sortedDates = sortedByDate(filterButtonStatus, _,  props);
//     return sortedDates;
//   }
//   return [];
// };
