interface PageProps {
  searchParams: Promise<{ room: string; category: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { room, category } = await searchParams;

  if (!room || !category) {
    throw new Error("Room and categories not found");
  }

  return (
    <div>
      Room: {room}
      Category: {category}
    </div>
  );
}
