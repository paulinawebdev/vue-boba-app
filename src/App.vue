<template>
  <div id="main-app">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 col-12">
          <div class="d-flex w-100 py-4 justify-content-between align-items-center">
            <h3>{{title}}</h3>
            <!-- <button class="btn btn-info"><font-awesome-icon icon="plus" /> Add Boba Rating</button> -->
          </div>
          <add-rating @add="addItem" />
          <boba-rating-list v-bind:bobaRatings="bobaRatings" @remove="removeItem" @edit="editItem" />
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import AddRating from "./components/AddRating";
import axios from "axios";
import _ from "lodash";
import BobaRatingList from "./components/BobaRatingList";

export default {
  name: 'MainApp',
  data: function() {
    return {
      title: "BobaRater",
      bobaRatings: [],
      rateIndex: 0
    }
  },
  components: {
    FontAwesomeIcon,
    BobaRatingList,
    AddRating
  },
  mounted() {
    axios
    .get("./data/bobadata.json")
    .then(response => (this.bobaRatings = response.data.map(item => {
      item.rateId = this.rateIndex;
      this.rateIndex++;
      return item;
    })));
  },
  methods: {
    removeItem: function(bobaItem) {
      this.bobaRatings = _.without(this.bobaRatings, bobaItem);
    },
    editItem: function(id, field, text) {
      const rateIndex = _.findIndex(this.bobaRatings, {
        rateId: id
      });
      this.bobaRatings[rateIndex][field] = text;
    },
    addItem: function(rating) {
      var d = new Date();
      var month = d.getMonth() + 1;
      var date = d.getDate();
      var year = d.getFullYear();
      rating.ratingId = this.rateIndex;
      rating.rateDate = month + "/" + date + "/" + year;
      this.rateIndex++;
      this.bobaRatings.push(rating);
    }
  }
}
</script>
