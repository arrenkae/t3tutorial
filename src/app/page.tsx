import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockImages = [
  "https://utfs.io/f/ae2a7db9-8681-43f4-96fa-3884df347174-j4wew7.png",
  "https://utfs.io/f/84105b96-9c33-4b3a-b861-ad03791d9215-bfyd1k.jpg",
  "https://utfs.io/f/959ce81a-315d-4d4d-80b6-12ac67265167-zhiik5.jpg",
  "https://utfs.io/f/35f52ecd-6c37-4da2-9c66-23f017ba4e22-20llt.png",
  "https://utfs.io/f/66da7248-367c-4f72-9d3c-6e849f11f5a3-rs8gzh.png",
];

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image, index) => (
          <div key={index} className="w-48 p-4">
            <img src={image} alt={`gallery image #${index + 1}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
