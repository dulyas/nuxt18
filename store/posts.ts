import { IPost } from "~/types/IPost"
import { GetterTree, ActionTree, MutationTree } from 'vuex'


export const state = () => ({
  posts: [] as IPost[],
  page: 1,
  count: 0,
  loading: false
})

export type IPostState = ReturnType<typeof state>

export const getters: GetterTree<IPostState, IPostState> = {
  getPosts (state: IPostState) {
    return state.posts
  }
}

export const mutations: MutationTree<IPostState> = {
  setPosts (state: IPostState, amount: IPostState) {
    state.posts = amount.posts
  }
}

export const actions: ActionTree<IPostState, IPostState> = {
  async loadPosts ({ commit }) {
    try {
      const posts = await fetch('api/posts')
      commit('setPosts', posts)
    } catch (e) {
      console.error(e)
    }
  }
}
