<template>

<button type="button"   
      @click="isOpen=!isOpen"
      class=" inline-flex items-center justify-center p-2 text-sm 
      text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 
      dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none border-0">
        <img :src="selectedItem.icon" class="h-5 w-5 rounded-full mr-2" />
        {{selectedItem.name}}

        <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <!-- Dropdown -->
      <div  class="absolute top-10 z-50  my-4 text-left list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700" id="language-dropdown-menu11"
        :class="isOpen ? 'block' : 'hidden' "
      >
        <ul class="py-1" role="none">

           <li v-for="(item,i) in items" :key="i"   >
            <a @click="selectItem(item)" :href="item.link" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div class="inline-flex items-center">
                <img :src="item.icon" class="h-3.5 w-3.5 rounded-full mr-2" />
                {{item.name}}
              </div>
            </a>
           </li>

        </ul>
      </div>


</template>

<script setup>
import {ref} from 'vue'

defineProps({
    items:Array
})

let isOpen=ref(false)
let selectedItem=ref({name: 'English (US)', icon:"../assets/icons/en.svg", cmd: "en" , link:"#"})

const selectItem = (v)=>{
   selectedItem={...v}
   isOpen.value=false;
   console.log(selectedItem.cmd);
}

</script>