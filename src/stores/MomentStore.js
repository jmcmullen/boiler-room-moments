import axios from 'axios';
import { observable, action } from 'mobx';

export class MomentApi {
  fetchMoments = () => axios.get('/api/moments');
}

export class MomentStore {
  constructor() {
    this.momentApi = new MomentApi();
    this.fetchMoments();
  }

  @observable moments = [];
  @observable loading = true;

  @action async fetchMoments() {
    const { data } = await this.momentApi.fetchMoments();
    this.moments = data;
    this.loading = false;
  }
}
