<template>
  <div class="hello">
     <el-main>Main
       <button @click="go()">test</button>
     </el-main>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    go () {
      this.$router.push({path: '/test'})
    }
  },
  mounted () {
    this.$store.dispatch('setRole', 3)
    // this.$store.dispatch('setLoading', true)
    this.$loading.start(this)
    setTimeout(() => {
      this.$loading.hiding(this)
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
