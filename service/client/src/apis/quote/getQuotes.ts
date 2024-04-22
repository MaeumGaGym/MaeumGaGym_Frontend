import { instance } from "../axios";

export interface GetQuotesResponse {
	quote: string
	quoter: string
}

export const getQuotes = async (access_token: string, csrf_token: string) => {
	return await instance.get<GetQuotesResponse>('/quotes', {
		headers: {
			Authorization: `bearer ${access_token}`,
			"X-XSRF-TOKEN": csrf_token,
			"X-Not-Using-Xquare-Auth": true
		}
	}).then(res => res.data)
}
