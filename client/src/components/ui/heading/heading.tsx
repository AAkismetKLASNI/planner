import { Badge } from '../badge/badge';
import { GlobalLoader } from '../loaders/global.loader';

interface IHeading {
  title: string;
}

export function Heading({ title }: IHeading) {
  return (
    <div className="hidden lg:flex justify-between items-center mb-12">
      <GlobalLoader />
      <Badge color="88, 125, 219">{title}</Badge>
    </div>
  );
}
