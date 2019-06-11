<template>
  <div>
    <div class="top">
      <div class="topIcon" :class="style"></div>
    </div>
    <div class="mainbody animated fadeIn">
      <div class="TH animated fadeInLeftBig">
        <span>{{TH}}</span>
        <img class="animated infinite heartBeat" src="./X.png" alt="X">
        <!-- <div class="animated jello">X</div> -->
      </div>
      <div class="MH">
        <div class="animated fadeInUpBig">{{MH}}</div>
        <img class="animated fadeInDownBig" src="./MH.png" alt>
      </div>
      <div class="BH animated rotateInUpRight">
        <img class="animated infinite heartBeat" src="./X.png" alt="X">
        <span>{{BH}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TH: "求职目标:前端工程师",
      MH: "求职简历",
      BH: "这是我的简历 通过这个你会更加了解我",
      style: "animated lightSpeedIn",
    };
  },
  created() {
    //属性生成  DOM未生成 $el不存在
    console.log("created data生成");
  },
  mounted() {
    //模板编译/挂在之后
    console.log("mounted挂载后");
    // this.show=!this.show;
    // let animated = "";
    // animated = this.style
    // this.style="";
    // this.style=animated;
  },
  updated() {
    //组件更新后
    console.log("pudated组件更新后");
    // this.show=!this.show;
  },
  beforeDestroy(){
      console.log("beforeDestroy销毁前")
  },
  destroyed(){
      console.log("destroyed销毁后")
  },
  methods:{
  }
};
</script>

<style scoped>
</style>