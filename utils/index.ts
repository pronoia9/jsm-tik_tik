import axios from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetUser = async (response: any, addUser: any) => {
  // console.log(response);
  var base64Url = response.credential.split('.')[1];
  // console.log(base64Url);
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  // console.log(base64);
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
  // console.log(jsonPayload);

  const { name, picture, sub } = JSON.parse(jsonPayload);

  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  };
  // console.log(user);

  // addUser(user);

  // await axios.post(`${BASE_URL}/api/auth`, user);
  await axios.post(`http://localhost:3000/api/auth`, user);
};