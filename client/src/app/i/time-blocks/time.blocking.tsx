'use client';

import { TimeBlocksForm } from './form/time.blocks.form';
import { TimeBlockingList } from './time.blocks.list';
import { FormProvider, useForm } from 'react-hook-form';
import type { TypeTaskFormState } from '@/types/task.types';

export function TimeBlocking() {
  const methods = useForm<TypeTaskFormState>();

  return (
    <FormProvider {...methods}>
      <div className="grid grid-cols-2 gap-12">
        <TimeBlockingList />
        <TimeBlocksForm />
      </div>
    </FormProvider>
  );
}
