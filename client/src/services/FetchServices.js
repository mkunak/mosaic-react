import axios from 'axios';

export default class FetchServices {
  getAllPersonnel = () => {
    return new Promise((resolve, reject) => {
      resolve(axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}`));
      reject(new Error('failed to get all personnel!'));
    });
  };
}
