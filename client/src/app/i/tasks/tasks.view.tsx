'use client';

import { SwitcherView } from './components/switcher-view';
import { KanbanView } from './kanban-view/kanban.view';
import { ListView } from './list-view/list.view';
import { Loader } from '@/components/ui/loaders/loader';
import { useLocalStorage } from '@/hooks/use.local.storage';

export type TypeView = 'list' | 'kanban';

export function TasksView() {
  const [type, setType, isLoading] = useLocalStorage<TypeView>({
    key: 'task-view',
    defaultValue: 'list',
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <SwitcherView setType={setType} type={type} />
      {type === 'list' ? <ListView /> : <KanbanView />}
    </div>
  );
}
