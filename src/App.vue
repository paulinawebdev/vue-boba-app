<template>
  <div id="main-app">
    <h3>{{title}}</h3>
    <font-awesome-icon icon="plus" /> Add Boba Rating
    <boba-rating-list v-bind:bobaRatings="bobaRatings" />
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import axios from "axios";
import BobaRatingList from "./components/BobaRatingList";

export default {
  name: 'MainApp',
  data: function() {
    return {
      title: "BobaRater",
      bobaRatings: []
    }
  },
  components: {
    FontAwesomeIcon,
    BobaRatingList
  },
  mounted() {
    axios
    .get("./data/bobadata.json")
    .then(response => (this.bobaRatings = response.data));
  }
}
</script>
