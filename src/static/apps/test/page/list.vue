<template>
  <div class='List'>

  77779999
  </div>
</template>

<script>
import http from '@utils/http'
export default {
  data() {
    return {
      accuracy: 0, 
      checked: false,
      result: '',
      tableData: [{
        cl1: 'value1',
        cl2: 'value2',
        cl3: 'value4',
        cl4: 'value4'
      }],
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 20, // 1页显示多少条
        page_sizes: [20, 40, 60], // 每页显示多少条
        pager_count: 5,
        layout: 'total, sizes, prev, pager, next, jumper' // 翻页属性
      }
    }
  },
  created() {
    // this.getData()
  },
  methods: {
    jumpDetail(index, row) {
      console.log(row)
      this.$router.push({
        path: 'detail',
        query: {
          cellphone: row.cl1
        }
      })
    },
    successMsg(msg) {
      this.$message({
        message: msg || 'success',
        type: 'success'
      })
    },
    getSearch() {
      this.successMsg()
    },
    getData() {
      this.$store.dispatch('onLoading', true)
      http.ask({
        url: '/api/list',
        method: 'post',
        data: {
          id: 1
        }
      }).then(res => {
        this.$store.dispatch('onLoading', false)
      }).catch((err) => {
        this.$store.dispatch('onLoading', false)
        console.log(err)
      })
    },
    handleCurrentChange(val) {
      this.paginations.page_index = val
      this.getData()
    },
    handleSizeChange(val) {
      this.paginations.page_size = val
      this.getData()
    }
  }

}
</script>
<style lang='scss'>
@import "../styles/basket.scss";
</style>

<style lang='scss' scoped>
.List {
  padding: 0 30px;
  .top {
    text-align: right;
    .search-part {
      display: inline-block;
      height: 70px;
      line-height: 70px;
      .search-part-wrap {
        height: 40px;
        line-height: 40px;
        .checkbox {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
