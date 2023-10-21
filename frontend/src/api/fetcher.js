const BASE_URL = 'http://localhost:7001';
//process.env.REACT_APP_BASE_URL;
export const fetchData = async (path, method, data) => {
  const url = `${BASE_URL}${path}`;
  const postHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': BASE_URL
  };

  const getHeaders = {
    Accept: 'application/json',
    credentials: 'include',
    'Content-Type': 'application/json'
  };

  const postOptions = {
    method: method,
    headers: postHeaders,
    body: JSON.stringify(data)
  };

  const getOptions = {
    method: method,
    headers: getHeaders
  };

  try {
    const response = await fetch(
      url,
      method === 'GET' || method === 'DELETE' ? getOptions : postOptions
    );
    if (response.ok) {
      const data = response.json();
      return data;
    }
    throw new Error('sorry, something went wrong');
  } catch (error) {
    return error.message;
  }
};
