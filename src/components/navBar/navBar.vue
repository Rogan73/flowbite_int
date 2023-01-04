<template>

<nav class="px-2 py-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>


    <button @click="isOpenM=!isOpenM"  type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

    <div class=" w-full md:block md:w-auto " id="navbar-multi-level__"
     :class="isOpenM ? 'block' : 'hidden'"
     >
     
      <ul class="flex flex-col p-4 mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


        <li v-for="(item,i) in items" :key="i">
        

              <!-- <component  :is="ItemA"  v-if="item.submenu.length==0 && item.name!='---' " :item="item" /> -->

             <template v-if="item.submenu.length==0 && item.name!='---' " >
                  <a @click.prevent="selectItem(item)" :href="item.link" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent " aria-current="page">
                   {{item.name}}</a>
             </template>
           
             <component  v-if="item.name=='---'"   :is="ItemDevider"   />

             <template v-if="item.submenu.length>0">

                <button 
                @click="isOpen=!isOpen"
                class="  bg-transparent flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium 
                text-gray-700  border-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 
                md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white
                dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                   {{item.name}} 
                  <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <!-- Dropdown menu -->
                <div  class="absolute top-14  z-10  font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                :class="isOpen ? 'block' : 'hidden'"
                >

                     <ul class="py-1 text-sm text-left text-gray-700 dark:text-gray-400 " >
                        <li v-for="(subitem, j) in item.submenu" :key="j"   @click="selectItem(subitem)">
                             <!-- simple link    -->
                            <component  :is="ItemA"  v-if="subitem.submenu.length==0 && subitem.name!='---' " :item="subitem" />
                            <!-- Devider -->
                            <component  v-if="subitem.name=='---'"   :is="ItemDevider"   />
                            <!-- submenu -->
                            <component @click="isOpenSub=true" :isOpen="isOpenSub" v-if="subitem.submenu.length>0" :is="itemSubmenu" :subitem="subitem" :i="i" @sel_item="selectItem" />
                        </li>
                     </ul>
                  
                </div>
             </template>
        </li>
      </ul>
 </div>


    <div class="flex items-center md:order-2 ">
        <listLangs :items="langs"/>
        <themeSwitcher/>
    </div>
  
  </div>
</nav>


</template>

<script setup>
import { ref } from 'vue'
import ItemDevider from './itemDevider.vue'
import ItemA from './itemA.vue'
import itemSubmenu from './itemSubmenu.vue'
import listLangs from './listLangs.vue'
import themeSwitcher from './themeSwitcher.vue'


defineProps({
  items: Array,
  langs: Array
})

let isOpen=ref(false)
let isOpenM=ref(false)
let isOpenSub=ref(false)


const selectItem = (v)=>{

   if (v.cmd!=""){
   isOpen.value=false;
   isOpenSub.value=false;
   console.log('cmd:',v.cmd);
   }
}


</script>

