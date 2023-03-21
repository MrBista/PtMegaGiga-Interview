<script>

export default {
 props: ['stock', 'num']
}
</script>

<template>
 <tr class=" [&>*]:px-4 [&>*]:py-2">
  <td class="">{{ num }}</td>
  <td>
   <p>{{ stock?.namaBarang }}</p>
  </td>
  <td>
   <p>{{ stock?.stok }}</p>
  </td>
  <td>
   <p>{{ stock?.harga }}</p>
  </td>
  <td>
   <p>{{ stock?.supplier?.namaSupplier }}</p>
  </td>
  <td>
   <p>{{ stock?.supplier?.alamat }}</p>
  </td>
  <td>
   <p>{{ stock?.supplier?.noTelp }}</p>
  </td>
  <td>
   <button class="">
    <span class="material-symbols-outlined text-red-500">
     delete
    </span>
   </button>
   <button class="ml-2" @click="$router.push('/update-stock/' + stock.id)">
    <span class="material-symbols-outlined text-yellow-500">
     update
    </span>
   </button>
  </td>
 </tr>
</template>