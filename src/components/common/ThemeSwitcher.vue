<script setup lang="ts">
    import { ref } from 'vue';
    let currentThemeIsDark = ref(false);
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        currentThemeIsDark = ref(true);
    } 
    else {
        currentThemeIsDark = ref(false);
    }

    function changeTheme() {
        currentThemeIsDark.value = !currentThemeIsDark.value;
        if(currentThemeIsDark.value){
            // dark
            document.documentElement.classList.add('dark');
            localStorage.setItem("color-theme", "dark");
        }
        else{
            // light
            document.documentElement.classList.remove('dark');
            localStorage.setItem("color-theme", "light");
        }
    }
</script>
<template>
  <button
    id="theme-toggle"
    type="button"
    @click="changeTheme"
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
  >
    <icon v-if="currentThemeIsDark == false" class="w-5 h-5" name="moon"></icon>
    <icon v-else name="sun" class="w-5 h-5"></icon>    
  </button>
</template>