<template>
  <div class="">
    <el-container>
      <el-header>
        <header-li
          :btns="'1'"
          v-if="linkSta == '2'"
          :link="HrefLink"
        ></header-li>
      </el-header>
      <el-main>
        <div class="commContent">
          <div class="commHeader">
            <input
              type="text"
              class="searchInput"
              v-model="searchAdd"
              @keyup.enter="searcgCli"
              :placeholder="placeText"
            />

            <div>
              <button class="commonBtn" @click="resetCli">重置</button>
              <button class="commonBtn" @click="searcgCli">
                搜索
              </button>
            </div>
          </div>
          <div class="tableConten">
            <el-tabs type="border-card" @tab-click="tableCli">
              <el-tab-pane label="置换清单（AP）" v-model="paneVal">
                <el-table
                  :data="CommonData"
                  stripe
                  ref="CommonData"
                  v-loading="ComLoading"
                  element-loading-text="拼命加载中"
                  :cell-style="columnStyle"
                  :header-cell-style="tabHeader"
                >
                  <el-table-column
                    prop="index"
                    width="60"
                    label="序号"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="aschAddress"
                    width="180"
                    show-overflow-tooltip
                    label="ASCH地址"
                    align="center"
                  >
                    <template slot-scope="scope">
                      <el-tooltip
                        class="item"
                        effect="dark"
                        :content="scope.row.aschAddress"
                        placement="top"
                      >
                        <a
                          @click="suocangClick('t1', scope.row.aschAddress)"
                          style="cursor:pointer"
                          >{{ scope.row.aschAdd }}</a
                        >
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="transactionId"
                    label="锁仓ID"
                    width="180"
                    show-overflow-tooltip
                    align="center"
                  >
                    <template slot-scope="scope">
                      <el-tooltip
                        class="item"
                        effect="dark"
                        :content="scope.row.transactionId"
                        placement="top"
                      >
                        <a
                          @click="suocangClick('t2', scope.row.transactionId)"
                          style="cursor:pointer"
                          >{{ scope.row.tranId }}</a
                        >
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="num"
                    show-overflow-tooltip
                    width="120"
                    label="锁仓金额"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="tronAddress"
                    width="180"
                    show-overflow-tooltip
                    label="TRON地址"
                    align="center"
                  >
                    <template slot-scope="scope">
                      <el-tooltip
                        class="item"
                        effect="dark"
                        :content="scope.row.tronAddress"
                        placement="top"
                      >
                        <a
                          @click="suocangClick('t3', scope.row.tronAddress)"
                          style="cursor:pointer"
                          >{{ scope.row.tronAdd }}</a
                        >
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="txasTransactionId"
                    label="TRON交易哈希"
                    width="180"
                    show-overflow-tooltip
                    align="center"
                  >
                    <template slot-scope="scope">
                      <el-tooltip
                        class="item"
                        effect="dark"
                        :content="scope.row.txasTransactionId"
                        placement="top"
                      >
                        <a
                          @click="
                            suocangClick('t4', scope.row.txasTransactionId)
                          "
                          style="cursor:pointer"
                          >{{ scope.row.txasId }}</a
                        >
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="txasNum"
                    width="120"
                    label="置换数量"
                    show-overflow-tooltip
                    align="center"
                    :render-header="customFieldColumn"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="createTime"
                    width="180"
                    label="交易时间"
                    align="center"
                  >
                  </el-table-column>
                </el-table>
                <div class="pagetion">
                  <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-size="10"
                    layout="total, prev, pager, next"
                    :total="total"
                  >
                  </el-pagination>
                </div>
              </el-tab-pane>
              <el-tab-pane label="流动性清单（LP）" v-model="paneVal">
                <el-table
                  :data="liudongData"
                  stripe
                  v-loading="LiuComLoading"
                  element-loading-text="拼命加载中"
                  :cell-style="columnStyle"
                  :header-cell-style="tabHeader"
                >
                  <el-table-column
                    prop="index"
                    width="60"
                    label="序号"
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="tronAdd"
                    width="180"
                    label="TRON地址"
                    show-overflow-tooltip
                    align="center"
                  >
                   <template slot-scope="scope">
                      <el-tooltip
                        class="item"
                        effect="dark"
                        :content="scope.row.tronAddress"
                        placement="top"
                      >
                        <a
                          @click="suocangClick('t3', scope.row.tronAddress)"
                          style="cursor:pointer"
                          >{{ scope.row.tronAdd }}</a
                        >
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="HashId"
                    width="180"
                    label="TRON交易哈希"
                    align="center"
                  >
                    <template slot-scope="scope">
                      <el-tooltip
                        class="item"
                        effect="dark"
                        :content="scope.row.pledgeHash"
                        placement="top"
                      >
                        <a
                          @click="
                            suocangClick('t4', scope.row.pledgeHash)
                          "
                          style="cursor:pointer"
                          >{{ scope.row.HashId }}</a
                        >
                      </el-tooltip>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="pledgeAmount"
                    label="质押数量"
                    width="160"
                    show-overflow-tooltip
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="操作类型"
                    show-overflow-tooltip
                    align="center"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="pledgeTime"
                    label="交易时间"
                    align="center"
                  >
                  </el-table-column>
                </el-table>
                <div class="pagetion">
                  <el-pagination
                    @current-change="handleCurrentChange2"
                    :current-page="currentPage2"
                    :page-size="10"
                    layout="total, prev, pager, next"
                    :total="total2"
                  >
                  </el-pagination>
                </div>
              </el-tab-pane>
            </el-tabs>
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
import {
  zhihuanList,
  getLockRate,
  versionInfo,
  liudongList
} from "@/utils/reApi.js";
export default {
  data() {
    return {
      currentPage4: 1,
      currentPage2: 1,
      total: 0,
      total2: 0,
      CommonData: [],
      liudongData: [],
      searchAdd: null,
      paneVal: "zhi",
      xasLockQuarter: null,
      xasLockHalfYear: null,
      xasLockOneYear: null,
      ComLoading: false,
      LiuComLoading: false,
      HrefLink: "",
      linkSta: "1",
      placeText:'请输入XAS地址、TRON地址查询'
    };
  },
  components: {
    HeaderLi,
    FooterLi
  },
  mounted() {
    let datas = {
      offset: 1
    };

    this.getzhihuanlist(datas);

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
    tabHeader() {
      return "background:#3e4359!important;color:#fff";
    },
    columnStyle({ row, column, rowIndex, columnIndex }) {
      if (
        columnIndex == 1 ||
        columnIndex == 2 ||
        columnIndex == 4 ||
        columnIndex == 5
      ) {
        return "color:#76dd78;";
      }
    },
    structureId(array, num) {
      let str = "";
      let str1 = array.substring(0, num);
      let str2 = array.substring(array.length - 5, array.length);
      return (str = str1 + "..." + str2);
    },
    customFieldColumn(h, { column, $index }) {
      return h("span", {}, [
        h("span", {}, ""),
        h(
          "el-popover",
          {
            props: {
              placement: "top",
              width: "150",
              trigger: "hover",
              content:
                "XAS锁仓AP凭证规则：由锁仓时间决定，3个月 1:" +
                this.xasLockQuarter +
                " ，6个月 1:" +
                this.xasLockHalfYear +
                " ，1年 1:" +
                this.xasLockOneYear +
                "。"
            }
          },
          [
            h(
              "span",
              {
                slot: "reference",
                class: "font-normal",
                style: "cursor:pointer"
              },
              [h("span", {}, "置换数量"), h("i", { class: "el-icon-question" })]
            )
          ]
        )
      ]);
    },
    //获取置换倍率
    getbeilv() {
      getLockRate().then(data => {
        if (data.code == 1) {
          this.xasLockQuarter = data.data.xasLockQuarter;
          this.xasLockHalfYear = data.data.xasLockHalfYear;
          this.xasLockOneYear = data.data.xasLockOneYear;
          // this.xasLockTwoYear = data.data.xasLockTwoYear;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    getzhihuanlist(datas) {
      this.ComLoading = true;
      zhihuanList(datas).then(data => {
        this.CommonData = [];
        if (data.code == 1) {
          this.ComLoading = false;
          let dataNum = data.data.data;
          this.total = data.data.recordsTotal;
          let indexNum;
            indexNum=(this.currentPage4 - 1 )* 10;
          this.getbeilv();
          // console.log(dataNum)
          dataNum.forEach((item, ind) => {
            this.CommonData.push({
              index: this.currentPage4==1?++ind : indexNum + ind +1,
              txasId: this.structureId(item.txasTransactionId, 8),
              txasTransactionId: item.txasTransactionId, //交易哈希
              tranId: this.structureId(item.transactionId, 8),
              transactionId: item.transactionId, //锁仓ID
              aschAddress: item.aschAddress, //asch地址
              aschAdd: this.structureId(item.aschAddress, 6),
              num: item.num + " XAS", //锁仓XAS
              tronAdd: this.structureId(item.tronAddress, 6),
              tronAddress: item.tronAddress, //tron地址
              txasNum: item.txasNum + " AP", //置换数量
              createTime: item.createTime
            });
          });
          // console.log(this.CommonData);
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    tableCli(val) {
      // console.log(val.index)
       this.searchAdd=null;
      if (val.index == 1 || val.index == "1") {
       
        this.paneVal = "liu";
        this.placeText='请输入TRON地址查询'
        let datas = {
          offset: 1
        };
        this.liudongList(datas);
      } else {
        this.paneVal = "zhi";
         this.placeText='请输入XAS地址、TRON地址查询'
        let datas2 = {
          offset: 1
        };
        this.getzhihuanlist(datas2);
      }
    },
    liudongList(datas) {
      this.LiuComLoading = true;
      liudongList(datas).then(data => {
        this.liudongData = [];
        // console.log(data)
        if (data.code == 1) {
          this.LiuComLoading = false;
          let dataNum2 = data.data.data;
          this.total2 = data.data.recordsTotal;
          let indexNum;
            indexNum=(this.currentPage2 - 1 )* 10;
          dataNum2.forEach((item, ind) => {
            this.liudongData.push({
              index: this.currentPage2==1?++ind : indexNum + ind +1,
              HashId: this.structureId(item.pledgeHash, 8),
              pledgeHash: item.pledgeHash, //交易哈希
              id: item.id,
              type: item.type == 1 ? "质押挖矿" : "撤销质押", //1 质押挖矿    2是撤销质押   操作类型
              pledgeAmount:item.type==1?'+'+ item.pledgeAmount:'-'+ item.pledgeAmount, //质押数量
              tronAdd: this.structureId(item.tronAddress, 6),
              tronAddress: item.tronAddress, //tron地址
              pledgeTime: item.pledgeTime
            });
          });
          // console.log(this.CommonData);
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    searcgCli() {
      // console.log(this.searchAdd.substring(0, 1))
      let datas;
      if (this.paneVal == "zhi") {
        if (this.searchAdd.substring(0, 1) == "A") {
          datas = {
            offset: 1,
            aschAddress: this.searchAdd
          };
        } else {
          datas = {
            offset: 1,
            tronAddress: this.searchAdd
          };
        }

        this.getzhihuanlist(datas);
      } else {
        if (this.searchAdd.substring(0, 1) == "A") {
          this.$message.error("不能搜索XAS地址");
          this.searchAdd = null;
          return;
        } else {
          datas = {
            offset: 1,
            tronAddress: this.searchAdd
          };
        }

        this.liudongList(datas);
      }
    },
    resetCli() {
      this.searchAdd = null;
      this.currentPage4=1;
      this.currentPage2=1;
      let datas = {
        offset: 1
      };
      if (this.paneVal == "zhi") {
        this.getzhihuanlist(datas);
      } else {
        this.liudongList(datas);
      }
    },

    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage4 = val;
      let datas;
      if (this.searchAdd == "" || this.searchAdd == null) {
        datas = {
          offset: val
        };
      } else {
        if (this.searchAdd.substring(0, 1) == "A") {
          datas = {
            offset: val,
            aschAddress: this.searchAdd
          };
        } else {
          datas = {
            offset: val,
            tronAddress: this.searchAdd
          };
        }
      }

      this.getzhihuanlist(datas);
    },
    handleCurrentChange2(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage2 = val;
      let datas;
      if (this.searchAdd == "" || this.searchAdd == null) {
        datas = {
          offset: val
        };
      } else {
        datas = {
          offset: val,
          tronAddress: this.searchAdd
        };
      }

      this.liudongList(datas);
    },
    suocangClick(val, add) {
      switch (val) {
        case "t1":
          window.open(`https://explorer.asch.io/address/${add}`);
          break;
        case "t2":
          window.open(`https://explorer.asch.io/transaction/${add}`);
          break;
        case "t3":
          window.open(`https://tronscan.io/#/address/${add}`);
          break;
        case "t4":
          window.open(`https://tronscan.io/#/transaction/${add}`);
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.commContent {
  width: 1200px;
  min-height: 700px;
  margin: 0 auto;
  margin-top: 60px;
}

.searchInput {
  width: 650px;
  height: 66px;
  color: #acb6dc;
  padding: 0 10px;
  font-size: 16px;
  border: 1px solid #3e4359;
  border-radius: 33px;
  background-color: #2c3040;
  text-align: center;
}
.commonBtn {
  width: 170px;
  height: 48px;
  background-color: #2c3040;
  border-radius: 24px;
  border: solid 1px #3e4359;
  margin: 40px 20px;
  color: #ccc;
  font-size: 18px;
  cursor: pointer;
}
.pagetion {
  width: 100%;
  text-align: right;
  margin-top: 20px;
  padding-right: 15px;
}
.commonBtn:last-child {
  background: rgba(118, 221, 120, 0.05);
  border: solid 1px rgba(118, 221, 120, 0.8);
  color: #76dd78;
}

.commonBtn:last-child:hover {
  background-color: #76dd78;
  color: #fff;
  transition: all 0.5s ease;
}

.el-pagination__total,
.el-pagination__jump {
  color: #ccc !important;
}

.phoneFooter {
  width: 100%;
  height: 90px;
  margin: 0 auto;
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 99;
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

@media (max-width: 1260px) and (min-width: 678px) {
  .commContent {
    width: 100%;
  }
  .searchInput {
    width: 400px;
    height: 55px;
    font-size: 16px;
  }
  .commonBtn {
    width: 150px;
    height: 40px;
    font-size: 16px;
  }
  .tableConten {
    width: 98%;
    margin: 0 auto;
  }
}
@media (max-width: 850px) and (min-width: 680px) {
  .phoneFooter {
    display: block;
  }
}
@media (max-width: 678px) and (min-width: 200px) {
  .phoneFooter {
    display: block;
  }
  .commContent {
    width: 100%;
  }
  .searchInput {
    width: 350px;
    height: 50px;
    font-size: 14px;
  }
  .commonBtn {
    width: 140px;
    height: 36px;
    font-size: 14px;
  }
  .tableConten {
    width: 98%;
    margin: 0 auto;
    margin-bottom: 60px;
  }
}
</style>
