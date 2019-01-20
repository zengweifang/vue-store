<template>
  <div class="hello">
    <el-main>Maintesteteststestsetestsetestes</el-main>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$loading.start(this)
    setTimeout(() => {
      this.$loading.hiding(this)
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
