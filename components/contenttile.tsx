interface ContentTileProps {
  children: React.ReactNode;
}

export default function ContentTile({ children }: ContentTileProps) {
  return (
    <main className="w-full flex-1 px-5 flex h-full">
      <div className="bg-gray-100 flex-1 flex flex-col rounded-xl shadow-xl p-4 mb-10 gap-2">
        {children}
      </div>
    </main>
  );
}
