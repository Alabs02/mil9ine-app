import { selector } from "recoil";
import { getRequest } from "../../Utils/axiosClient";
import { catchAxiosErrors } from "../../Utils";
import getParksCountAtom from './atom';

const withParksCountQuery = selector({
  key: 'withParksCountQuery',
  get: async ({get}) => {
    try {
      const { data, status, statusText } = await getRequest(`/get-landing-page-data`);

      if (data) {
        // console.log(data, status, statusText);
        // console.log('Booked Rides State: ', get(getParksCountAtom));
        // console.log('Actual Data: ', data);

        return data || {};
      }
    } catch (err) {
      catchAxiosErrors(err, null, null);
    }
  },
  set: ({ set, get }, newParksCount) => {
    set(getParksCountAtom, [...get(getParksCountAtom), newParksCount]);
  },
});

export default withParksCountQuery;