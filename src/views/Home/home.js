// @ is an alias to /src
import NavBar from "../../components/NavBar/NavBar.vue";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader.vue";
// import Pagination from "../../components/Pagination/Pagination.vue";

import Countries from "../../api/Countries";

export default {
  name: "HomeView",
  components: {
    NavBar,
    SkeletonLoader,
    // Pagination,
  },
  data() {
    return {
      searchQuery: null,
      // previous: searchQuery,
      region: "",
      countries: [],
      result: [],
      loading: true,
    };
  },

  computed: {
    resultQuery() {
      return this.filtercountriesByRegion(
        this.filtercountriesBySearchQuery(this.countries)
      );
      // return this.filtercountriesBySearchQuery(this.countries);
      // this.filtercountriesByRegion(this.countries)
    },
  },

  methods: {
    async retrieveCountries() {
      await Countries.getAll()

        .then((response) => {
          // console.log(response.data);
          this.countries = response.data;
          // console.log(this.countries);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setTimeout(() => {
            this.setLoadingState(false);
          }, 1000);
        });
    },
    setLoadingState(value) {
      this.loading = value;
      console.log(this.loading);
    },

    filterRegion() {
      var dataArr = this.countries.map((item) => {
        return [item.region, item];
      }); // creates array of array
      var maparr = new Map(dataArr); // create key value pair from array of array
      this.result = [...maparr.values()]; //converting back to array from mapobject

      // console.log(this.result);
      return this.result;
    },

    filtercountriesBySearchQuery(countries) {
      if (this.searchQuery) {
        console.log(
          countries.filter((item) => {
            return this.searchQuery
              .toLowerCase()
              .split(" ")
              .every((v) => `${item.name.official} `.toLowerCase().includes(v));
          })
        );
        return countries.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => `${item.name.official} `.toLowerCase().includes(v));
        });
      } else {
        return this.countries;
      }
    },

    filtercountriesByRegion(countries) {
      return countries.filter(
        // console.log(countries)
        (country) => !country.region.indexOf(this.region)
      );
    },

    openCard(value) {
      this.$router.push(`/country-name/${value}`);
    },
  },

  watch: {
    searchQuery() {
      this.filtercountriesByRegion(this.countries);
    },
  },

  async created() {
    await this.retrieveCountries();
    this.filterRegion();
  },
};
