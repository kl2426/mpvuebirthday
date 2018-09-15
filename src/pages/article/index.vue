<template>
  <div class="counter-warp">
    <div>姓名：{{item.birthday_name}}</div>
    <div v-if="item.birthday_sex === 1">性别：男</div>
    <div v-else>性别：女</div>
    <div v-if="item.birthday_day_type === 1">生日（公历）：{{item.birthday_month_day.month_day}}</div>
    <div v-if="item.birthday_day_type === 2">生日（农历）：{{item.birthday_month_day.lunar_month_day}}</div>
    <div>星座：{{item.birthday_sex}}</div>
    <div v-if="todayIsbirthday">今天是你的生日</div>
    <div>生日还有：210天</div>
    <div>210天后是你的31岁生日</div>
    <div>公历2018年12月09日</div>
    <div>农历2018年12月09日</div>
  </div>
</template>

<script>
/**
 * long description for the file
 *
 * @summary 查看生日页
 * @author wu <308822989@qq.com>
 *
 * Created at     : 2018-09-15 13:59:51
 * Last modified  : 2018-09-15 16:00:03
 */
// Use Vuex
import store from '@/store/store';
import { dayToLunar } from '@/utils/index';
import moment from 'moment';

export default {
  data () {
    return {
      item: {}
    };
  },
  computed: {
    //  今天是否是生日
    todayIsbirthday () {
      let today = moment(new Date()).format('MM月DD日');
      if (this.item.birthday_month_day && today === this.item.birthday_month_day.month_day) {
        return true;
      } else {
        return false;
      }
    },
    count () {
      return store.state.count;
    }
  },
  methods: {
    increment () {
      store.commit('increment');
    },
    decrement () {
      store.commit('decrement');
    }
  },
  mounted () {
    let item = {
      birthday_name: '刘武胜',
      birthday_day: '597600000000',
      birthday_day_type: 1,
      birthday_sex: 1
    };
    //
    item.birthday_month_day = dayToLunar(new Date(+item.birthday_day));
    this.item = item;
  }
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
