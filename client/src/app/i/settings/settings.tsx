'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/buttons/button';
import { Error } from '@/components/ui/error';
import { Field } from '@/components/ui/fields/field';
import { TypeUserForm } from '@/types/auth.types';
import { useSetInitialData } from '@/hooks/use.set.initial.data';
import { useUpdateSetting } from '@/hooks/use.update.settings';

export function Settings() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<TypeUserForm>();

  const errorForm =
    errors.email?.message ||
    errors.name?.message ||
    errors.password?.message ||
    errors.breakInterval?.message ||
    errors.intervalsCount?.message ||
    errors.workInterval?.message;

  useSetInitialData(reset);
  const { mutate, isPending } = useUpdateSetting();

  const onSubmit = (data: TypeUserForm) => {
    const { password, ...rest } = data;

    console.log('update data!', password);

    mutate({ ...rest, password: password || undefined });
  };

  return (
    <form className="w-2/4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-10 mb-2">
        <div>
          <Field
            id="email"
            label="Email"
            placeholder="Enter email"
            {...register('email')}
            extra="mb-4"
          />
          <Field
            id="name"
            label="Name"
            placeholder="Enter name"
            {...register('name')}
            extra="mb-4"
          />
          <Field
            id="password"
            label="Password"
            placeholder="Enter password"
            {...register('password')}
            extra="mb-4"
          />
        </div>

        <div>
          <Field
            id="work-interval"
            label="Work-interval (min)"
            placeholder="Enter work-interval"
            isNumber
            {...register('workInterval', { valueAsNumber: true })}
            extra="mb-4"
          />
          <Field
            id="break-interval"
            label="Break-interval (min)"
            placeholder="Enter break-interval"
            isNumber
            {...register('breakInterval', { valueAsNumber: true })}
            extra="mb-4"
          />
          <Field
            id="intervals-count"
            label="Intervals-count (max: 10)"
            placeholder="Enter intervals-count"
            isNumber
            {...register('intervalsCount', { valueAsNumber: true })}
            extra="mb-4"
          />
        </div>
      </div>
      <div className="flex gap-8 items-start">
        <Button type="submit" disabled={isPending}>
          Save
        </Button>
        {errorForm && <Error>{errorForm}</Error>}
      </div>
    </form>
  );
}
