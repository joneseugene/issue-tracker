'use client'

import { TextField, TextArea, Button } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div className='max-w- space-y-3'>
        <TextField.Root placeholder="Title..." />
        <SimpleMDE placeholder="Description…" />
        <Button>Submit</Button>
    </div>
  )
}

export default NewIssue