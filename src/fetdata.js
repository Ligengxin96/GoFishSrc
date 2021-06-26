import get from 'lodash/get';
import axios from 'axios';

const request = (options) => {
  const { url = '' } = options;
  return new Promise((resolve, reject) => {
    axios.get(url).then((response) => {
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