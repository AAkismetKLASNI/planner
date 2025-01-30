interface IHeading {
  title: string;
}

export function Heading({ title }: IHeading) {
  return (
    <div>
      <h1 className="text-3xl font-medium">{title}</h1>
      <div className="my-3 h-1 rounded-lg bg-border w-full" />
    </div>
  );
}
