

<template>
  <div>
    <!-- 三级联动 -->
    <TypeNav></TypeNav>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like></Like>
    <Floor/>
    <Floor/>
    <Brand/>

  </div>
</template>

<script>

import ListContainer from '@/pages/Home/ListContainer/ListContainer.vue'
import Recommend from '@/pages/Home/Recommend/Recommend.vue'
import Rank from '@/pages/Home/Rank/Rank.vue'
import Like from '@/pages/Home/Like/Like.vue'
import Floor from '@/pages/Home/Floor/Floor.vue'
import Brand from '@/pages/Home/Brand/Brand.vue'

export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Rank,
    Floor,
    Brand
}
};
</script>

<style></style>
