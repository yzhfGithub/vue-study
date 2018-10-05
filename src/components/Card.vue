<template>
<div :class="klass">
  <a :href="cards.url" >
    <img :src="cards.images && cards.images[0]" v-if="cards.images">
    <p>{{cards.desc}}</p>
    <div>
      <span>{{cards.who}}</span>
      <span>{{cards.publishedAt | timefmt}}</span>
    </div>
  </a>
</div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cards: {
      type: Object,
      default: [],
      required: true
    },
    klass: {
      type: String,
      default: "",
      required: false
    }
  },
  filters: {
    timefmt(val) {
      return val.split(/T/i)[0];
    }
  }
};
</script>

<style lang="scss">
@import "../../static/style/_mixin.scss";
@mixin pad() {
  padding: 0 5%;
}
.card {
  background-color: #e7e7d4d2;
  margin: 10px;
  padding-bottom: 10px;
  box-shadow: 3px 3px 2px #ccc;
  border-radius: 5px;
  a {
    text-decoration: none;
    p {
      @include pad;
      @include textellipsis;
      font-size: 14px;
      margin-bottom: 5px;
      color: rgb(194, 161, 161);
    }
    img {
      margin: 5%;
      width: 90%;
      height: 246px;
    }
    div {
      @include pad;
      font-size: 12px;
      color: rgb(194, 161, 161);
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

