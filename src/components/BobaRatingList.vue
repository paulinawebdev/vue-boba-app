<template>
<div>
    <div v-for="(item, i) in bobaRatings" v-bind:key="i">
      <h4>{{item.storeName}}</h4>
      <p>{{item.notes}}</p>
    </div>
</div>
</template>

<script>
export default {
    name: "BobaRatingList",
    props: ["bobaRatings"]
}
</script>