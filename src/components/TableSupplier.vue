<script>
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/counter'
import TableBodySupplier from './TableBodySupplier.vue'
export default {
  props: ['suppliers'],
  components: {
    TableBodySupplier
  },
  data() {
    return {
      pageNum: 1
    }
  },
  methods: {
    movePage(num) {
      this.$router.push(`/supplier?page=${num}`);
    },
    toPreviousPage() {
      this.pageNum -= 1
      this.movePage(this.pageNum)
      // console.log(this.pageNum)
    },
    toNextPage() {
      this.pageNum += 1
      this.movePage(this.pageNum)
      // console.log(this.pageNum)
    },
    ...mapActions(useAppStore, ['getAllSupplier'])
  },
  watch: {
    '$route.query'() {
      this.getAllSupplier(this.$route.query.page);
    },
  }
}
</script>

<template>
  <div class="w-full shadow-md rounded-md overflow-hidden">
    <div class="w-full bg-sky-300 px-4 py-2">
      <h5 class="text-white">Dashboard</h5>
    </div>
    <div class="flex justify-between px-4 py-1 items-center">
      <p>Supplier</p>
      <button @click="$router.push('/add-supplier')" class="bg-sky-600 px-4 py-2 rounded-sm shadow-sm text-white">Tambah
        Supplier</button>
    </div>
    <table class="border-collapse text-left table-auto w-full mt-2">
      <thead>
        <tr class="bg-sky-100 [&>*]:text-sm ">
          <th class="px-4 py-2 text-center w-12">No.</th>
          <th class="px-4 py-2">Nama Supplier</th>
          <th class="px-4 py-2">Alamat Supplier</th>
          <th class="px-4 py-2">No Telp</th>
          <th class="px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody class="[&>*:nth-child(even)]:bg-sky-100">
        <TableBodySupplier v-for="(supplier, i) in suppliers?.data" :key="supplier.id" :supplier="supplier"
          :numOfSupplier="++i" />
      </tbody>
    </table>
    <div class="flex justify-center -space-x-px w-full mt-2 gap-x-5">
      <button @click="toPreviousPage"
        class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-2">
        {{ '<' }}</button>
          <button @click="toNextPage"
            class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white mr-2">
            {{ '>' }}</button>
    </div>
  </div>
</template>