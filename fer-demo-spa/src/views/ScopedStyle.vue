<style>
    .scoped{
        color: green;
    }
</style>
<template>
 <scoped tekst="Ovo je komponenta koja ima style scoped boje red klikom na gumb ok koristi se emit iz komponente scoped koja ce dodati ostatak teksta koji će biti druge boje jer je style definiran van komponente" @accepted="getTekst"></scoped>
    <div class="scoped">
       {{tekst}}
    </div>
</template>
<script>
import scoped from "../components/Scoped";
export default {
  components: {
      scoped,
  },
  data () {
    return {
      tekst: "",
    }
  },
  methods: {
      getTekst(){
          this.tekst="Ovo je tekst u view-u koji koristi komponentu Scoped u kojoj je definirana zelena boja";
      }
  },
};
</script>