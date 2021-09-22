const request = (url: string, options: RequestInit = {}): Promise<Response> => {
    if (!options.headers) {
      options.headers = { 'Accept': 'application/json' };
    }
    if (options.method != 'GET') {
      options.headers['Content-Type'] = 'application/json'
    }
    options.credentials = 'include'
    return fetch(url, options);
  }

export const reqs = {
    get: (path: string) => request(path),
    post: (path: string, body: {}) => request(path, { method: "GET", body: JSON.stringify(body)}),
    put: (path: string, body: {}) => request(path, { method: "PUT", body: JSON.stringify(body)}),
    delete: (path: string) => request(path, { method: "DELETE" })
}
