function request(method, url, data) {
  let params;
  let resultRequest = `${url}?`;
  if (url[0] === '/') {
    resultRequest = `${this.defaults.baseURL}${resultRequest}`;
  }
  if (data) {
    params = data.params;
    Object.entries(params).forEach((value) => { 
        resultRequest += `${value[0]}=${value[1]}&`; 
    });
  }

  const promise = new Promise(((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), resultRequest, true);

    xhr.onload = function () {
      if (this.status === 200) {
        this.data = JSON.parse(this.response);
        this.request = xhr;
        this.headers = xhr.getAllResponseHeaders()
          .split('\n')
          .reduce((previous, value) => {
            const current = previous;
            if (value !== '') {
              const headersPair = value.split(':');
              const [property, propertyValue] = headersPair;
              current[property] = propertyValue;
            }
            return current;
          }, {});
        this.config = data;
        resolve(this);
      } else {
        const error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error('Network Error'));
    };

    xhr.send(data);
  }));
  return promise;
}

function get(url, data) {
  return request.apply(this, ['GET', url, data]);
}

function post(url, data) {
  return request.apply(this, ['POST', url, data]);
}

function put(url, data) {
  return request.apply(this, ['PUT', url, data]);
}

function del(url, data) {
  return request.apply(this, ['DELETE', url, data]);
}

function Axios(url, config) {
  let result;
  if (url && !config) {
    result = request('GET', url);
  }
  if (config) {
    result = request(config.method, url || config.url, config.data);
  }
  return result;
}

function create(config) {
  const instance = new Axios();
  // config on the last position to overwrite existed property
  instance.defaults = { ...instance.defaults, ...config };
  return instance;
}

Axios.prototype.get = get;
Axios.get = get;

Axios.prototype.post = post;
Axios.post = post;

Axios.prototype.put = put;
Axios.put = put;

Axios.prototype.delete = del;
Axios.delete = del;

Axios.prototype.create = create;
Axios.create = create;

Axios.defaults = {
  baseURL: 'http://httpbin.org',
  headers: {
    common: {
      Authorization: 'AUTH_TOKEN',
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
};

Axios.prototype.defaults = { ...Axios.defaults };
