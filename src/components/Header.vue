<template>
  <div class="commonHe">
    <div class="headerLeft" @click="caidanCli('1')">
      <div class="combutton"></div>
    </div>
    <div class="headerRight">
      <ul class="pcItem">
        <li @click="caidanCli('1')" class="phoneLi">
          Areso
          <div :class="newsta == '1' ? 'navline' : ''"></div>
        </li>

         <li @click="caidanCli('2')">
          置换清单
          <div :class="newsta == '2' ? 'navline' : ''"></div>
        </li>
        
        <li @click="caidanCli('3')">
          合约地址
          <div :class="newsta == '3' ? 'navline' : ''"></div>
        </li>

        <li class="ziyuanxia">
          <span>资源下载<i class="el-icon-arrow-down el-icon--right"></i></span>
          <div class="ziyuancaidan">
            <ul class="caidanUL">
              <li class="caidanItem">
                <a href="./AresoWhitepaper.pdf" download>白皮书</a>
              </li>
              <li class="caidanItem"><a :href="hreLink">安卓应用</a></li>
              <li class="caidanItem"><a href="./3.12.0_0.zip">波场钱包谷歌扩展</a></li>
            </ul>
          </div>
        </li>

        <li @click="caidanCli('4')">
          帮助中心
          <div :class="newsta == '4' ? 'navline' : ''"></div>
        </li>

      </ul>
      <el-dropdown class="phoneItem" trigger="click">
        <el-button>
          更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="caidanCli('1')"
            >Areso</el-dropdown-item
          >
          <el-dropdown-item @click.native="caidanCli('2')"
            >置换清单</el-dropdown-item
          >
          
          <el-dropdown-item @click.native="caidanCli('3')"
            >合约地址</el-dropdown-item
          >

          <el-dropdown-item @click.native="caidanCli('4')"
            >帮助中心</el-dropdown-item
          >
          <el-dropdown-item
            ><a href="./AresoWhitepaper.pdf">白皮书下载</a>
          </el-dropdown-item>
          <el-dropdown-item
            ><a :href="hreLink">安卓应用下载</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import Actype from "@/store/actionType.js";

export default {
  data() {
    return {
      isActive: false,
      isActive2: false,
      loginText: "登录钱包",
      wakuangAdd: "",
      Apaddress: "",
      hreLink: "",
      staticHe:'false',
      newsta: sessionStorage.getItem("acStatic")
    };
  },
  props: {
    link: String
  },
  computed: {
    
  },
  mounted() {
    // console.log(this.link)
    this.hreLink = this.link;
    
  },
  methods: {
    caidanCli(val) {
      switch (val) {
        case "1":
          this.$store.dispatch(Actype.acStatic, "1");
          this.$router.push("/");
          break;
        case "2":
          this.$store.dispatch(Actype.acStatic, "2");
          this.$router.push("/common");
          break;
        case "3":
          this.$store.dispatch(Actype.acStatic, "3");
          this.$router.push("/address");
          break;
        case "4":
          this.$store.dispatch(Actype.acStatic, "4");
          this.$router.push("/help");
          break;
          //  
        default:
          break;
      }
    },
     //解析浏览器地址
     GetQueryString(name) {
        let url = window.location.href;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
       
        let len = "?" + url.split("?")[1]; //获取url中"?"符后的字符串并正则匹配
        let value = len.substr(1).match(reg);
        var context = "";
        if (value != null) context = value[2];
        reg = null;
        value = null;

        return context == null || context == "" || context == "undefined" ?
            "" :
            context;
    }
  }
};
</script>
<style lang="scss">
.commonHe {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  color: #ccc;
}

.headerRight {
  width: 85%;
  ul > li {
    float: left;
    position: relative;
    width: 15%;
    margin-right: 30px;
    cursor: pointer;
    line-height: 90px;
    text-align: center;
    border: none;
  }

  .navline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #76dd78;
    transition: all 0.5s;
  }
}
.ziyuanxia {
  position: relative;
}
.ziyuanxia:hover {
  .ziyuancaidan {
    display: inline-block;
  }
}
.ziyuancaidan {
  width: 100%;
  background: #2c3040;
  color: #ccc;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 90px;
  z-index: 9;
  display: none;

  ul > li {
    width: 100%;
    height: 40px;
    float: none;
    line-height: 40px;
  }

  ul > li a {
    color: #ccc;
  }
  ul > li a:hover {
    color: #76dd78;
  }
}

.headerLeft {
  margin-top: 20px;
}
.combutton {
  width: 100px;
  height: 40px;
  background: url(../assets/web/ARESO_logo.png) no-repeat;
  background-size: 100%;
  margin-top: 10px;
  cursor: pointer;
}
.loginBtn {
  width: 120px;
  height: 40px;
  background: rgb(118, 221, 120, 0.2);
  border: solid 1px rgb(118, 221, 120, 0.2);
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  color: #76dd78;
  cursor: pointer;
  font-weight: bold;
}
.loginBtn:hover {
  background-color: #76dd78;
  color: #fff;
  transition: all 0.5s ease;
}
.phoneItem {
  display: none;
}
.el-dropdown {
  display: none !important;
}
.el-button {
  background-color: #2c3040 !important;
  border-radius: 24px !important;
  border: solid 1px #3e4359 !important;
  color: #ccc !important;
}
.el-dropdown-menu {
  background-color: #2c3040 !important;
  color: #ccc !important;
  border: 0 !important;
}
.el-dropdown-menu a {
  color: #606266;
}
.el-dropdown-menu a:hover {
  color: #fff;
}
.el-popper {
  margin-top: 0 !important;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #76dd78 !important;
  color: #fff !important;
  transition: all 0.5s ease;
}

@media (max-width: 1260px) and (min-width: 768px) {
  .ziyuancaidan ul > li a {
    font-size: 14px;
    word-wrap:break-word;
    
  }
  .commonHe {
    width: 100%;
  }
  .headerRight ul > li {
    margin-right: 20px;
    height: auto;
  }
  .phoneItem {
    display: none;
  }
  .el-dropdown {
    display: none !important;
  }
}
@media (max-width: 768px) and (min-width: 200px) {
  .commonHe {
    width: 100%;
    font-size: 16px;
    .headerRight {
      width: 40%;
    }
    .ziyuancaidan {
      display: none;
     
    }
    .headerRight ul > li {
      width: auto;
      margin-right: 0;
      text-align: right;
    }
  }
  .phoneLi {
    display: none;
  }
  .pcItem {
    display: none;
  }
  .phoneItem {
    display: inline-block;
  }
  .el-dropdown {
    display: inline-block !important;
  }
}
</style>
