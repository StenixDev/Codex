'use client';

import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { useEffect } from 'react';

export function SuccessToast() {
  const params = useSearchParams();

  useEffect(() => {
    if (params.get('success')) {
      toast.success('Saved!', { id: 'save-toast' });
    }
  }, [params]);

  return null;
}
