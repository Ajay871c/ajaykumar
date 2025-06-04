import { getSortedPostsData } from '@/lib/posts';
import BlogPage from './BlogPage';

export const dynamic = 'force-dynamic';

export default function Page() {
  const posts = getSortedPostsData();
  return <BlogPage posts={posts} />;
}