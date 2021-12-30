<template>
  <div>
        <p>Ovako bi izgledao Computed property</p>
        <input v-model="tekst" placeholder="Ovdje upisi tekst"/>
        <p>Ovdje je napisani tekst: {{tekst}}</p>
        <p>Ovdje je obrnuti redoslijed teksta koristeci computed property: {{reversedTekst}}</p>
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
  },
  computed: {
      reversedTekst: function(){
          return this.tekst.split('').reverse().join('');
      },
  }
}
</script>


