<template>
  <div>
    <el-container>
      <el-header>
        <header-li v-if="linkSta == '2'" :link="HrefLink"></header-li>
      </el-header>
      <el-main>
        <div class="addreCon">
          <div class="addLine"></div>
          <div class="addressText">
            <p class="addTitle">ASO发行合约地址</p>
            <p class="heyuetext" @click="addressCli('1', asoTokenAddress)">
              {{ asoTokenAddress }}
            </p>
          </div>
          <div class="addressText">
            <p class="addTitle">AP矿池合约地址</p>
            <p class="heyuetext" @click="addressCli('2', ASOkuangAdd)">
              {{ ASOkuangAdd }}
            </p>
          </div>
          <div class="addressText">
            <p class="addTitle">LP矿池合约地址</p>
            <p class="heyuetext" @click="addressCli('1', LPkuangAdd)">
              {{ LPkuangAdd }}
            </p>
          </div>
          <div class="addressText">
            <p class="addTitle">AP凭证发行合约地址</p>
            <p class="heyuetext" @click="addressCli('4', Apaddress)">
              {{ Apaddress }}
            </p>
          </div>
          <div class="addressText">
            <p class="addTitle">ASO-TRX交易对地址</p>
            <p class="heyuetext" @click="addressCli('1', jiaoyiAdd)">
              {{ jiaoyiAdd }}
            </p>
          </div>
           <div class="addressText">
            <p class="addTitle">DAO基金地址</p>
            <p class="heyuetext" @click="addressCli('3', daoAdd)">
              {{ daoAdd }}
            </p>
          </div>

          <div class="addressText">
            <p class="addTitle">ASO销毁地址</p>
            <p class="heyuetext" @click="addressCli('3', xiaohuiAdd)">
              {{ xiaohuiAdd }}
            </p>
          </div>
          <div class="addressText">
            <p class="addTitle">ASO JustSwap List 链接地址</p>
            <p class="heyuetext" @click="addressCli('copy', ListAdd)">
              {{ ListAdd }}
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
import { pledgeInfo, versionInfo } from "@/utils/reApi.js";
export default {
  data() {
    return {
      Apaddress: "TFqVEMycmwTf9QACipG4u1XibXLEqUUeqc",
      ASOkuangAdd: "TYgJ1AH9nQfkREq5U5JpULsyMSuacivmiF",
      LPkuangAdd: "TFTiwmK8czTtjepZoEUcRnp4mvcTos7xEF",
      jiaoyiAdd: "TQWp3CJSKL4GrjW8oXYTupfP4nQb5VRq4m",
      ListAdd: "https://areso.io/areso.json",
      daoAdd:'TSDFJUYpxEmvwiGXD6i1xbKyHHVwTBbYph',
      linkSta: "1",
      HrefLink: "",
      asoTokenAddress: "TGdBj3T3Njdo5iaXqD3uK74QbV8PmahbSK",
      xiaohuiAdd: "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"
    };
  },
  components: {
    HeaderLi,
    FooterLi
  },
  mounted() {
    // this.getPledge();
    let add = sessionStorage.getItem("add");
    if (add) {
      this.linkSta = "2";
      this.HrefLink = add;
    } else {
      this.versionInfo();
    }
  },
  methods: {
    //获取合约地址
    getPledge() {
      pledgeInfo().then(data => {
        // console.log(data);
        if (data.code == 1) {
        } else {
          this.$message.error(data.msg);
        }
      });
    },
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
    addressCli(str, val) {
      switch (str) {
        case "1":
          window.open(`https://tronscan.io/#/contract/${val}`);
          break;
        case "2":
          window.open(`https://tronscan.io/#/contract/${val}/code`);
          break;
        case "3":
          window.open(`https://tronscan.io/#/address/${val}`);
          break;
        case "4":
          window.open(`https://tronscan.io/#/contract/${val}/code`);
          break;
        case "copy":
          document.execCommand("Copy"); // 执行浏览器复制命令
          this.$message({
            message: "复制成功",
            type: "success"
          });
        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss">
.addreCon {
  width: 50%;
  min-height: 730px;
  color: #ccc;
  margin: 0 auto;
  margin-top: 60px;
  text-align: left;
}
.heyuetext {
  color: #76dd78;
  cursor: pointer;
  text-decoration: underline;
}
.addressText {
  margin: 30px;
}
.addTitle {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.addLine {
  width: 100%;
  height: 2px;
  margin: 0 auto;
  background: #2c3040;
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
@media (max-width: 850px) {
  .phoneFooter {
    display: block;
  }
  .addreCon {
    width: 100%;
  }
}
</style>
