import axios from 'axios';
import showToast from '~/utils/toastMessage';
import {store} from '~/redux/store';
import {setLoginState} from '~/redux/actions';

const ERROR_MSG_TYPE = 'danger';

export const LoginFn = async (email, password, navigation) => {
  // Call login endpoint
  try {
    // Call user registration endpoint
    const response = await axios.post('/api/auth/login', {
      email,
      password,
    });

    // If successful, navigate to home page
    if (response?.data?.token) {
      // Format login data
      const loginData = {};

      console.log(response.data);
      // store.dispatch(setLoginState({...json, userId: username})); // our action is called here

      /* navigation.navigate('Main', {
        authToken: response.data.token,
      }); */
    } else {
      showToast('Login error, invalid token!', ERROR_MSG_TYPE, ERROR_MSG_TYPE);
    }
  } catch (error) {
    // Show error
    showToast(
      (error.response && error.response.data) || error.message,
      ERROR_MSG_TYPE,
      ERROR_MSG_TYPE,
    );
  }
};
