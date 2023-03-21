<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/counter';

export default {
 methods: {
  ...mapActions(useAppStore, ['loggedOut']),
  doLogout() {
   this.loggedOut()
   localStorage.removeItem('access_token')
   this.$router.push('/login')
  }
 }
}
</script>
<template>
 <nav class="flex justify-center bg-sky-300 shadow-lg h-14">
  <div class="w-[90vw] max-w-[1200px] flex justify-between items-center">
   <h1 class="text-[2rem] cursor-pointer text-sky-50" @click="$router.push('/')">
    Market Place
   </h1>
   <button @click="doLogout">Logout</button>
  </div>
 </nav>
</template>
