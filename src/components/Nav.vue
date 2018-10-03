<template>
<ul :class="klass">
  <li
      :key="index"
      :class="{active: activeStatus[index]}"
      @click="handleListClick(index)"
      v-for="(item, index) in lists">{{item}}
  </li>
</ul>
</template>

<script>
export default {
  name: "Nav",
  props: {
    lists: {
      type: Array,
      default: [],
      required: true
    },
    klass: {
      type: String,
      required: false,
      default: "default-list"
    },
    tabActive: {
      type: Number,
      default: 0,
      required: false
    }
  },
  data() {
    return {
      localTabActive: this.tabActive
    };
  },
  computed: {
    activeStatus() {
      let status = [0, 0, 0];
      return (status[this.localTabActive] = 1), status;
    }
  },
  methods: {
    handleListClick(tabindex) {
      this.localTabActive = tabindex;
      this.$emit("emitFromList", tabindex);
    }
  }
};
</script>

<style lang="scss">
@import "../../static/style/_mixin.scss";
.nav-list {
  @include center;
  background-color: #000;
  li {
    flex: 1;
    height: 44px;
    line-height: 44px;
    color: #fff;
    &.active {
      color: rgb(155, 76, 76);
      background-color: #e7e7d4d2;
    }
  }
}
</style>


