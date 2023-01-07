<template>

<div class="relative">
<button :id="'dropdownDefaultButton'+obj.id" @click.self="close_menu()" :data-dropdown-toggle="'dropdown'+obj.id" class="min-w-fit w-40 my-5 mx-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center  inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  {{obj.name}} 
  <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
</button>
<!-- Dropdown menu -->
<div :id="'dropdown'+obj.id" class="absolute z-10 hidden right-4 -mt-3 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li v-for="(item,i) in obj.items" :key="i">

        <a v-if="item.name!=''"  @click="close_menu(item.cmd)" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{item.name}}</a>
        
        <div v-if="item.name==''" class="block h-0 border-b border-slate-400  "></div>

      </li>
    </ul>

    <!-- <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>     -->

</div>
</div>


</template>

<script setup>
import {onMounted} from 'vue'

const props=defineProps({
  obj:Object
})

let el;

onMounted(() => {
    el=document.getElementById('dropdown'+props.obj.id);  
})

const close_menu = (cmd)=>{
  if (cmd!=undefined){
    el.classList.toggle('hidden');
    console.log('cmd',cmd);
  } 

}


</script>