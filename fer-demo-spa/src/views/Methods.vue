<template>
  <div>
        <p>Ovako bi izgledao method</p>
        <button v-on:click="downCounter()">Smanji counter</button>
        <button v-on:click="upCounter()">Povecaj counter</button>
        <p>{{counter}}</p>
  </div>
</template>


<script>
export default {
  data () {
    return {
      counter: 0,
    }
  },
  methods: {
      upCounter(){
          this.counter++;
      },
      downCounter(){
          this.counter--;
      },
  },
  mounted () {
  }
}
</script>


