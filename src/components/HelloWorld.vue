<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CryptoPrice></CryptoPrice>
  </div>
</template>

<script>
import CryptoPrice from "./CryptoPrice"
export default {
  name: 'HelloWorld',
  components:{
    CryptoPrice 
  },
  data () {
    return {
      msg: 'Crypto price checker'
    }
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
