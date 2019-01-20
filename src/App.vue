<template>
  <div id="app" v-loading='$store.state.loading'>
    <el-container>
      <el-header>Header{{$store.getters.getRole}}</el-header>
      <el-container>
        <el-aside width="200px">Aside{{$store.getters.getRole}}</el-aside>
        <el-container>
          <router-view></router-view>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      role: 0
    }
  },
  mounted () {
    setTimeout(() => {
      // this.loading = false
    }, 2000)
  }
}
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
