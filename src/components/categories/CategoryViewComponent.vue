<script lang="ts">
import {formatDate} from "@/helpers/DateHelper";
import axios from '@/plugins/axios'
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        id: Number,
        name: String,
        imagePath: String,
        description: String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
      return{
        baseURL: "" as string,
        imageFullPath: "" as string,
        createdAtString: "" as string,
        updatedAtString: "" as string
      }
    },
    methods: {
      load(){
        this.baseURL = axios.defaults.baseURL!;
        this.imageFullPath = this.baseURL+"/"+this.imagePath;
        this.createdAtString = formatDate(this.createdAt!);
        this.updatedAtString = formatDate(this.updatedAt!);
      },
    },
    mounted() {
        this.load();
    }
});
</script>

<template>
    <div class="card flex border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex-none w-64">
          <img style="height: 100%; width: 100%; object-fit: cover;" class="rounded-lg"
            :src='imageFullPath'/>
        </div>
        <div class="flex-auto p-4">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ name }}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
          <div class="flex flex-wrap items-center mt-5 mb-5">
            <div class="w-4 h-4 text-gray-700 dark:text-gray-400">
              <icon name="calendar"></icon>
            </div>
            <p class="me-5 mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ createdAtString }}</p>
            <icon name="calendar-edit" class="w-4 h-4 text-gray-700 dark:text-gray-400"></icon>
            <p class="mx-1 font-normal bold text-gray-700 dark:text-gray-400">{{ updatedAtString }}</p>
          </div>
        </div>
        <div class="flex-none w-16">
          <button type="button"
            class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <icon name="edit" class="w-4 h-4"></icon>
          </button>
          <button type="button"
            class="mt-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            <icon name="delete" class="w-4 h-4"></icon>
          </button>
        </div>
      </div>
</template>