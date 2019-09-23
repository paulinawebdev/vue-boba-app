<template>
<div class="list-group list-group-flush">
    <div class="list-group-item d-flex" v-for="item in bobaRatings" :key="item.rateIndex">
    <!-- <div class="list-group-item d-flex" v-for="(item, i) in bobaRatings" v-bind:key="i"> -->
      <div class="w-100">
        <h4 contenteditable="contenteditable" @blur="$emit('edit', item.rateId, 'storeName', $event.target.innerText)">{{item.storeName}} <span class="rating-location">- {{item.storeLocation}}</span></h4>
        <small class="text-muted">
          <font-awesome-icon class="mr-1" icon="user" /> <span class="text-dark">{{item.author}}</span>
          <font-awesome-icon class="ml-3 mr-1" icon="calendar" /> {{item.rateDate}} 
        </small>
        <p contenteditable="contenteditable" @blur="$emit('edit', item.rateId, 'review', $event.target.innerText)">{{item.review}}</p>
      </div>
      <div class="mx-2">
        <button class="mr-2 btn btn-sm btn-danger" @click="$emit('remove', item)">
          <font-awesome-icon icon="trash" />
        </button>
      </div>
    </div>
</div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import moment from "moment";
export default {
    name: "BobaRatingList",
    props: ["bobaRatings"],
    components: {
      FontAwesomeIcon
    },
    methods: {
      formattedDate: function(date) {
        return moment(new Date(date)).format("MM-DD-YY, h:mm a");
      }
    }
}
</script>