import { AppState } from '../AppState.js'
import router from '../router.js'
import { api } from './AxiosService.js'

class BlogsService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    AppState.blogs = res.data
  }

  async getActive(id) {
    const res = await api.get('api/blogs/' + id)
    AppState.activeBlog = res.data
  }

  async getMyBlogs() {
    const res = await api.get(`api/blogs?creatorId=${AppState.account.id}`)
    AppState.myBlogs = res.data
  }

  async getByProfileId(id) {
    const res = await api.get(`api/blogs?creatorId=${id}`)
    AppState.activeBlogs = res.data
  }

  async create(data) {
    const res = await api.post('api/blogs', data)
    router.push({ name: 'BlogsDetails', params: { id: res.data.id } })
  }
}

export const blogsService = new BlogsService()
