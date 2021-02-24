<template>
  <div>
    <el-container>
      <el-header>
        <header-li v-if="linkSta == '2'" :link="HrefLink"></header-li>
      </el-header>
      <el-main>
        <div class="helpCon">
          <div class="helpItem">
            <h1>一、术语表</h1>
            <p>
              <span class="helpSpan">Areso协议 ：</span> 由
              Asch（阿希）社区发起，搭建在
              Tron（波场）链上的去中心化跨链智能合约协议集 。
            </p>
            <p>
              <span class="helpSpan">ASO是 Areso协议的通证代码 ：</span>
              它是一个集
              DeFi+NFT+Game一体的美妙生态，是由XAS锁仓凭证（AP）挖矿+提供TRX流动性凭证（LP）挖矿的双挖机制，aso通证可用于整个生态的流通
              。
            </p>

            <p>
              <span class="helpSpan">AP ：</span>
              在Areso协议里，通过锁仓阿希币（XAS），获取的用于挖ASO的凭证<span
                style="color:#ec3434"
                >（此凭证不可交易）</span
              >
              。
            </p>

            <p>
              <span class="helpSpan">LP ：</span>
              在Areso协议里，提供TRX和ASO交易对的流动性所产生的凭证，是用于挖ASO的凭证
              <span style="color:#ec3434">（此凭证不可交易）</span> 。
            </p>

            <p>
              <span class="helpSpan">AP挖矿 ：</span>
              获得AP凭证后，点击质押AP凭证，即刻开启挖矿，挖取ASO币 。
            </p>

            <p>
              <span class="helpSpan">LP挖矿 ：</span>
              获得LP凭证后，点击质押LP凭证，即刻开启挖矿，挖取ASO币 。
            </p>
          </div>
          <div class="helpItem">
            <h1>二、AP挖矿流程</h1>
            <p>
              <span class="helpSpan">第一步： </span>
              新注册希客的用户进入希客APP后， “Areso”
              页面会弹窗初始化设置交易密码并保存 。
            </p>

            <p>
              <span class="helpSpan">第二步：</span> 点击 “获取AP凭证” 按钮
              ，弹出“新建/导入ASCH账户”窗口，完成新建/导入ASCH账户
              <span style="color:#ec3434">（这里的阿希账户是新建的）</span>
              ，在弹出的“新建/导入TRON账户”窗口中进行锁仓XAS置换相应的AP凭证（锁仓置换成功后，自动激活新建的TRON账户）（需把阿希账户和波场账户的私钥保存好）。
            </p>

            <p>
              <span class="helpSpan">第三步：</span> 点击 “AP挖矿” 键
              ，质押所有的AP凭证进行AP挖矿，即可收取相应的 ASO 挖矿奖励 。
            </p>
            <p>
              <span class="helpSpan">第四步：</span
              >收矿，当aso到一定数量收取时，需要消耗一点TRX波场（或者消耗能量，能量是可以通过冻结波场TRX而免费获得，如嫌操作麻烦就可以直接消耗TRX通证）。
            </p>

            <h1>三、LP挖矿流程</h1>
            <p><span class="helpSpan">第一步：</span> 新用户同AP挖矿流程。</p>

            <p>
              <span class="helpSpan">第二步：</span> 点击 “获取LP凭证” 键
              ，提供TRON和ASO通证（需先把波场转入，根据其中一个通证的数量，自动实时匹配所需的另外一个通证数量），确定无误，输入交易密码，确认，就等于增加资金池流动性，并获得LP流动性凭证
              。
            </p>
            <p>
              <span class="helpSpan">第三步：</span> 点击 “LP挖矿” 键
              ，质押所有的LP凭证进行LP挖矿，即可收取相应的 LP 挖矿奖励 。
            </p>
            <p>
              <span class="helpSpan">第四步：</span
              >收矿，当aso到一定数量收取时，需要消耗一点TRX波场（或者消耗能量，能量是可以通过冻结波场TRX而免费获得，如嫌操作麻烦就可以直接消耗TRX通证）。
            </p>
          </div>

          <div class="helpItem">
            <h1>
              四、Areso List 添加流程<span style="color:#ec3434;font-size:16px"
                >（ 仅为在JustSwap交易所里交易的用户使用 ）</span
              >
            </h1>
            <p>
              <span class="helpSpan">第一步： </span>
              在Areso官网合约地址页面复制 ASO JustSwap List 链接地址（<span
                class="tiaozhuanSpan"
                @click="tiaozhuanCli"
                >点击跳转</span
              >）。
            </p>

            <p>
              <span class="helpSpan">第二步：</span>
              在JustSwap官网“兑换”界面，点击“选择代币”，在弹出的“选择代币”对话框中点击“切换”按钮，打开“选择列表”对话框，粘贴上一步复制的链接，
              点击“添加列表”按钮，添加成功选择ASO进行兑换 。
            </p>
          </div>

          <div class="helpItem">
            <h1>五、常用网址</h1>
            <p>
              <span>ASO官网：</span>
              <a href="https://areso.io" target="_blank">https://areso.io</a
              ><span>（官网里可下载“希客”安卓版APP）</span>
            </p>
            <p>
              <span>ASO销毁地址：</span>
              <span>T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb</span>
            </p>
            <p>
              <span>DAO基金地址：</span>
              <span>TSDFJUYpxEmvwiGXD6i1xbKyHHVwTBbYph</span>
            </p>
            <p>
              <span class="helpSpan">TRON区块浏览器：</span>
              <a href="https://tronscan.org/#" target="_blank"
                >https://tronscan.org/#
              </a>
              <span> (需国外访问)</span>
              <span style="padding:0 5px"></span>
              <a href="https://tronscan.io/#" target="_blank"
                >https://tronscan.io/#</a
              >
            </p>
            <p>
              <span class="helpSpan">TRON去中心化交易所：</span>
              <a href="https://justswap.io/#/home" target="_blank"
                >https://justswap.io/#/home</a
              >
            </p>
            <p>
              <span class="helpSpan">TRON中心化交易所：</span>
              <a href="https://poloniex.org/zh" target="_blank"
                >https://poloniex.org/zh</a
              >
            </p>
            <p>
              <span class="helpSpan">波宝钱包APP：</span>
              <a href="https://dapp.tronlink.org" target="_blank"
                >https://dapp.tronlink.org</a
              >
            </p>
            <p>
              <span class="helpSpan">阿希区块浏览器：</span>
              <a href="https://explorer.asch.io" target="_blank"
                >https://explorer.asch.io</a
              >
            </p>
            <p>
              <span class="helpSpan">阿希在线钱包：</span>
              <a href="https://wallet.asch.io" target="_blank"
                >https://wallet.asch.io</a
              >
            </p>
          </div>
          <div class="helpItem">
            <h1>六、帮助文档</h1>

            <p>
              <span class="commpdf" @click="helpCli(url1)">Areso一般指南 (点击打开)</span>
          
            </p>
            <p>
              <span class="commpdf" @click="helpCli(url2)">AP挖矿指南 (点击打开)</span>
              
            </p>
            <p>
              <span class="commpdf" @click="helpCli(url3)">LP挖矿指南 (点击打开)</span>
             
            </p>
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
import HeaderLi from "@/components/Header.vue";
import FooterLi from "@/components/Footer.vue";
import { versionInfo } from "@/utils/reApi.js";
import Actype from "@/store/actionType.js";
import pdf from "vue-pdf";
import commonPdf from "@/components/commonpdf.vue";
export default {
  data() {
    return {
      linkSta: "1",
      HrefLink: "",
      url1: "https://newappaz.oss-accelerate.aliyuncs.com/Aresohelp.pdf", // pdf文件地址
      url2: "https://newappaz.oss-accelerate.aliyuncs.com/APhelp.pdf",
      url3: "https://newappaz.oss-accelerate.aliyuncs.com/LPhelp.pdf"
    };
  },
  components: {
    HeaderLi,
    FooterLi,
    pdf,
    commonPdf
  },

  mounted() {
    let add = sessionStorage.getItem("add");
    if (add) {
      this.linkSta = "2";
      this.HrefLink = add;
    } else {
      this.versionInfo();
    }
  },
  methods: {
    versionInfo() {
      versionInfo().then(data => {
        // console.log(data);
        this.HrefLink = data.data.Android_Download_Url;
        if (this.HrefLink) {
          this.linkSta = "2";
          sessionStorage.setItem("add", this.HrefLink);
        } else {
          this.linkSta = "1";
        }
      });
    },

    helpCli(url) {
      let { href } = this.$router.resolve({
        name: "Commonpdf",
        query: { url: url }
      });
      window.open(href, "_blank");
    },
    tiaozhuanCli() {
      this.$store.dispatch(Actype.acStatic, "3");
      this.$router.push("/address");
    }
  }
};
</script>
<style lang="scss">
.helpCon {
  width: 1200px;
  min-height: 700px;
  color: #ccc;
  margin: 0 auto;
  margin-top: 60px;
  text-align: left;
  margin-bottom: 90px;
  .helpItem p {
    margin: 15px 10px;
  }
  .helpItem a {
    color: #ccc;
    text-decoration: underline;
  }
  .helpItem a:hover {
    color: #76dd78;
  }
  .helpItem h1 {
    margin: 40px 0 20px 0;
  }
  .helpSpan {
    font-size: 16px;
    font-weight: bold;
  }
  .tiaozhuanSpan {
    cursor: pointer;
    text-decoration: underline;
  }
}
.commpdf {
  cursor: pointer;
  text-decoration: underline;
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
@media (max-width: 1260px) {
  .helpCon {
    width: 100%;
    padding: 0 3%;
  }
}
@media (max-width: 850px) {
  .phoneFooter {
    display: block;
  }
}
</style>
