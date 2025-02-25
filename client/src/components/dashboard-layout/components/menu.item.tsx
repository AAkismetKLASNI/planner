import { IMenu } from './menu.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MenuItem({ item }: { item: IMenu }) {
  const pathName = usePathname();

  return (
    <div>
      <Link
        href={item.link}
        className="flex flex-col gap-1.5 items-center py-2.5
        transition-colors rounded-lg lg:flex-row lg:px-layout"
      >
        <item.icon
          className={`mx-auto lg:mx-0 transition-opacity ${pathName === item.link ? 'opacity-100' : 'opacity-20'}`}
        />
        <span
          className={`text-[0.7rem] lg:text-xs text-center ${pathName === item.link ? 'opacity-100' : 'opacity-50'}`}
        >
          {item.name}
        </span>
      </Link>
    </div>
  );
}
