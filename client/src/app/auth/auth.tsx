'use client';

import { authScheme } from '@/schemes/auth.scheme';
import { authService } from '@/services/auth.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/buttons/button';
import { Error } from '@/components/ui/error';
import { Field } from '@/components/ui/fields/field';
import { Heading } from '@/components/ui/heading/heading';
import { Loader } from '@/components/ui/loader/loader';
import { IAuthForm } from '@/types/auth.types';
import { DASHBOARD_PAGES } from '@/config/page-url.config';

export default function Auth() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForm>({ resolver: yupResolver(authScheme) });

  const { push } = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const { mutate, isPending, error } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) =>
      authService.main(isLogin ? 'login' : 'register', data),
    onSuccess: async () => {
      const { toast } = await import('sonner');
      toast.success('Successfully login!');
      reset();
      push(DASHBOARD_PAGES.HOME);
    },
    onError: (error: string) => error,
  });

  const errorForm = errors.email?.message || errors.password?.message || error;

  const onSubmit: SubmitHandler<IAuthForm> = (data) => mutate(data);

  return (
    <div className="flex min-h-screen">
      <form
        className="w-1/4 m-auto shadow bg-sidebar sidebar rounded-xl p-layout"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading title="Auth" />
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
