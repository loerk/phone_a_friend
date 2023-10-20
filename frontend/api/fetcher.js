const BASE_URL = 'http://localhost:7001';
//process.env.REACT_APP_BASE_URL;
export const fetchData = async (path, method, data) => {
  const url = `${BASE_URL}${path}`;
  const postHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const getHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const postOptions = {
    credentials: 'include',
    method: method,
    headers: postHeaders,
    body: JSON.stringify(data)
  };

  const getOptions = {
    credentials: 'include',
    method: method,
    headers: getHeaders
  };
  const response = await fetch(
    url,
    method === 'GET' || method === 'DELETE' ? getOptions : postOptions
  );
  try {
    if (response.ok) {
      const data = response.json();
      return data;
    }
    throw new Error('sorry, something went wrong');
  } catch (error) {
    return error.message;
  }
};
