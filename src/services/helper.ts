export const convertParamsToQueryString = (params) => {
  Object.keys(params).forEach((key) => !params[key] && delete params[key]);

  const queryString = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');

  return queryString;
};
