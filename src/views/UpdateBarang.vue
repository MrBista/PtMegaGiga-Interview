<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/counter'

export default {
  data() {
    return {
      formStock: {
        harga: 0,
        id: 0,
        namaBarang: '',
        stock: '',
        supplierName: ''
      }
    }
  },
  methods: {
    ...mapActions(useAppStore, ['updateStock']),
    doUpdateStock() {
      this?.updateStock(this.$route.params.id, this.formStock)
    }
  },

}

</script>

<template>
  <div class="flex justify-center items-center h-[60vh]">
    <div class="shadow-lg rounded overflow-hidden w-[550px]">
      <div class="w-full bg-sky-300">
        <p class="text-white px-4 py-4">Update Barang</p>
      </div>
      <form @submit.prevent="doUpdateStock">
        <div class="p-2 flex flex-col gap-4">
          <div class="flex justify-between items-center gap-x-12">
            <label for="stock">Nama Barang</label>
            <input type="text" placeholder="Masukan Nama Barang"
              class="outline-none border-2 border-slate-200 px-4 py-1 flex-1" v-model="formStock.namaBarang">
          </div>
          <div class="flex justify-between items-center gap-x-12">
            <label for="stock">Harga Barang</label>
            <input type="text" placeholder="Masukan Harga Barang"
              class="outline-none border-2 border-slate-200 px-4 py-1 flex-1" v-model="formStock.harga">
          </div>
          <div class="flex justify-between items-center gap-x-12">
            <label for="stock">Stock Barang</label>
            <input type="text" placeholder="Masukan Jumlah Stock Barang"
              class="outline-none border-2 border-slate-200 px-4 py-1 flex-1" v-model="formStock.stock">
          </div>
          <div class="flex justify-between items-center gap-x-12">
            <label for="stock">Supplier Barang</label>
            <input v-model="formStock.supplierName" type="text" placeholder="Masukan Nama Barang"
              class="outline-none border-2 border-slate-200 px-4 py-1 flex-1">
          </div>
        </div>
        <div class="w-full px-2 h-[0.4px] bg-slate-200 "></div>
        <div class="flex justify-between items-center px-2 mt-4 py-4">
          <button @click="$router.push('/')" type="button"
            class="px-4 py-2 bg-slate-400 rounded shadow-sm text-white">Kembali</button>
          <button type="submit" class="px-4 py-2 bg-sky-400 rounded shadow-sm text-white">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>