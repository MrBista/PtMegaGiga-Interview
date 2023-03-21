<script>
import Navbar from '../components/Navbar.vue'
import Aside from '../components/Aside.vue'
import TableBarang from '../components/TableBarang.vue'
import TableSupplier from '../components/TableSupplier.vue'
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/counter'
export default {
  components: {
    Navbar,
    Aside,
    TableBarang,
    TableSupplier
  },
  methods: {
    ...mapActions(useAppStore, ['getAllStock', 'getAllSupplier', 'toSupplier', 'toStock']),
    movePage(num) {
      this.$router.push(`/?page=${num}`);
    },
  },
  computed: {
    ...mapState(useAppStore, ['stocks', 'totalPage', 'suppliers', 'whichPage'])
  },
  created() {
    this.getAllSupplier()
    this.getAllStock()
  },

}
</script>
<template>
  <div className="w-[90vw] max-w-[1200px] mx-auto mt-5 flex  justify-start items-start">
    <Aside />
    <TableBarang :stocks="stocks" />

  </div>
</template>
