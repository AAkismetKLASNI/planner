'use client';

import { useCreateTimeBlock } from '../hooks/use.create.time.block';
import { useUpdateTimeBlock } from '../hooks/use.update.time.block';
import { COLORS } from './colors.data';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/buttons/button';
import { Field } from '@/components/ui/fields/field';
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
      duration: 0,
      order: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-3/5">
      <Field
        id="name"
        label="Name"
        placeholder="Enter name"
        extra="mb-4"
        {...register('name', { required: true })}
      />
      <Field
        id="duration"
        label="Duration"
        placeholder="Enter duration (min)"
        extra="mb-4"
        isNumber
        {...register('duration', { required: true, valueAsNumber: true })}
      />
      <div>
        <span className="inline-block mb-1.5">Color:</span>
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
      </div>
      <Button type="submit" disabled={isPending} className="mt-6">
        {existId ? 'Update' : 'Create'}
      </Button>
    </form>
  );
}
