'use client';

import { useGetProfile } from '@/hooks/use.get.profile';
import styles from './profile.module.scss';

export function Profile() {
  const { data, isLoading } = useGetProfile();

  return (
    <div className="flex items-center flex-col gap-4 p-layout h-44">
      {isLoading ? (
        <>
          <div className={styles['skeleton-avatar']}></div>
          <div className="w-40 flex flex-col gap-4">
            <div className={styles['skeleton-text']}></div>
            <div className={styles['skeleton-text']}></div>
          </div>
        </>
      ) : (
        <>
          <div className="h-12 w-12 rounded-full bg-white/5 flex justify-center items-center">
            {data?.user.name?.charAt(0) || 'X'}
          </div>
          <div className="w-40">
            <p className="font-bold text-center overflow-hidden overflow-ellipsis">
              {data?.user.name}
            </p>
            <p className="opacity-40 text-center overflow-hidden overflow-ellipsis">
              {data?.user.email}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
