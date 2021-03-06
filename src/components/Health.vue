// Health.vue

<template>
  <div>
    <h1>Number of COVID-19 cases</h1>
    <button v-on:click="getHealthData">Get Health Data</button>
    
    <!-- <div>{{healthDataList}}</div> -->
    <div v-for="healthData in healthDataList" :key="healthData.id" class="health-data">
      <div class="health-location">
        <div>
          <h3>{{healthData.id}}, {{healthData.helseforetakNavn}}, {{healthData.region}}</h3>
        </div>
        <ul>
        <li v-for="child in healthData.covidRegistreringer" :key="child.dato">
        {{ child.dato.substring(0,10) }}, {{ child.antInnlagte}}
        </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Health",
  data() {
    return {
      apiKey: 'enter-your-secret-key-here',
      healthDataList: []
    };
  },
  methods: {
    getHealthData() {
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
      .then((data) => (this.healthDataList = data));
    },
  },
  computed: {
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
