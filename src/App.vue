<script>
import { mapActions, mapState } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { useAppStore } from './stores/counter'
export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState(useAppStore, ['isLogin', 'isLoading']),
  },
  // methods:{
  //   ...mapActions(useCommonStore)
  // }

}
</script>

<template>
  <Navbar v-if="isLogin" />
  <RouterView />
</template>


