'use client';

import { useCreateTimeBlock } from '../hooks/use.create.time.block';
import { useUpdateTimeBlock } from '../hooks/use.update.time.block';
import { COLORS } from './colors.data';
import { CircleArrowRight, RefreshCcw } from 'lucide-react';
import { useRef } from 'react';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import { TransparentField } from '@/components/ui/fields/transperent';
import { Icon } from '@/components/ui/icon/icon';
import { SingleSelect } from '@/components/ui/single-select/single-select';
import type { TypeTimeBlockFormState } from '@/types/time-block.types';

export function TimeBlocksForm() {
  const { register, watch, control, reset, handleSubmit } =
    useFormContext<TypeTimeBlockFormState>();

  const existId = watch('id');

  const selectColorRef = useRef<string | undefined>('');

  const { updateTimeBlock } = useUpdateTimeBlock();
  const { createTimeBlock, isPending } = useCreateTimeBlock();

  const onSubmit: SubmitHandler<TypeTimeBlockFormState> = (data) => {
    const { color, id, ...rest } = data;
    const dto = { ...rest, color: color || undefined };

    // selectColorRef.current = color;

    if (id) {
      updateTimeBlock({ id, data: dto });
    } else {
      createTimeBlock(dto);
    }

    reset({
      id: undefined,
      name: '',
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
        defaultValue={selectColorRef.current || COLORS[0].value}
        render={({ field: { value, onChange } }) => {
          return (
            <SingleSelect
              value={value || COLORS[0].value}
              onChange={onChange}
              data={COLORS}
            />
          );
        }}
      />

      {existId ? (
        <Icon type="submit" disabled={isPending} Icon={RefreshCcw} />
      ) : (
        <Icon type="submit" disabled={isPending} Icon={CircleArrowRight} />
      )}
    </form>
  );
}
