import { Badge } from '@/components/ui/badge/badge';
import { useOutside } from '@/hooks/use.outside';

export interface IOption {
  label: string;
  value: string;
}

interface ISingleSelect {
  data: IOption[];
  onChange: (value: string) => void;
  value: string;
  isPriority?: boolean;
}

export function SingleSelect({
  data,
  onChange,
  value,
  isPriority = false,
}: ISingleSelect) {
  const { isShow, setIsShow, ref } = useOutside(false);

  const currentSelect = data.find(
    ({ value: valueSelect, label: labelSelect }) =>
      isPriority ? labelSelect === value : valueSelect === value,
  );

  return (
    <div
      className="relative min-w-32"
      ref={ref}
      onClick={() => setIsShow(!isShow)}
    >
      <Badge color={isPriority ? currentSelect?.value : value}>
        {currentSelect?.label || 'Click for select'}
      </Badge>
      {isShow && (
        <div className="absolute p-2 rounded-lg z-10  top-[calc(100%+.5rem)] bg-secondary flex gap-2 flex-col w-full">
          {data.map(({ label, value }) => (
            <Badge
              onClick={() => (isPriority ? onChange(label) : onChange(value))}
              color={value}
              key={value}
            >
              {label}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
