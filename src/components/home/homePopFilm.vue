<template>
  <div class="popFilm">
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">高分热片</div>
      </flexbox-item>
    </flexbox>
    <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
      <grid-item v-for="i in 6" :key="i" :link="'/home/homeDetail/'+i">
        <card>
          <img slot="header" src="../../../static/home/homePopFilm/1.jpg" style="width:100%;display:block;">
          <div slot="content" class="card-padding">
            <p class="filmDetail" style="color:#fff;font-size:12px;">Posted on January 21, 2015</p>
            <p style="font-size:14px;line-height:1.2;">影片名称</p>
          </div>
        </card>
      </grid-item>
    </grid>
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">
          <divider>
            <div @click="refreshList">
              <i slot="icon" class="myFont ng2-lifeStyle-shuaxin"></i>换一批
            </div>
          </divider>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem, Divider, Grid, GridItem, Card } from "vux";
export default {
  name: "homePopFilm",
  components: {
    Grid,
    GridItem,
    Card,
    Flexbox,
    FlexboxItem,
    Divider
  },
  data() {
    return {};
  },
  mounted() {
    this.testRequest();
  },
  methods: {
    onItemClick() {
      console.log("on item click");
    },
    refreshList() {
      console.log("换一批");
    },
    testRequest() {
      this.$wsHttp
        .get("home/homePopFilm", { film_score: 1 })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log("错误：" + err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.popFilm {
  width: 100%;
  margin-top: 10px;
  .weui-grid {
    padding: 0;
  }
  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
  .weui-grids {
    background-color: transparent;
    /*background-color: #696969;*/
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
  .flex-demo {
    /*text-align: center;*/
    color: #ffd04b;
    /*background-color: #20b907;*/
    border-radius: 4px;
    background-clip: padding-box;
  }
  .filmDetail {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .vux-divider {
    color: #ffd04b;
  }
  .weui-panel {
    background-color: transparent;
    color: #ffd04b;
  }
  .weui-panel:before,
  .weui-panel:after {
    border: none;
  }
  .weui-grid:after {
    border: none;
  }
  .weui-grid:active {
    background-color: transparent;
  }
}
</style>