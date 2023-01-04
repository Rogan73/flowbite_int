<template>
        <a :href="item.link" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white " aria-current="page">
        {{item.name}}
        </a>
</template>

<script setup>
defineProps({ item:Object})
</script>
