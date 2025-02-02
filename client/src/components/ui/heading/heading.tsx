interface IHeading {
  title: string;
}

export function Heading({ title }: IHeading) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex gap-2">
        <div className="w-4 h-4 bg-white/10 rounded-full"></div>
        <div className="w-4 h-4 bg-white/10 rounded-full"></div>
        <div className="w-4 h-4 bg-white/10 rounded-full"></div>
      </div>
      <h1 className="text-lg px-2 py-1 rounded-lg bg-primary font-medium text-right">
        /{title}
      </h1>
    </div>
  );
}
