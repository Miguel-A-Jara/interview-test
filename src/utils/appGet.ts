import axios from 'axios';

const appGet = async <T, >(url: string) => {

  try {

    const { data } = await axios.get<T>(url);
    return data;

  } catch (error) {

    if(axios.isAxiosError(error)) {
      console.log('Error message: ', error.message);
      return Promise.reject();
    }
    
    console.log('Unexpected error message: ', error);
    return Promise.reject();
  };
};

export default appGet;