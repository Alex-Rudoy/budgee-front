import { makeAutoObservable } from 'mobx';

class UserStore {
  authToken: string = '123';

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return Boolean(this.authToken);
  }
}

const userStore = new UserStore();

export default userStore;
