'use client'

import { TextField, TextArea, Button } from '@radix-ui/themes'
import React from 'react'

const NewIssue = () => {
  return (
    <div className='max-w- space-y-3'>
        <TextField.Root placeholder="Title..." />
        <TextArea placeholder="Description…" />
        <Button>Submit</Button>
    </div>
  )
}

export default NewIssue