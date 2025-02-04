import { useCreateSession } from '../hooks/use.create.session';
import { Button } from '@/components/ui/buttons/button';

export function CreateTimerSession() {
  const { createSession, isCreateSessionPending } = useCreateSession();

  return (
    <Button
      onClick={() => createSession()}
      disabled={isCreateSessionPending}
      className="mt-1"
    >
      Create session
    </Button>
  );
}
