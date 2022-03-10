// @ is an alias to /src

export default {
  name: "NavBar",

  data() {
    return {
      theme: "",
    };
  },
  mounted() {
    let localTheme = localStorage.getItem("theme"); //gets stored theme value if any
    document.documentElement.setAttribute("data-theme", localTheme); // updates the data-theme attribute
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.theme); // stores theme value on local storage
    },
  },
};
