'use client';

import { Button } from '@/components/ui/button';

export default function Error({error, reset}:{error:Error, reset:()=>void}) {
  return (
    <div>
      <h1 className='mb-3'>{error.message}</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
