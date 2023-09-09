<script lang="ts">
import { defineComponent } from 'vue'
import { CompanyViewModel } from '@/viewmodels/CompaniesViewModels'
import { PaginationMetaData } from '@/utils/PaginationUtils'
import axios from '@/plugins/axios'

export default defineComponent({
  data() {
    return {
      companiesList: [] as CompanyViewModel[],
      metaData: {} as PaginationMetaData,
      isBigPagination: false as Boolean
    }
  },
  methods: {
    async getDataAsync(page: number) {
      var response = await axios.get<CompanyViewModel[]>('/api/companies?page=' + page)
      var paginationJson = JSON.parse(response.headers['x-pagination']);
      this.metaData = new PaginationMetaData();
      this.metaData.totalPages = paginationJson.TotalPages;
      this.metaData.hasNext = paginationJson.HasNext;
      this.metaData.hasPrevious = paginationJson.HasPrevious;
      this.companiesList = response.data;
    }
  },
  async mounted() {
    await this.getDataAsync(1)
  }
})
</script>

<template>
  <div class="flex flex-wrap">
    <template v-for="element in companiesList">
      <p>{{ element.name }}</p>
      <br>
      <p>{{ element.description }}</p>
      <br>
      <p>{{ element.createdAt }}</p>
      <br>
      <p>{{ element.updatedAt }}</p>
    </template>
    
  </div>
  <nav aria-label="Page navigation example">
      <ul class="flex items-center -space-x-px h-8 text-sm">
        <li v-show="metaData.hasPrevious == true">
          <a href="#"
            class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Previous</span>
            <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 1 1 5l4 4" />
            </svg>
          </a>
        </li>
        <li v-for="el in metaData.totalPages">
            <button @click="getDataAsync(el)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                {{ el }}</button>
        </li>
        <li v-show="metaData.hasNext == true">
          <a href="#"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Next</span>
            <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
</template>
