'use client';

import type { TypeView } from '../tasks.view';
import cn from 'clsx';
import { Kanban, ListTodo } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface ISwitcherView {
  type: TypeView;
  setType: Dispatch<SetStateAction<TypeView>>;
}

export function SwitcherView({ type, setType }: ISwitcherView) {
  return (
    <div className="flex gap-4 items-center mb-5">
      <button
        className={cn('flex gap-1 items-center', {
          'opacity-40': type === 'kanban',
        })}
        onClick={() => setType('list')}
      >
        <ListTodo />
        List
      </button>
      <button
        className={cn('flex gap-1 items-center', {
          'opacity-40': type === 'list',
        })}
        onClick={() => setType('kanban')}
      >
        <Kanban />
        Kanban
      </button>
    </div>
  );
}
