// @ is an alias to /src
import NavBar from "../../components/NavBar/NavBar.vue";
import Countries from "../../api/Countries";

export default {
  name: "CountryView",
  components: {
    NavBar,
  },
  data() {
    return {
      countryData: [],
      countries: [],
      borders: [],
      searchQuery: "",
    };
  },

  computed: {},

  methods: {
    getItemData() {
      const {
        params: { name: route },
      } = this.$route;
      // console.log(this.route);
      Countries.getItem(route)
        .then((response) => {
          // console.log(response.data);
          this.countryData = response.data;
          // console.log(this.route);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    async retrieveCountries() {
      await Countries.getAll()
        .then((response) => {
          // console.log(response.data);
          this.countries = response.data;
          // console.log(this.countries);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    extractBorders() {
      if (this.countryData[0].borders) {
        let objects = Object.values(this.countryData[0].borders);
        // console.log(objects);

        let countryObjects = Object.values(this.countries);
        // console.log(countryObjects);

        this.borders = countryObjects.filter((el) => {
          return objects.find((element) => {
            return element === el.cca3;
          });
        });
      }
    },

    openCard(name) {
      this.$router.push(`/country-name/${name}`);
    },
  },
  watch: {
    countryData() {
      this.extractBorders();
    },

    async $route() {
      this.getItemData();
      await this.retrieveCountries();
    },
  },

  async created() {
    this.getItemData();
    await this.retrieveCountries();
    this.extractBorders();
  },
};
