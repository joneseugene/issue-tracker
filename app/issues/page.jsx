import React from 'react'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'

const Issues = () => {
  return (
    <div>
        <Button>
            <Link href="/issues/new">New</Link>
        </Button>
    </div>
  )
}

export default Issues