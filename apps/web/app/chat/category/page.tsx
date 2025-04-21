export default function Page({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: {
    room: string;
    category: string;
  };
}) {
  const query1 = searchParams.category;
  const query2 = searchParams.room;

  if (!query1 || !query2) {
    throw new Error("Room and categories not found");
  }

  return (
    <div>
      Categoría: {params.category} <br />
      Room: {query2}
      Category: {query1}
    </div>
  );
}
