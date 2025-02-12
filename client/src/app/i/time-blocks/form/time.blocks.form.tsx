'use client';

import { useCreateTimeBlock } from '../hooks/use.create.time.block';
import { useUpdateTimeBlock } from '../hooks/use.update.time.block';
import { COLORS } from './colors.data';
import { CircleArrowRight, RefreshCcw } from 'lucide-react';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import { TransparentField } from '@/components/ui/fields/transperent';
import { SingleSelect } from '@/components/ui/task-edit/single-select';
import type { TypeTimeBlockFormState } from '@/types/time-block.types';

export function TimeBlocksForm() {
  const { register, watch, control, reset, handleSubmit } =
    useFormContext<TypeTimeBlockFormState>();

  const existId = watch('id');

  const { updateTimeBlock } = useUpdateTimeBlock();
  const { createTimeBlock, isPending } = useCreateTimeBlock();

  const onSubmit: SubmitHandler<TypeTimeBlockFormState> = (data) => {
    const { color, id, ...rest } = data;
    const dto = { ...rest, color: color || undefined };

    if (id) {
      updateTimeBlock({ id, data: dto });
    } else {
      createTimeBlock(dto);
    }

    reset({
      id: undefined,
      name: '',
      color: COLORS[COLORS.length - 1],
      duration: '',
      order: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-4">
      <TransparentField
        id="name"
        placeholder="Enter name"
        {...register('name', { required: true })}
      />

      <TransparentField
        id="duration"
        placeholder="Enter duration (min)"
        {...register('duration', { required: true, valueAsNumber: true })}
      />

      <Controller
        control={control}
        name="color"
        render={({ field: { value, onChange } }) => {
          return (
            <SingleSelect
              isColorSelect
              value={value || COLORS[COLORS.length - 1]}
              onChange={onChange}
              data={COLORS.map((item) => ({ value: item, label: item }))}
            />
          );
        }}
      />

      <button type="submit" disabled={isPending}>
        {existId ? (
          <RefreshCcw color="#AABBD5" />
        ) : (
          <CircleArrowRight color="#AABBD5" />
        )}
      </button>
    </form>
  );
}
