<template>
  <div>
    <el-container>
      <el-header>
        <header-li
          :btns="'2'"
          v-if="linkSta == '2'"
          :link="HrefLink"
        ></header-li>
      </el-header>
      <el-main>
        <div class="indexHeader">
          <div class="HeaderCon">
            <p id="cnzz_box"></p> 
            <span class="conspan">什么是Areso？是如何获取ASO激励的？</span>
            <a class="conBtn" href="./AresoWhitepaper.pdf" target="_blank"
              >Areso 白皮书</a
            >
            <div class="headerP">
              <p>
                - Areso协议是由 Asch（阿希）社区发起，搭建在
                Tron（波场）链上的去中心化跨链智能合约协议集；
              </p>
              <p>
                -
                Areso通证代码（ASO），是由阿希币（XAS）锁仓凭证（AP）挖矿与提供流动性凭证（LP）挖矿产出（双挖机制）的通证，ASO通证可用于整个生态的流通；
              </p>
              <p>
                -
                安全透明，公开挖矿合约代码、置换清单，所有链上资产、置换详情可查询。
              </p>
            </div>
          </div>
        </div>
        <div class="mainContent">
          <div class="contenFir">
            <div class="Firleft">
              <div class="leftImg"></div>
            </div>
            <div class="Firight">
              <div class="clock"></div>
            </div>
            <div class="yunxBtn">{{ timeText }}</div>
          </div>
          <div class="contenTwo">
            <div class="TwoUl">
              <div class="liItem">
                <span>总量（ASO）</span>
                <p class="itemNum">{{ zongNum }}</p>
              </div>
              <div class="liItem">
                <span>开始产矿区块</span>
                <p class="itemNum">{{ startRewardBlock }}</p>
              </div>
              <div class="liItem">
                <span>已产出通证（ASO）</span>
                <p class="itemNum">{{ waNumber }}</p>
              </div>
            </div>
            <div class="TwoUl">
              <div class="liItem">
                <span>总质押（AP）</span>
                <p class="itemNum">{{ zhiyaNum }}</p>
              </div>
              <div class="liItem">
                <span>AP矿池每区块产量</span>
                <p class="itemNum">{{ qukuaiNum }}</p>
              </div>
              <div class="liItem">
                <span>AP矿池占比</span>
                <p class="itemNum">{{ apProportion }}</p>
              </div>
            </div>
            <div class="TwoUl">
              <div class="liItem">
                <span>总质押（LP）</span>
                <p class="itemNum">{{ zhiyaLP }}</p>
              </div>
              <div class="liItem">
                <span>LP矿池每区块产量</span>
                <p class="itemNum">{{ qukuaiNumLP }}</p>
              </div>
              <div class="liItem">
                <span>LP矿池占比</span>
                <p class="itemNum">{{ lpProportion }}</p>
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer>
        <footer-li v-if="linkSta == '2'" :link="HrefLink"></footer-li>
      </el-footer>
    </el-container>
    <div class="phoneFooter">
      <a class="footerBtnDown" :href="HrefLink">
        安卓应用下载
      </a>
    </div>
  </div>
</template>
<script>
// import Chart from "@/utils/Chart.min.js";
import Actype from "@/store/actionType.js";
import "@/utils/flipclock.js";
import "@/utils/jquery_1.8.3.min.js";
import "@/common/flock.css";
import HeaderLi from "@/components/Header.vue";
import FooterLi from "@/components/Footer.vue";
import QRCode from "qrcodejs2";

// import * as animationData from "../assets/web/Areso_bg.json";
import {
  getRation,
  pledgeInfo,
  getDefiInfo,
  // serverTime,
  versionInfo,
  ReductionTime
} from "@/utils/reApi.js";

export default {
  data() {
    return {
      
      isActive: false,
      timeText: "距离下次减产时间",
      address: "TDwwpfGMVPEuXVd2XqWrtgwVSj2pPMYoCe",
      zongNum: "？",
      waNumber: "？",
      waPeople: "？",
      startRewardBlock: "？",
      qukuaiNum: "？",
      zhiyaNum: "？",
      keshouNum: "？",
      zhiyaLP: "？",
      lpProportion: "0 %",
      apProportion: "0 %",
      qukuaiNumLP: "？",
      severTime: null,
      genesisTime: null,
      timer: null,
      timer2: null,
      HrefLink: "",
      linkSta: "1",
      screenWidth: null
    };
  },
  components: {
    HeaderLi,
    FooterLi
  },
  watch: {
    qukuaiNum: {
      handler(newVal, oldVal) {
        // console.log(newVal,oldVal)
        if (newVal) {
          // console.log('jinru')
          this.ReductionTime();
        }
      },
      deep: true,
      immediate: false
    }
  },

  created() {


    let add = sessionStorage.getItem("add");
    if (add) {
      this.linkSta = "2";
      this.HrefLink = add;
    } else {
      this.versionInfo();
    }

    this.$store.dispatch(Actype.acStatic, "1");

   
  },
  mounted() {
     
    var clock;
    var diff = new Date();
    // this.genesisTime=23;
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter"
    });

    this.getIndexData();

    this.timer = setInterval(() => {
      this.getIndexData();
    }, 1000 * 15);

    this.ReductionTime();
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    versionInfo() {
      versionInfo().then(data => {
        this.HrefLink = data.data.Android_Download_Url;
        if (this.HrefLink) {
          this.linkSta = "2";
          sessionStorage.setItem("add", this.HrefLink);
        } else {
          this.linkSta = "1";
        }
      });
    },
    handleAnimation: function(anim) {
      this.anim = anim;
      this.anim.play();
      // console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
    ReductionTime() {
      ReductionTime().then(data => {
        // console.log(data.data.time)
        if (data.code == 1) {
          this.genesisTime = data.data.time;
          if (data.data.timeType == 4) {
            if (this.genesisTime > 0) {
              var clock;
              clock = $(".clock").FlipClock(this.genesisTime, {
                clockFace: "DailyCounter",
                countdown: true
              });
            }
          } else {
            if (this.genesisTime > 0) {
              var clock;
              clock = $(".clock").FlipClock(this.genesisTime, {
                clockFace: "DailyCounter",
                countdown: true
              });
            } else {
              // console.log('jinru')
              this.ReductionTime();
            }
          }
          this.timeText = data.data.des;
        } else {
          this.$message.error(data.msg);
          if (this.timer2) {
            clearInterval(this.timer2);
          }
        }
      });
    },
    getIndexData() {
      getDefiInfo().then(data => {
        if (data.code == 1) {
          let Newnum =
            data.data.getTotalPendingAso + data.data.lpTotalPendingAso;
          let num1 = this.toFixedDigit(Newnum, 2);
          this.waNumber = this.thousandSeparator(num1);

          let num2 = data.data.totalSupply;
          this.zongNum = this.thousandSeparator(num2);

          let num3 = this.toFixedDigit(data.data.getRewardsPerBlock, 2);
          this.qukuaiNum = this.thousandSeparator(num3);

          let num4 = data.data.startRewardBlock;
          this.startRewardBlock = this.thousandSeparator(num4);

          let num5 =data.data.totalPledge;
          this.zhiyaNum = this.thousandSeparator(num5);

          let num6 = data.data.totalLocked;
          this.keshouNum = this.thousandSeparator(num6);

          let num7 = this.toFixedDigit(data.data.lpRewardsPerBlock, 2); //lp区块产量
          this.qukuaiNumLP = this.thousandSeparator(num7);

          let num8 = parseInt(data.data.lpTotalPledge) ;

          this.zhiyaLP = this.thousandSeparator(num8);

          this.apProportion = data.data.apProportion;
          this.lpProportion = data.data.lpProportion;
        } else {
          this.$message.error(data.msg);
          if (this.timer) {
            clearInterval(this.timer);
          }
        }
      });
    },
    toFixedDigit(num, n) {
      //保留n位
      if (typeof num != "number") {
        return false;
      }

      num = num.toString();
      var result = "";
      var zeroResult = function(n) {
        var zero = "";
        for (var i = 0; i < n; i++) {
          zero += "0";
        }
        return zero;
      };
      if (num % 1 == 0) {
        //整数
        result = num + "." + zeroResult(n);
      } else {
        //小数
        var num1 = num.split(".");
        if (num1[1].length < n) {
          result = num1[0] + "." + num1[1] + zeroResult(n - num1[1].length);
        } else {
          result = num1[0] + "." + num1[1].substring(0, n);
        }
      }
      return result;
    },
    thousandSeparator(num) {
      return (
        num &&
        (num.toString().indexOf(".") != -1
          ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2) {
              return $2 + ",";
            })
          : num.toString().replace(/(\d)(?=(\d{3})+\b)/g, function($1, $2) {
              return $2 + ",";
            }))
      );
    }
    
  }
};
</script>

<style lang="scss">



* {
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
}
.el-dialog,
.el-loading-mask {
  background: rgba(0, 0, 0, 0.7) !important;
}

.el-dialog__title,
.el-dialog__body,
.el-dialog__headerbtn .el-dialog__close {
  color: #fff !important;
}
.el-pagination .el-pager li.active,
.el-loading-spinner .el-loading-text,
.el-pagination .el-pager li:hover,
.el-pagination .el-pager li:not(.disabled):hover {
  color: #76dd78 !important;
}

.el-loading-spinner .path {
  stroke: #76dd78 !important;
}
.el-table {
  color: #ccc !important;
  background: none !important;
}
.el-table thead {
  color: #fff !important;
}
.el-table__header-wrapper {
  background-color: #3e4359 !important;
}
.el-table th,
.el-table tr {
  background: #2a2e3d !important;
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #272b38 !important;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid transparent !important;
}
.el-table::before {
  background: none !important;
}

.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #3e4359 !important;
  cursor: pointer;
}
.el-tabs--border-card {
  background: #2a2e3d !important;
  border: 0 !important;
  border-radius: 12px;
}
.el-tabs--border-card > .el-tabs__header {
  background: #2a2e3d !important;
  border: 0 !important;
  border-radius: 12px;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  background: #3e4359 !important;
  border: 0 !important;
  color: #76dd78 !important;
}
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #76dd78 !important;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item + .el-tabs__item,
.el-tabs--border-card > .el-tabs__header .el-tabs__item:first-child {
  margin: 0 !important;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item:first-child {
  border-radius: 12px 0 0 0;
}
.el-tabs--border-card > .el-tabs__content {
  padding: 0 0 15px 0 !important;
}
.indexBtn {
  width: 120px;
  height: 40px;
  background-color: #2c3040;
  border-radius: 24px;
  border: solid 1px #3e4359;
  color: #ccc;
  font-size: 18px;
  cursor: pointer;
  margin-right: 10px;
}
.indexBtn:last-child {
  background: rgba(118, 221, 120, 0.05);
  border: solid 1px rgba(118, 221, 120, 0.8);
  color: #76dd78;
}

.indexBtn:last-child:hover {
  background-color: #76dd78;
  color: #fff;
  transition: all 0.5s ease;
}
.indexHeader {
  width: 100%;
  height: 500px;
  background: url("../assets/web/index_bg.jpg") no-repeat center;
  margin-bottom: 40px;
  text-align: left;
  position: relative;
  .HeaderCon {
    width: 1200px;
    // height: 230px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 50px;
    color: #ccc;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    .conspan {
      font-size: 30px;
      margin-bottom: 20px;
      font-weight: bold;
      display: inline-block;
    }
    .conBtn {
      width: 140px;
      height: 35px;
      text-align: center;
      line-height: 35px;
      cursor: pointer;
      display: inline-block;
      background-color: rgba(34, 45, 34, 0.5);
      border-radius: 18px;
      border: solid 1px #76dd78;
      color: #76dd78;
      letter-spacing: 1px;
      font-style: italic;
      margin-left: 20px;
    }
    p {
      margin: 10px 0;
    }
  }
}
.mainContent {
  width: 1200px;
  margin: 0 auto;
  .contenFir {
    height: 200px;
    margin-bottom: 20px;
    background-color: #2c3040;
    border-radius: 12px;
    position: relative;
    .Firleft {
      width: 430px;
      height: 200px;
      position: absolute;
      left: 0;
      top: 0;
    }
    .leftImg {
      height: 200px;
      background: url(../assets/web/img-1.png) no-repeat;
      background-size: 100%;
      border-radius: 12px 0 0px 12px;
    }
    .Firight {
      position: absolute;
      right: 50px;
      top: 0;
      height: 100%;
      padding-top: 50px;
    }
    .yunxBtn {
      padding: 0 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 30px 30px 0 0;
      background-color: #353a4d;
      color: #ccc;
      font-size: 14px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
    }
  }
  .contenTwo {
    .TwoUl {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    .liItem {
      width: calc(33.3% - 14px);
      height: 130px;
      margin-top: 20px;
      background-color: #2c3040;
      border-radius: 12px;
      color: #ccc;
      margin-right: 21px;
    }
    .liItem:last-child {
      width: calc(33.4% - 14px);
      margin-right: 0;
    }
    .liItem span {
      display: block;
      height: 50px;
      line-height: 50px;
    }
    .itemNum {
      height: 80px;
      line-height: 80px;
      font-family: Impact, Arial, Helvetica, sans-serif;
      font-size: 30px;
      color: #76dd78;
    }
  }
}
.phoneFooter {
  width: 100%;
  height: 90px;
  margin: 0 auto;
  text-align: center;
  position: fixed;
  bottom: 0px;
  z-index: 99;
  left: 0;
  display: none;
  background: #2c3040;
}
.footerBtnDown {
  width: 90%;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 12px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  background: rgba(118, 221, 120, 0.05);
  border: solid 1px rgba(118, 221, 120, 0.8);
  color: #76dd78;
}
.footerBtnDown:hover {
  background-color: #76dd78;
  color: #fff;
  transition: all 0.5s ease;
}

@media (max-width: 1260px) and (min-width: 850px) {
  .indexHeader {
    .ball,.ball2,.ball3,.ball4{
      display: none;
    }
    .HeaderCon {
      width: 100%;
      height: auto;
      padding: 30px 20px;
      .conspan {
        font-size: 20px;
      }
    }
  }
  .mainContent {
    width: 100%;
    margin-bottom: 60px;
    .Firleft {
      display: none;
    }
    .Firight {
      width: 75%;
    }
  }
}
@media (max-width: 850px) and (min-width: 680px) {
  .phoneFooter {
    display: block;
  }
  .indexHeader {
    background: url("../assets/web/mobile_bg.jpg") no-repeat center;
    background-size: 100%;
    .ball,.ball2,.ball3,.ball4{
      display: none;
    }
    .HeaderCon {
      width: 100%;
      height: auto;
      padding: 30px 20px;
      .conspan {
        font-size: 20px;
      }
    }
  }
  .mainContent {
    width: 100%;
    margin-bottom: 60px;
    .Firleft {
      display: none;
    }
    .Firight {
      width: 90%;
      right: 0;
    }
  }
}
@media (max-width: 678px) and (min-width: 200px) {
  .phoneFooter {
    display: block;
  }
  .indexHeader {
    height: 330px;
    background: url("../assets/web/mobile_bg.jpg") no-repeat center;
    background-size: 100%;
     .ball,.ball2,.ball3,.ball4{
      display: none;
    }
    .HeaderCon {
      width: 100%;
      height: auto;
      text-align: center;
      padding: 40px 20px;
      .conspan {
        font-size: 26px;
        color: #fff;
      }
      .headerP {
        display: none;
      }
      .conBtn {
        width: 150px;
        height: 45px;
        line-height: 45px;
        border-radius: 25px;
        margin-left: 0;
      }
    }
  }
  .mainContent {
    width: 100%;
    margin-bottom: 60px;
    .Firleft {
      display: none;
    }
    .contenTwo {
      width: 98%;
      margin: 0 auto;
      .TwoUl {
        display: block;
      }
      .liItem,
      .liItem:last-child {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 15px;
      }
    }

    .contenFir {
      display: none;
    }
  }
}
.el-header {
  background-color: #2c3040;
  color: #fff;
  height: 90px !important;
  line-height: 90px;
}
.el-footer {
  background-color: #2c3040;
  color: #fff;
  height: auto !important;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #232733;
  color: #333;
  text-align: center;
  padding: 0 0 60px 0 !important;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
