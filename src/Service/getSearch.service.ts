import { configAxios } from './configAxios';

export const searchGameByName = async (params: any) => {
  const { data } = await configAxios.get(
    `/search/${params.search}/page/${params.page}`
  );

  return data;
};
