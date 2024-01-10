export default class GenericServices {
  constructor(baseAPI) {
    this.baseAPI = baseAPI
  }
  
  get = (url) => {
    return new Promise((resolve, reject) => {
      this.baseAPI
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  };

  post = (url, data) => {
    return new Promise((resolve, reject) => {
      this.baseAPI
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err?.response?.data);
        });
    });
  };

  put = (url, data) => {
    return new Promise((resolve, reject) => {
      this.baseAPI
        .put(url, data).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
    });
  };

  delete = (url, data) => {
    return new Promise((resolve, reject) => {
      this.baseAPI
        .delete(url, data).then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
    });
  };

}
// export default UserGenericServices;


