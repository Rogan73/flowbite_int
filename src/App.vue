<template>

  <navBar :items="items" :langs="langs" />

<div class="relative  flex flex-row justify-center items-start row bg-slate-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700" style="height:100vh">
  <dropdown :obj="list_dropdowns[0]" />
  <dropdown :obj="list_dropdowns[1]" />
</div>

</template>

<script setup>
import {ref} from 'vue'
import navBar from './components/navBar/navBar.vue'
import dropdown from './components/dropdown.vue'
import {items, langs} from './store/menu'

let list_dropdowns=ref([
 {
  id: '1',
  name:'List 1',
  icon: '',
  items: [
    {
    name: 'Dashboard',
    icon: '',
    cmd:'dashboard'
    },
    {
    name: 'Settings',
    icon: '',
    cmd:'settings'
    },
    {
    name: 'Earning',
    icon: '',
    cmd:'earning'
    },
    {
    name: '',
    icon: '',
    cmd:''
    },
    {
    name: 'Sign out',
    icon: '',
    cmd:'signout'
    }

  ]
 },

{
  id: '2',
  name:'List 2',
  icon: '',
  items: [
    {
    name: 'Dashboard2',
    icon: '',
    cmd:'dashboard2'
    },
    {
    name: 'Settings2',
    icon: '',
    cmd:'settings2'
    },
    {
    name: 'Earning2',
    icon: '',
    cmd:'earning2'
    },
    {
    name: '',
    icon: '',
    cmd:''
    },
    {
    name: 'Sign out2',
    icon: '',
    cmd:'signout2'
    }

  ]
 }



])

</script>


