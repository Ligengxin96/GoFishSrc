import get from 'lodash/get';
import axios from 'axios';

const request = (options) => {
  const { url = '', params = {}, method = 'post' } = options;
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      timeout: 20000,
    }).then((response) => {
      const { list = [] } = get(response, 'data', {});
      resolve(list);
    }).catch((error) => {
      reject(error.message);
    });
  });
}

export default request;