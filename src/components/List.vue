<template>
  <div>
    <div :key="index"
    v-for="(item,index) in activeData">
      <Card :key="index" v-for="(card, index) in item" :cards="card"
       klass="card"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "List",
  props: {
    activeData: {
      type: Object,
      required: true,
      default: {}
    }
  },
  components: { Card }
};
</script>
