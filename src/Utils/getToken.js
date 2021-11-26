import {localForage} from '../Services';

const getToken = async () => {
  try {
    const userCredentials = await localForage.getItem('credentials');
    return userCredentials?.token
  } catch (err) {
    // console.debug(err)
    throw err
  }
}

export default getToken;