<!------------------------------------------------------------------------------------------------>

<template>
  <div class="row">
    <div class="col d-flex flex-column">
      <div class="card py-3 px-5 my-3">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.body }}</p>
        <h6>{{ state.published ? 'published' : 'not published' }}</h6>
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------>

<script>
export default {
  name: 'MyBlog',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<!------------------------------------------------------------------------------------------------>

<style>

</style>

<!------------------------------------------------------------------------------------------------>
