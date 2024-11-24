type HeaderProps = { white: string; blue: string };

export default function Header({ white, blue }: Readonly<HeaderProps>) {
  return (
    <h1 className="text-stone-300 text-6xl uppercase font-extrabold black-ops-one-regular flex flex-col lg:flex-row text-end lg:text-start h-32 lg:h-16">
      {white}
      <span className="color-blue-600 text-gradient text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
        {blue}
      </span>
    </h1>
  );
}
