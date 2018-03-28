<script>
export default {
    name: 'CryptoPrice',
    data () {
        return {
            crytpoPrices: [],
            search: ""
        }
    },
    mounted() {
        fetch("https://api.coinmarketcap.com/v1/ticker/")
        .then(response => response.json())
        .then(data => {
            this.crytpoPrices = data;
        })
        },
    computed: {
        filteredCoins() {
            return this.crytpoPrices.filter((item) =>{
                 return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            })
        }
    }
}
</script>

<template>
 <div>
    <input type="text" class="form-control" v-model="search" placeholder="Search..."> </input>
    <table class='table'>
    <thead>
        <tr>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price $</th>
        <th>Price BTC</th>
        <th>1hr change</th>
        <th>24hr change</th>
        <th>Week change</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(coin, name) in filteredCoins"  :key="name">
        <!-- <tr v-for="(coin, name) in crytpoPrices"  :key="name"> -->
        <td>{{ coin.name }}</td>
        <td>{{ coin.symbol }}</td>
        <td>{{ coin.price_usd }}</td>
        <td>{{ coin.price_btc }}</td>
        <td>{{ coin.percent_change_1hr }}</td>
        <td>{{ coin.percent_change_24hr }}</td>
        <td>{{ coin.percent_change_7d }}</td>
        </tr>
    </tbody>
    </table>
    </div>

</template>


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

