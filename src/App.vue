<template>
  <div id="app">
    <div class="nav">
      <div class="nav-wrap">

        <Nav :lists="sort_show"
             klass="nav-list"
             @emitFromList="handlerInParent">
        </Nav>
        <List :activeData="active_data || default_data"></List>

      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import Nav from "./components/Nav";
import List from "./components/List";
export default {
  name: "App",
  data() {
    return {
      show_data: {},
      active_data: null,
      show_control: [1, 0, 0],
      sort_show: ["Android", "iOS", "App"]
    };
  },
  computed: {
    default_data() {
      return this.show_data[0];
    }
  },
  methods: {
    handlerInParent(tabActive) {
      this.active_data = this.show_data[tabActive];
    },
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
  components: {
    Nav,
    List
  }
};
</script>
