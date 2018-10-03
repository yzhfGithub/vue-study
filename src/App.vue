<template>
  <div id="app">
    <div class="nav">
      <div class="nav-wrap">
        <div class="nav-ctrl">
          <span
            v-for="(item, index) of sort_show"
            @click="change_tab(index)"
            :class="{active: show_control[index]}">
            {{item}}
          </span>
        </div>


        <div class="nav-content" v-for="(navcnt, index) in show_data" :class="{active: show_control[index]}">
          <div v-for="val in navcnt">
            <div class="card" v-for="v in val">
              <a :href="v.url">
                <img :src="v.images && v.images[0]" v-if="v.images">
                <p>{{v.desc}}</p>
                <div>
                  <span>{{v.who}}</span>
                  <span>{{v.publishedAt}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>





<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      show_data: {},
      show_control: [1, 0, 0],
      sort_show: ["iOS", "Android", "App"]
    };
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
    },
    change_tab(index) {
      let current_active_index = this.show_control.indexOf(1);
      if (current_active_index === index) return;
      this.show_control = [0, 0, 0];
      this.show_control[index] = 1;
    }
  },
  created() {
    //
    axios
      .get(`https://gank.io/api/today`)
      .then(response => {
        if (response.data && response.data.results)
          this.show_data = this.wash(response.data.results);
      })
      .catch(e => {
        console.log("e->", e);
      });
  }
};
</script>

<style lang="scss">
@mixin center() {
  display: flex;
  align-items: center;
  justify-content: center;
}
@mixin pad() {
  padding: 0 5%;
}
@mixin tex() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nav {
  &-wrap {
    .nav-ctrl {
      text-align: center;
      @include center;
      background-color: #000;
      span {
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
    .nav-content {
      display: none;
      &.active {
        display: block;
      }
    }
  }
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
      @include tex;
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
