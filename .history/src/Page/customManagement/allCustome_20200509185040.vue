<template>
  <div>
    <div class="tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- ------------客户列表-------------- -->
        <el-tab-pane label="客户列表" name="first">
          <div class="tab-head">信息列表</div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="序号" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column label="公司名称" width="120" prop="name" ></el-table-column>
            <el-table-column prop="type" label="客户类型" show-overflow-tooltip></el-table-column>
            <el-table-column prop="contact" label="联系人" show-overflow-tooltip></el-table-column>
            <el-table-column prop="lastUpdate" label="最后更新" show-overflow-tooltip></el-table-column>
            <el-table-column prop="next" label="下次跟进" show-overflow-tooltip></el-table-column>
            <el-table-column prop="contractToTime" label="合同到期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="people" label="业务员" show-overflow-tooltip></el-table-column>
            
            <el-table-column fixed="right" label="管理"  show-overflow-tooltip>
              <template slot-scope="scope">
                <!-- 分别跳到查看、修改的子页面 -->
                <el-button @click="lookDetail(scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="goAlter(scope.row)" type="text" size="small">修改</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
            <!-- Vue-Element的show-overflow-tooltip属性使用后空属性值鼠标移动上去提示一个黑色悬浮框 -->
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection()" class="setbutton">取消选择</el-button>
          </div>
        </el-tab-pane>
        
        <!-- ------------高级搜索-------------- -->
        <el-tab-pane label="高级搜索" name="second">
          <div class="tab-head">按条件筛选</div>
          <div class="table">
            <div class="table-left">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="公司编号">
                  <el-input v-model="form.num"></el-input>
                </el-form-item>
                <el-form-item label="公司名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="联系人">
                  <el-input v-model="form.contact"></el-input>
                </el-form-item>
                <el-form-item label="手机">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="客户类型">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="客户级别">
                  <el-select v-model="form.level" placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="客户来源">
                  <el-select v-model="form.source" placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="QQ">
                  <el-input v-model="form.qq"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">搜索</el-button>
                  <el-button>清空</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="table-right">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="录入日期">
                  <el-input v-model="form.date"></el-input>
                </el-form-item>
                <el-form-item label="最后更新">
                  <el-input v-model="form.update"></el-input>
                </el-form-item>
                <el-form-item label="省份地区">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="产品分类">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="业务员">
                  <el-select v-model="form.people" placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="查询范围">
                  <el-radio-group v-model="form.scope">
                    <el-radio label="权限内"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="其他">
                  <el-checkbox-group v-model="form.else">
                    <el-checkbox label="有跟单" name="type"></el-checkbox>
                    <el-checkbox label="有订单" name="type"></el-checkbox>
                    <el-checkbox label="有合同" name="type"></el-checkbox>
                    <el-checkbox label="有售后" name="type"></el-checkbox>
                    <el-checkbox label="有附件" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-form>
              <!-- <div class="content-item">
                <div class="item-label">公司编号</div>
                <div class="item-content">content</div>
              </div>
              <div class="content-item">
                <div class="item-label">公司名称</div>
                <div class="item-content">content</div>
              </div>
              <div class="content-item">
                <div class="item-label">联系人</div>
                <div class="item-content">content</div>
              </div>
              <div class="content-item">
                <div class="item-label">手机</div>
                <div class="item-content">content</div>
              </div>-->
            </div>
          </div>
        </el-tab-pane>

        <!-- ---共享给我 和 我的共享可以不要 ------>
        <!-- ------------我的共享-------------- -->
        <el-tab-pane label="我的共享" name="third">
          <div class="tab-head">信息列表</div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="序号" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="公司名称" width="120"></el-table-column>
            <el-table-column prop="type" label="客户类型" show-overflow-tooltip></el-table-column>
            <el-table-column prop="contact" label="联系人" show-overflow-tooltip></el-table-column>
            <el-table-column prop="lastUpdate" label="最后更新" show-overflow-tooltip></el-table-column>
            <el-table-column prop="next" label="下次跟进" show-overflow-tooltip></el-table-column>
            <el-table-column prop="contractToTime" label="合同到期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="people" label="业务员" show-overflow-tooltip></el-table-column>
            <el-table-column prop="management" label="管理" show-overflow-tooltip></el-table-column>
            <!-- Vue-Element的show-overflow-tooltip属性使用后空属性值鼠标移动上去提示一个黑色悬浮框 -->
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection()" class="setbutton">取消选择</el-button>
          </div>
        </el-tab-pane>

        <!-------------- 共享给我 ------------->
        <el-tab-pane label="共享给我" name="fourth">
          <div class="tab-head">信息列表</div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="序号" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="公司名称" width="120"></el-table-column>
            <el-table-column prop="type" label="客户类型" show-overflow-tooltip></el-table-column>
            <el-table-column prop="contact" label="联系人" show-overflow-tooltip></el-table-column>
            <el-table-column prop="lastUpdate" label="最后更新" show-overflow-tooltip></el-table-column>
            <el-table-column prop="next" label="下次跟进" show-overflow-tooltip></el-table-column>
            <el-table-column prop="contractToTime" label="合同到期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="people" label="业务员" show-overflow-tooltip></el-table-column>
            <el-table-column prop="management" label="管理" show-overflow-tooltip></el-table-column>
            <!-- Vue-Element的show-overflow-tooltip属性使用后空属性值鼠标移动上去提示一个黑色悬浮框 -->
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection()" class="setbutton">取消选择</el-button>
          </div>
        </el-tab-pane>

        <!-------------- 客户查重 ------------->
        <el-tab-pane label="客户查重" name="fifth">
          <!-- <span class="iconfont">&#xe859;</span> -->
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="客户名称">
              <el-input v-model="formInline.name"></el-input>
            </el-form-item>
            <el-form-item label="客户手机">
              <el-input v-model="formInline.phone"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-table :data="tableData" style="width: 55%">
              <el-table-column prop="factoryName" label="公司名称" width="280px"></el-table-column>
              <el-table-column prop="employee" label="业务员" width="280px"></el-table-column>
            </el-table>
          </el-form>
        </el-tab-pane>

        <!-------------- 新增客户 ------------->
        <el-tab-pane label="新增客户" name="sixth">
          <div class="table-left">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="公司名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="联系人">
                <el-input v-model="form.contact"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="企业网站">
                <el-input v-model="form.website"></el-input>
              </el-form-item>
              <el-form-item label="产品分类">
                <el-select v-model="form.sort" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="QQ">
                <el-input v-model="form.qq"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button>关闭</el-button>
              </el-form-item>
            </el-form>
          </div>

          <div class="table-right">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="详细地址">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
              <el-form-item label="手机">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="传真号码">
                <el-input v-model="form.fax"></el-input>
              </el-form-item>
              <el-form-item label="客户邮箱">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="客户类型">
                <el-select v-model="form.type" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户来源">
                <el-select v-model="form.source" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="其他">
                <el-input v-model="form.else"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 弹出框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible1" width="500px" :before-close="handleClose"  >
      <span>客户名称</span>
      <input type="text" />
      <span>客户手机</span>
      <input type="text" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">关 闭</el-button>
        <el-button type="primary" @click="dialogVisible1 = false">保 存</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>

export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "1",
          name: "王小虎",
          type: "个人",
          contact: "123456",
          lastUpdate: "2016-05-03",
          next: "111",
          contractToTime: "2016-09-09",
          people: "ych",
          management: "",
          factoryName: "123",
          employee: "zhy"
        }
      ],
      multipleSelection: [],
      dialogVisible: false,
      dialogVisible1: false,
      form: 
        {
          num: "",
          name: "",
          contact: "",
          phone: "",
          region: "",
          level: "",
          source: "",
          qq: "",
          delivery: false,
          type: [],
          resource: "",
          desc: "",
          date: "",
          update: "",
          address: "",
          people: "",
          scope: "",
          else: "",
          management: ""
        },
      formInline: {
        user: "",
        region: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  methods: {
    //将name传给跳转的页面
    lookDetail(data) { //data是传过去行的值
      sessionStorage.setItem('info', JSON.stringify(data.name)) 
      console.log(JSON.stringify(data.name));
      this.$router.push('/lookDetail')
    },
    //
    goAlter(){
this.$router.push('/lookDetail')
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    onSubmit() {
      console.log("submit!");
    },
    
  }
};
</script>

<style>
/* 客户列表 */
.tab {
  margin-left: 20px;
}
.tab-head {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  background-color: #015591;
  color: #fff;
}
/* .setbutton{
  height: 20px;
  background-color: red;
} */
.table {
  border: solid 1px black;
}
.table-left {
  width: 30%;
  float: left;
  padding-top: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.table-right {
  width: 70%;
  padding-top: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  float: right;
}
</style>