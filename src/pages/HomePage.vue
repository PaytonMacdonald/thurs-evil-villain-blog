<!------------------------------------------------------------------------------------------------>

<template>
  <div class="container-fluid home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <div class="col">
        <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
          <span class="mx-2 text-white">SUPA EVIL BLOG</span>
        </h1>
      </div>
    </div>
    <Blogs v-for="blog in state.blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<!------------------------------------------------------------------------------------------------>

<script>
import { computed, onMounted, reactive } from 'vue'
import Blogs from '../components/BlogComponent'
import { blogsService } from '../services/BlogsService'
import { AppState } from '../AppState'

export default {
  name: 'HomePage',
  setup() {
    const state = reactive({
      // loading: true,
      blogs: computed(() => AppState.blogs)
    })
    onMounted(async() => {
      try {
        await blogsService.getBlogs()
        // state.loading = false
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state
    }
  },
  components: {
    Blogs
  }
}
</script>

<!------------------------------------------------------------------------------------------------>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>

<!------------------------------------------------------------------------------------------------>
