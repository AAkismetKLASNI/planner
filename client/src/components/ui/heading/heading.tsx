import { GlobalLoader } from '../loaders/global.loader';

interface IHeading {
  title: string;
}

export function Heading({ title }: IHeading) {
  return (
    <div className="flex justify-between items-center mb-4">
      <GlobalLoader />
      <h2 className="text-lg px-2 py-1 rounded-lg bg-primary font-medium text-right">
        /{title}
      </h2>
    </div>
  );
}
