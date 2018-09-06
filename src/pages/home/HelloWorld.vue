<template>
  <div class="hello">
		<Home-header/>
		<Home-Swiper :list="swiperList"></Home-Swiper>
		<Home-Icons :list="iconList"></Home-Icons>
		<Home-Recommend :list="recommendList"></Home-Recommend>
		<Home-Weekend :list="weekendList"></Home-Weekend>
  </div>
</template>

<script>
import axios from 'axios'
import HomeSwiper from './components/Swiper'
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
	components:{
		HomeSwiper,
		HomeHeader,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	methods: {
    getHomeInfo () {
      axios.get('../../../static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
        const data = res.data.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
