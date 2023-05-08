import axios from 'axios';
import {mainUrl} from './url';

const instance = axios.create({
  baseURL: mainUrl,
  });

export default instance;