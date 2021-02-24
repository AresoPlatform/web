<template>
  <div>
    <div class="footerCon">
    
      <div class="footerBlock">
        <p class="blockTitle">常用链接</p>
        <div class="Blocklist"> 
           <p class="footerTitle">
            <a href="https://explorer.asch.io/" target="_blank">阿希浏览器</a>
          </p>
           <p class="footerTitle">
            <a href="https://tronscan.io/#/" target="_blank">波场浏览器</a>
          </p>
          <p class="footerTitle">
            <a href="https://wallet.asch.io/" target="_blank">阿希钱包</a>
          </p>
         <p class="footerTitle">
            <a href="https://tronlink.org/" target="_blank">波场钱包</a>
          </p>
         
         
         
        </div>
      </div>
        <div class="footerBlock">
        <p class="blockTitle">阿希交易所</p>
        <div class="Blocklist">  
          <p class="footerTitle">
            <a href="https://www.mxc.ai" target="_blank"
              >抹茶交易所</a
            >
          </p>
          <p class="footerTitle">
            <a href="https://www.jbex.com" target="_blank"
              >聚币交易所</a
            >
          </p>
        
        </div>
      </div>
      <div class="footerBlock">
        <p class="blockTitle">波场交易所</p>
        <div class="Blocklist">  
            <p class="footerTitle">
            <a href="https://justswap.io/" target="_blank"
              >波场去中心化交易所</a
            >
          </p>
          <p class="footerTitle">
            <a href="https://poloniex.org/zh/" target="_blank"
              >波场中心化交易所</a
            >
          </p>
        
          <p class="footerTitle">
            <a href="https://www.huobi.be/zh-cn/" target="_blank"
              >火币交易所</a
            >
          </p>
          <p class="footerTitle">
            <a href="https://www.binancezh.pro/cn" target="_blank"
              >币安交易所</a
            >
          </p>
        
        </div>
      </div>
     
      <div class="footerBlock">
        <p class="blockTitle">
          <a class="downloadCon" :href="HrefLink">安卓应用下载 </a>
        </p>
        <div class="Blocklist">
          <div id="qrcode" class="erweima" ref="qrcode"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      HrefLink: "",
      downLink: ""
    };
  },
  props: {
    link: String
  },
  mounted() {
    this.HrefLink = this.link;
    // console.log(this.HrefLink);
    let qrcode = new QRCode("qrcode", {
      width: 85, // 二维码宽度，单位像素
      height: 85, // 二维码高度，单位像素
      text: this.HrefLink // 生成二维码的链接
    });
  }
};
</script>
<style lang="scss">
.footerCon {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  .footerBlock {
    width: 25%;
    float: left;
    text-align: left;
    padding: 30px 0;
  }
  .blockTitle {
    padding: 15px 0;
    font-weight: bold;
  }
  .downloadCon {
    color: #fff;
    cursor: pointer;
  }
  .downloadCon:hover {
    color: #76dd78;
  }
  .erweima {
    width: 90px;
    height: 90px;
    padding: 2px;
    border: 1px solid #ccc;
  }
}
.footerTitle {
  font-size: 16px;
  padding: 10px 0;
}
.footerTitle a {
  color: #ccc;
}
.footerTitle a:hover {
  color: #76dd78;
}
@media (max-width: 1260px) and (min-width: 850px) {
  .footerCon {
    width: 100%;
  }
}
@media (max-width: 850px) and (min-width: 679px) {
  .footerCon {
    display: none;
  }
}
@media (max-width: 678px) and (min-width: 200px) {
  .el-footer {
    display: none !important;
  }
}
</style>
