'use client';

import { TimeBlockingList } from './components/time.blocks.list';
import { TimeBlocksForm } from './form/time.blocks.form';
import { FormProvider, useForm } from 'react-hook-form';
import type { TypeTaskFormState } from '@/types/task.types';

export function TimeBlocking() {
  const methods = useForm<TypeTaskFormState>();

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col w-10/12 mx-auto gap-6">
        <TimeBlocksForm />
        <TimeBlockingList />
      </div>
    </FormProvider>
  );
}
