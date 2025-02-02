import { IMenu } from './menu.interface';
import Link from 'next/link';

export function MenuItem({ item }: { item: IMenu }) {
  return (
    <div>
      <Link
        href={item.link}
        className="flex gap-2.5 items-center py-1.5 mt-2 px-layout
        transition-colors hover:bg-accent rounded-lg"
      >
        <item.icon />
        <span>{item.name}</span>
      </Link>
    </div>
  );
}
