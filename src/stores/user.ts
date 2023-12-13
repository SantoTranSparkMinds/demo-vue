import {defineStore} from 'pinia';
import {handleRequest} from '../api/axiosClient';

const apiLogin = (a: string, p: string) => {
  if (a === '12' && p === '121212')
    return Promise.resolve({isLoggedIn: true, user: 'tungtt286'});
  return Promise.reject({isLoggedIn: false, user: 'invalid'});
};

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isLoggedIn: false,
    user: null as string | null,
  }),

  actions: {
    async login(user: string, password: string) {
      const userData = await handleRequest(apiLogin(user, password));
      this.isLoggedIn = userData.isLoggedIn;
      this.user = userData.user;
      return userData;
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
    },
  },
});
