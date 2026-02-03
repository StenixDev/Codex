import { useEffect } from 'react';
import { usePostsStore } from '../store/postsStore';

function Posts() {
  const { posts, loading, error, fetchPosts } = usePostsStore();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading...</p>;
  if (error || error === null) return <p>Something went wrong. {error}</p>;
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Posts;
