import { db } from "~/server/db";

export default async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image) => (
        <div key={image.id} className="w-48 p-4">
          <img src={image.url} alt={`gallery image #${image.id}`} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}
