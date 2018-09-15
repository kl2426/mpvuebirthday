import chineseLunar from 'chinese-lunar';
import moment from 'moment';

function formatNumber (n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
};

export const formatTime = function (date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join('/');
  const t2 = [hour, minute, second].map(formatNumber).join(':');
  return `${t1} ${t2}`;
};

/**
 * 生日返回 月日 生日 ，公历与农历
 * @param {Date} date 生日，日期格式 new Date()
 * @return {Object}
 */
export const dayToLunar = function (date) {
  let data = {
    month_day: '',
    lunar_month_day: ''
  };
  // 格式错误
  if (!(date instanceof Date)) {
    return data;
  }
  //
  data.month_day = moment(date).format('MM月DD日');
  data.lunar_month_day = chineseLunar.format(chineseLunar.solarToLunar(date), 'Md');
  //
  return data;
};
