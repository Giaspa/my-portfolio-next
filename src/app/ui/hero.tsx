export default function Hero({
  children,
  imagePath,
}: {
  children: React.ReactNode;
  imagePath: string;
}) {
  return (
    <div className="flex p-4 lg:p-8 top-0 left-0 w-full h-full overflow-auto text-stone-300">
      <div className="flex flex-col justify-start z-10 gap-4 flex-1">
        {children}
      </div>

      <div
        className="top-0 left-0 h-full w-full rounded-2xl fixed bg-cover bg-center z-0 opacity-5"
        style={{ backgroundImage: `url(${imagePath})` }}
      ></div>
    </div>
  );
}
