<template>
  <div>
        <p>Ovako bi izgledao two way binding</p>
        <input v-model="tekst" placeholder="Ovdje upisi tekst"/>
        <p>Ovdje je napisani tekst: {{tekst}}</p>
  </div>
</template>


<script>
export default {
  data () {
    return {
      tekst: "",
    }
  },
  mounted () {
  }
}
</script>


