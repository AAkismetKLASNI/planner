import { GlobalLoader } from '../loaders/global.loader';

interface IHeading {
  title: string;
}

export function Heading({ title }: IHeading) {
  return (
    <div className="flex justify-between items-center mb-4">
      <GlobalLoader />
      <h1 className="text-lg px-2 py-1 rounded-lg bg-primary font-medium text-right">
        /{title}
      </h1>
    </div>
  );
}
