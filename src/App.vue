<template>
  <div id="app">
    <div class="nav">
      <div class="nav-wrap">
        <!--@emitFromList="handlerInParent"-->
        <Nav :lists="sort_show"
             klass="nav-list">
        </Nav>
        <card-list :activeData="active_data"></card-list>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import Nav from "./components/Nav";
import CardList from "./components/Card-List";
export default {
  name: "App",
  data() {
    return {
      show_data: {},
      show_control: [1, 0, 0],
      sort_show: ["Android", "iOS", "App"]
    };
  },
  computed: {
    activeTab() {
      return this.$store.state.tab.tabIndex;
    },
    active_data() {
      return this.show_data[this.activeTab];
    }
  },
  methods: {
    wash(data) {
      let result = [];
      return (
        this.sort_show.forEach((item, index) =>
          result.push({
            [item]: data[item]
          })
        ),
        result
      );
    }
  },
  created() {
    axios
      .get(`https://gank.io/api/today`)
      .then(response => {
        if (response.data && response.data.results)
          this.show_data = this.wash(response.data.results);
      })
      .catch(e => {
        console.log("e->", e);
      });
  },
  mounted() {
    // console.log(this.$root.eventbus);
  },
  components: {
    Nav,
    CardList
  }
};
</script>
