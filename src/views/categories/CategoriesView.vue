<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IconEdit from "../../components/icons/interface/IconEdit.vue"
import IconDelete from "../../components/icons/interface/IconDelete.vue"
import IconCalendar from "../../components/icons/interface/IconCalendar.vue";
import IconCalendarEdit from "../../components/icons/interface/IconCalendarEdit.vue";
import { onMounted } from 'vue';
import { ref } from 'vue';
import axios from 'axios';
const t = useI18n()

const dataList = ref<CategoryViewModel[]>([]);
async function loadData() {
  const response = await axios.get<CategoryViewModel[]>("http://localhost:5000/api/categories");
  dataList.value = response.data;
}

onMounted(loadData);
</script>
<template>
  <!--begin:: BreadCrumb-->
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <a href="#"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 20 20">
            <path
              d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          {{ $t('home') }}
        </a>
      </li>
      <li>
        <div class="flex items-center">
          <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <a
            class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{
              $t('categories') }}</a>
        </div>
      </li>
    </ol>
  </nav>
  <!--end:: BreadCrumb-->

  <!--begin:: Categories-->
  <ul>
    <template v-for="element in dataList">
      <div
        class="card flex h-48 mt-5 mb-5 me-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-content-start">
          <img style="height: 100%; width: 100%; object-fit: cover;" class="rounded-lg"
            src="https://australianmadeclothes.com.au/cdn/shop/files/HOMEPAGE_BANNER_2.png" />
        </div>
        <div class="p-4 justify-content-between">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ element.name }}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">{{ element.description }}</p>
          <div class="flex flex-wrap items-center mt-5 mb-5">
            <IconCalendar></IconCalendar>
            <p class="me-5 mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ element.createdAt }}</p>
            <IconCalendarEdit></IconCalendarEdit>
            <p class="mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ element.updatedAt }}</p>
          </div>
        </div>
        <div class="p-4 justify-content-end">
          <button type="button"
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <IconEdit></IconEdit>
          </button>
          <button type="button"
            class="mt-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            <IconDelete></IconDelete>
          </button>
        </div>
      </div>
    </template>
  </ul>
  <!--end:: Categories-->
</template>
