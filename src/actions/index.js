export const FETCH_VIEWPOINT = 'FETCH_VIEWPOINT';

export function fetchViewPoint(city) {
	return {
		type: FETCH_VIEWPOINT,
		payload: city
	};
}