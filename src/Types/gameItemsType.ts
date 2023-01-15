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

export interface IAppDetails {
  DLCs: [];
  allReviews: { summary: string };
  description: string;
  developer: {
    link: string;
    name: string;
  };
  imgUrl: string;
  price: string;
  publisher: {
    link: string;
    name: string;
  };
  released: string;
  tags: [
    {
      url: string;
      name: string;
    }
  ];
  title: string;
}
