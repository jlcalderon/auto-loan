export const STORE_API_RESPONSE = "STORE_API_RESPONSE";

export const storeApiResponse = (data) => ({
  type: STORE_API_RESPONSE,
  payload: data,
});
