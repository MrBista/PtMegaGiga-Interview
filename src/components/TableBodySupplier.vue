<script>

export default {
 props: ['supplier', 'numOfSupplier']
}
</script>

<template>
 <tr class=" [&>*]:px-4 [&>*]:py-2">
  <td class="">{{ numOfSupplier }}</td>
  <td>
   <p>{{ supplier.namaSupplier }}</p>
  </td>
  <td>
   <p>{{ supplier.alamat }}</p>
  </td>
  <td>
   <p>{{ supplier.noTelp }}</p>
  </td>
  <td>
   <button class="">
    <span class="material-symbols-outlined text-red-500">
     delete
    </span>
   </button>
   <button class="ml-2" @click="$router.push('/update-supplier/' + supplier.id)">
    <span class="material-symbols-outlined text-yellow-500">
     update
    </span>
   </button>
  </td>

 </tr>
</template>