<template>
  <div class="home">
    <search :auto-fixed="true" placeholder="请输入搜索内容" @on-result-click="resultClick" @on-change="getResult" :results="results" v-model="searchResult" position="absolute" auto-scroll-to-top top="0px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>
    <div class="homebanner">
      <!--<swiper loop  :list="banDataList" :index="banData" @on-index-change="onIndexChange"></swiper>-->
      <swiper 
      :aspect-ratio="300/800" 
      dots-class="custom-bottom" 
      loop
      dots-position="center" 
      @on-index-change="onIndexChange"
      :interval=3000>
        <swiper-item class="swiper-demo-img" v-for="(item, index) in banDataList" :key="index"><img :src="item.img">
          <div class="banTitle" @click="test">
            <router-link to="/home/homeDetail">homeDetail</router-link>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Search, Swiper,SwiperItem } from 'vux';
export default {
  name: 'home',
  components: {
    Search,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      results: [],
      searchResult: '',

      banDataList: [],
      banDataIndex: 0,
      banData: [{
        url: 'javascript:',
        img: '../../../static/home/banner/film.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: '../../../static/home/banner/game.jpg',
        title: '送你一辆车'
      }, {
        url: 'javascript:',
        img: '../../../static/home/banner/game1.jpg',
        title: '送你一次旅行',
        fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
      }],
      urlList: [],
    }
  },
  mounted() {
    this.dealBanImg();
  },
  methods: {
    setFocus() {
      this.$refs.search.setFocus()
    },
    resultClick(item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult(val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.searchResult) : []
    },
    onSubmit() {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus() {
      console.log('on focus')
    },
    onCancel() {
      console.log('on cancel')
    },

    onIndexChange(index) {
      this.banDataIndex = index
    },

    dealBanImg() {
      this.banDataList = this.banData.map((item, index) => ({
        url: 'http://m.baidu.com',
        img: item.img,
        fallbackImg: item.fallbackImg,
        title: `(可点击)${item.title}`
      }))
    },

    test() {
      console.log(154646);
    }
  },
  watch: {
    
  }
}

function getResult(val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}

</script>
<style lang="less" scoped>
.home {
  color: #fff;
  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
  }
  .text-scroll p {
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .black {
    background-color: #000;
  }
  .title {
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 0px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }
  .banTitle {
    position: absolute;
    bottom: 0px;
    color: #fff;
    font-weight: bold;
  }
}
</style>