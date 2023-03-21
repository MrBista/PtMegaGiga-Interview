<script>
export default {
  data() {
    return {
      name: localStorage.getItem('name')
    }
  }
}
</script>

<template>
  <div className="mr-20  w-[210px]">
    <div className="shadow-lg bg-sky-200 rounded w-[200px] overflow-hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHf3awcl39H3zaM76MECaqBlJYDu-ViFAlw-L8qaXBSQ&s"
        class="w-full">
      <p className="text-[2rem] text-center capitalize text-sky-50">{{ name }}</p>
    </div>
    <div className="shadow-lg  rounded w-[200px] mt-4 rounded-md overflow-hidden">
      <h4 class="text-center bg-sky-200 w-full text-[1.8rem] text-sky-50">Menu</h4>
      <ul class="[&>*]:px-4 [&>*]:py-2">
        <li @click="$router.push('/')">Barang</li>
        <li @click="$router.push('/supplier')">Supplier</li>
      </ul>
    </div>
    <div className="shadow-lg  rounded w-[200px] mt-4 rounded-md overflow-hidden">
      <h4 class="text-center bg-sky-200 w-full text-[1.8rem] text-sky-50">Online <span
          class="w-24 h-24 bg-green-500 rounded-full"> </span></h4>
      <ul class="[&>*]:px-4 [&>*]:py-1">
        <li>Hari online :</li>
        <li>Waktu online:</li>
      </ul>
    </div>

  </div>
</template>