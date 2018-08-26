<template>
  <div class="home">
    <search :auto-fixed="true" placeholder="请输入搜索内容" @on-result-click="resultClick" @on-change="getResult" :results="results" v-model="searchResult" position="absolute" auto-scroll-to-top top="0px" @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>
    <home-banner></home-banner>
    <home-popFilm></home-popFilm>
    <home-popMusic></home-popMusic>
    <home-popGame></home-popGame>
  </div>
</template>
<script>
import { Search } from 'vux';
import homeBanner from '../../components/home/banner.vue';
import homePopFilm from '../../components/home/homePopFilm.vue';
import homePopMusic from '../../components/home/homePopMusic.vue';
import homePopGame from '../../components/home/homePopGame.vue';
export default {
  name: 'home',
  components: {
    Search,
    homeBanner,
    homePopFilm,
    homePopMusic,
    homePopGame
  },
  data() {
    return {
      results: [],
      searchResult: '',
    }
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
    }
  },
  computed: {

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
}
</style>