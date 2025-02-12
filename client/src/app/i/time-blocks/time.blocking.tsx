'use client';

import { TimeBlockingList } from './components/time.blocks.list';
import { TimeBlocksForm } from './form/time.blocks.form';
import { FormProvider, useForm } from 'react-hook-form';
import type { TypeTaskFormState } from '@/types/task.types';

export function TimeBlocking() {
  const methods = useForm<TypeTaskFormState>();

  return (
    <FormProvider {...methods}>
      <div className="grid grid-cols-2 justify-start items-start gap-12">
        <div className="flex flex-col gap-6">
          <TimeBlocksForm />
          <TimeBlockingList />
        </div>
      </div>
    </FormProvider>
  );
}
