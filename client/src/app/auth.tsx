'use client';

import { useAuth } from './hooks/use.auth';
import { authScheme } from '@/schemes/auth.scheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/buttons/button';
import { Error } from '@/components/ui/error';
import { Field } from '@/components/ui/fields/field';
import { Heading } from '@/components/ui/heading/heading';
import { Loader } from '@/components/ui/loaders/loader';
import { IAuthForm } from '@/types/auth.types';

export default function Auth() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForm>({ resolver: yupResolver(authScheme) });

  const { mutate, error, isPending, setIsLogin } = useAuth(reset);

  const errorForm = errors.email?.message || errors.password?.message || error;

  const onSubmit: SubmitHandler<IAuthForm> = (data) => mutate(data);

  return (
    <div className="flex min-h-screen">
      <form
        className="m-auto shadow bg-secondary rounded-xl p-layout"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading title="auth" />
        <div className="flex justify-between h-5">
          {(errorForm && <Error>{errorForm}</Error>) || <div />}
          {isPending && <Loader />}
        </div>
        <Field
          id="email"
          label="Email"
          placeholder="Enter email"
          extra="my-4"
          {...register('email')}
        />
        <Field
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          extra="mb-6"
          {...register('password')}
        />
        <div className="flex items-center gap-5 justify-center">
          <Button onClick={() => setIsLogin(true)}>Sign in</Button>
          <Button onClick={() => setIsLogin(false)}>Sign up</Button>
        </div>
      </form>
    </div>
  );
}
