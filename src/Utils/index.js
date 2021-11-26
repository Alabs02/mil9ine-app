import axiosClient from "./axiosClient";
import transformToFormData from './transformToFormData';
import getToken from './getToken';
import catchAxiosErrors from './catchAxiosErrors';
import slugify from "./slugify";
import moneyFormat from "./moneyFormat";
import checkGender from "./checkGender";
import months from "./months";
import { formatTime } from "./formatTime";
import locationRef from "./locationRef";

export { 
  transformToFormData, 
  getToken, 
  catchAxiosErrors, 
  slugify, 
  moneyFormat, 
  checkGender, 
  months, 
  formatTime,
  locationRef,
};
export default axiosClient;