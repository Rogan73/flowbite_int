<template>

                              <li >
                                <button :id="'doubleDropdownButton'+i" :data-dropdown-toggle="'doubleDropdown'+i" data-dropdown-placement="right-start" type="button" 
                                class="flex text-left items-center border-0 justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    {{subitem.name}} 
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                </button>

                               <div :id="'doubleDropdown'+i" class="z-10  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                               :class="isOpen ? 'block' : 'hidden'"
                               >
                                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="'doubleDropdownButton'+i">

                                   <li v-for="(ssitem,k) in subitem.submenu" :key="k">


                                     <component  :is="ItemA"  v-if="ssitem.name!='---' " :item="ssitem" @click="sel_item(ssitem)" />

                                     <!-- <template v-if="ssitem.name!='---'">
                                            <a :href="ssitem.link" class=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                                            {{ssitem.name}}
                                            </a>
                                     </template> -->

                                     <!-- <template v-if="ssitem.name=='---'">
                                          <div class="block h-1 border-b border-slate-400  "></div>
                                     </template> -->

                                     <component  v-if="ssitem.name=='---'"   :is="ItemDevider"   />


                                   </li>
                                  </ul>
                               </div>
                              </li>


</template>

<script setup>
import ItemDevider from './itemDevider.vue'
import ItemA from './itemA.vue'

defineProps({subitem:Object,i:Number,isOpen:Boolean})

const emit = defineEmits(['sel_item'])

const sel_item = (item)=>{
    emit('sel_item',item) 
}


</script>