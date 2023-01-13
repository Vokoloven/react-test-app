export interface IItem {
  appId: string;
  imgUrl: string;
  price: string;
  released: string;
  reviewSummary: string;
  title: string;
  url: string;
}

export interface IArrItem {
  props: IItem[];
}
