import { configAxios } from './configAxios';

interface IParams {
  search: string;
  page: string;
}

export const searchGameByName = async (params: IParams) => {
  const { data } = await configAxios.get(
    `/search/${params.search}/page/${params.page}`
  );

  return data;
};

export const gameDetails = async (id: string) => {
  const { data } = await configAxios.get(`/appDetail/${id}`);

  return data;
};
