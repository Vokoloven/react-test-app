import { configAxios } from './configAxios';

interface IParams {
  search: string;
  page: number;
}

export const searchGameByName = async (params: IParams) => {
  try {
    const { data } = await configAxios.get(
      `/search/${params.search}/page/${params.page}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGameDetails = async (id: string) => {
  try {
    const { data } = await configAxios.get(`/appDetail/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
