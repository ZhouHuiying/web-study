<template>
  <div class="allContent">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="客户档案" name="first">
        <div class="tab-head">按条件筛选</div>
        <div class="table">
          <div class="table-left">
            <el-form ref="customForm" :model="customForm" label-width="80px">
              <el-form-item label="客户类型">
                <el-select v-model="customForm.type" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户来源">
                <el-select v-model="customForm.source" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户级别">
                <el-select v-model="customForm.range" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="业务员">
                <el-select v-model="customForm.people" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <div class="table-right">
            <el-form ref="customForm" :model="customForm" label-width="80px">
              <el-form-item label="省份地区">
                <el-select v-model="customForm.region1" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>&ensp; &ensp;&ensp;
                <el-select v-model="customForm.region2" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品分类">
                <el-select v-model="customForm.classify" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="收支日期">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="最后更新">
                <el-date-picker
                  v-model="value2"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>
            </el-form>
          </div>
          <el-form ref="customForm" :model="customForm" label-width="80px">
            <el-form-item label="导出项目">
              <el-checkbox-group v-model="customForm.export">
                <el-checkbox label="1" name="type"></el-checkbox>
                <el-checkbox label="2" name="type"></el-checkbox>
                <el-checkbox label="3" name="type"></el-checkbox>
                <el-checkbox label="4" name="type"></el-checkbox>
                <el-checkbox label="5" name="type"></el-checkbox>
                <el-checkbox label="6" name="type"></el-checkbox>
                <el-checkbox label="7" name="type"></el-checkbox>
                <el-checkbox label="8" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="QQ">
              <el-input v-model="customForm.qq" style="width: 200px"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>

      <el-tab-pane label="跟单记录" name="second">
        <div class="tab-head">按条件筛选</div>
        <div class="table">
          <div class="table-left">
            <el-form ref="documentaryForm" :model="documentaryForm" label-width="80px">
              <el-form-item label="跟单类型">
                <el-select v-model="documentaryForm.type" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="业务员">
                <el-select v-model="documentaryForm.people" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <div class="table-right">
            <el-form ref="documentaryForm" :model="documentaryForm" label-width="80px">
              <el-form-item label="跟单进度">
                <el-select v-model="documentaryForm.process" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="录入时间">
                <el-date-picker
                  v-model="value3"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>
            </el-form>
          </div>
          <el-form ref="customForm" :model="documentaryForm" label-width="80px">
            <el-form-item label="导出项目">
              <el-checkbox-group v-model="documentaryForm.export">
                <el-checkbox label="1" name="type"></el-checkbox>
                <el-checkbox label="2" name="type"></el-checkbox>
                <el-checkbox label="3" name="type"></el-checkbox>
                <el-checkbox label="4" name="type"></el-checkbox>
                <el-checkbox label="5" name="type"></el-checkbox>
                <el-checkbox label="6" name="type"></el-checkbox>
                <el-checkbox label="7" name="type"></el-checkbox>
                <el-checkbox label="8" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>

      <el-tab-pane label="订单记录" name="third">
        <div class="tab-head">按条件筛选</div>
        <div class="table">
          <div class="table-left">
            <el-form ref="orderForm" :model="orderForm" label-width="80px">
              <el-form-item label="订单状态">
                <el-select v-model="orderForm.status" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="业务员">
                <el-select v-model="orderForm.people" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <div class="table-right">
            <el-form ref="orderForm" :model="orderForm" label-width="80px">
              <el-form-item label="下单日期">
                <el-date-picker
                  v-model="value4"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="交单日期">
                <el-date-picker
                  v-model="value5"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>
            </el-form>
          </div>
          <el-form ref="orderForm" :model="orderForm" label-width="80px">
            <el-form-item label="导出项目">
              <el-checkbox-group v-model="orderForm.export">
                <el-checkbox label="1" name="type"></el-checkbox>
                <el-checkbox label="2" name="type"></el-checkbox>
                <el-checkbox label="3" name="type"></el-checkbox>
                <el-checkbox label="4" name="type"></el-checkbox>
                <el-checkbox label="5" name="type"></el-checkbox>
                <el-checkbox label="6" name="type"></el-checkbox>
                <el-checkbox label="7" name="type"></el-checkbox>
                <el-checkbox label="8" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>

      <el-tab-pane label="合同记录" name="fourth">
        <div class="tab-head">按条件筛选</div>
        <div class="table">
          <div class="table-left">
            <el-form ref="contractForm" :model="contractForm" label-width="80px">
              <el-form-item label="合同分类">
                <el-select v-model="contractForm.classify" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="合同状态">
                <el-select v-model="contractForm.status" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="业务员">
                <el-select v-model="contractForm.people" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <div class="table-right">
            <el-form ref="orderForm" :model="contractForm" label-width="80px">
              <el-form-item label="起始时间">
                <el-date-picker
                  v-model="value6"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="到期时间">
                <el-date-picker
                  v-model="value7"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="有无欠款" prop="resource">
                <el-radio-group v-model="orderForm.isOwe">
                  <el-radio label="全部"></el-radio>
                  <el-radio label="无欠款"></el-radio>
                   <el-radio label="有欠款"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
          <el-form ref="orderForm" :model="orderForm" label-width="80px">
            <el-form-item label="导出项目">
              <el-checkbox-group v-model="orderForm.export">
                <el-checkbox label="1" name="type"></el-checkbox>
                <el-checkbox label="2" name="type"></el-checkbox>
                <el-checkbox label="3" name="type"></el-checkbox>
                <el-checkbox label="4" name="type"></el-checkbox>
                <el-checkbox label="5" name="type"></el-checkbox>
                <el-checkbox label="6" name="type"></el-checkbox>
                <el-checkbox label="7" name="type"></el-checkbox>
                <el-checkbox label="8" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>

      <el-tab-pane label="售后记录" name="fifth">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>

      <el-tab-pane label="费用记录" name="sixth">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      customForm: {
        type: "",
        source: "",
        range: "",
        people: "",
        region1: "",
        region2: "",
        classify: "",
        export: "",
        qq: ""
      },
      documentaryForm: {
        type: "",
        people: "",
        process: "",
        export: ""
      },
      orderForm: {
        status: "",
        people: "",
        export: ""
      },
       contractForm: {
        classify: "",
        status: "",
        people: "",
        isOwe: "",
        export: ""
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>