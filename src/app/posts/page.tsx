async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await res.json();
  return data.posts;
}

async function PostList() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default async function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
      <PostList />
    </main>
  );
}
