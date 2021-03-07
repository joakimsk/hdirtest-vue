// CovidTracker.vue

<template>
  <div>
    <h1>CovidTracker</h1>
    <button v-on:click="getCovidCases">
      Get latest COVID-19 cases from HDIR Api
    </button>

    <div class="row">
      <div
        v-for="covidData in covidDataList"
        v-bind:key="covidData.id"
        class="col-md-2 covid-data"
      >
        <div class="covid-location">
          <h4>
            {{ covidData.id }}
          </h4>
          <div class="container">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">dato</th>
                  <th scope="col">antInnlagte</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in covidData.covidRegistreringer"
                  v-bind:key="index"
                >
                  <td>{{ item.dato | formatDateTimeSimple }}</td>
                  <td>{{ item.antInnlagte }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CovidTracker",
  data() {
    return {
      apiKey: "enter-api-key-here",
      covidDataList: [],
    };
  },
  methods: {
    getCovidCases() {
      fetch(
        "https://api.helsedirektoratet.no/ProduktCovid19/Covid19statistikk/helseforetak",
        {
          method: "GET",
          mode: "cors", // no-cors, *cors, same-origin
          headers: {
            "Ocp-Apim-Subscription-Key": this.apiKey,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => (this.covidDataList = data));
    },
    getTime() {
      return this.$moment().format("HH:mm");
    },
  },
  created() {
    this.getCovidCases();
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.health-location {
  color: #000000;
}
</style>
