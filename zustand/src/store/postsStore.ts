import { create } from 'zustand';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsStore {
  posts: Post[];
  loading: boolean;
  error: null | string | undefined;
}

export const usePostsStore = create<PostsStore>()((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5',
      );
      const data = await res.json();
      set({ posts: data, loading: false });
    } catch (error) {
      set({ error: `failed to fetched the data ${error}`, loading: false });
    }
  },
}));
