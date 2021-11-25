Vue.component('search-form', {
   data() {
      return {
         showSearch: false,
         userSearch: ''
      }
   },
   template: `<form action="#" class="header__search search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch" v-show="showSearch">
                <button type="submit" class="btn-search" @click="showSearch = !showSearch">
                <img src="../images/search.svg" alt="search">
                </button>
            </form>`
});