<template>
  <div>
        <p>Lifecycle hook primjer</p>
       
        <p>Mijenjanje vremena: {{startTime}}</p>

        <p>Dohvaćeni podatak axios-om: {{data}}</p>

        
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      startTime: null,
      data:null
    }
  },
  mounted() {
       window.setInterval(()=>{
         this.startTime=new Date().toLocaleTimeString("hr-HR");
       },1000);
  },
  created(){
      axios.get('/getData').then(response=>this.data=response.data);
  },
}
</script>


