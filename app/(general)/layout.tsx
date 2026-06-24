
export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="text-7xl">Hola mundo</span>
      {children}
    </div>
  );
}