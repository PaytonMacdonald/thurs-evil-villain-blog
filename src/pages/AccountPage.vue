<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-5">
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
        <div class="about text-center">
          <h1>Welcome {{ account.name }}</h1>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <form action="" @submit.prevent="create">
          <div class="form-group">
            <label for="title">Title</label>
            <textarea class="form-control" id="title" rows="1"></textarea>
          </div>
          <div class="form-group">
            <label for="body">Body</label>
            <textarea class="form-control" id="body" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import { accountService } from '../services/AccountService'
import Notification from '../utils/Notification'
import { logger } from '../utils/Logger'
import { useRoute } from 'vue-router'

export default {
  name: 'Account',
  setup() {
    const route = useRoute()
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
      // activeBlogs: computed(() => AppState.activeBlogs),
      // activeProfile: computed(() => AppState.activeProfile)
    })
    onMounted(async() => {
      await blogsService.getByProfileId(route.params.id)
      await accountService.getProfile(route.params.id)
    })

    return {
      state,
      account: computed(() => AppState.account),
      async create() {
        try {
          await blogsService.create(state.newBlog)
          state.newBlog = {}

          // second party pop up
          Notification.toast('Successfully Created Blog', 'success')
        } catch (error) {
          logger.log(error)

          // second party pop up
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
