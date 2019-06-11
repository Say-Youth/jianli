<template>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="page" v-for="(item,index) in htmlList" :key="index">
      <oneC v-if="item=='onePage'" ref="son"></oneC>
      <twoC v-if="item=='twoPage'" ref="son"></twoC>
      <threeC v-if="item=='threePage'" ref="son"></threeC>
      <fourC v-if="item=='fourPage'" ref="son"></fourC>
      <fiveC v-if="item=='fivePage'" ref="son"></fiveC>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <!-- <div ref="wrapper" class="list-wrapper">
    <ul class="list-content" ref="content">
      <li class="list-item" v-for="(item,index) in htmlList" :key="index">
        <oneC v-if="item=='onePage'" ref="son"></oneC>
        <twoC v-if="item=='twoPage'" ref="son"></twoC>
        <threeC v-if="item=='threePage'" ref="son"></threeC>
        <fourC v-if="item=='fourPage'" ref="son"></fourC>
        <fiveC v-if="item=='fivePage'" ref="son"></fiveC>
      </li>
    </ul>
  </div>-->
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import myMusic from "./music/music";
import oneC from "../views/one/oneCurtain";
import twoC from "../views/two/twoCurtain";
import threeC from "../views/three/threeCurtain";
import fourC from "../views/four/fourCurtain";
import fiveC from "../views/five/fiveCurtain";
export default {
  name: "HelloWorld",
  data() {
    return {
      htmlList: ["onePage", "twoPage", "threePage", "fourPage", "fivePage"], //判断显示那一个网页
      swiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        // spaceBetween: 30,//底部阴影
        mousewheel: true,
        height: 667,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        loop: true
      }
    };
  },
  mounted() {},
  methods: {},
  components: {
    swiper,
    swiperSlide,
    myMusic,
    oneC,
    twoC,
    threeC,
    fourC,
    fiveC
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
/* .swiper-item {
  height: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  /* display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center; 
} */
.page{
    height: 667px;
    background: url(../assets/time2.jpg) no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}
</style>
