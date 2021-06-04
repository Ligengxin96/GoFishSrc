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
      let v2ex = [];
      const { list = [] } = get(response, 'data', {});
      if (list.length === 0) {
        v2ex = response.data;
      }
      resolve(list.concat(v2ex));
    }).catch((error) => {
      reject(error.message);
    });
  });
}

export default request;