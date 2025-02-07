'use client'

import { TextField, TextArea, Button } from '@radix-ui/themes'
import React from 'react'
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

interface IssueForm {
    title: string;
    description: string
}

const NewIssue = () => {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();
  return (
    <form className='max-w- space-y-3' onSubmit={handleSubmit(async(data) => {
      await axios.post('/api/issues', data);
      router.push('/issues')
    })}>
        <TextField.Root placeholder="Title..." {...register('title')}/>
        <Controller
            name="description" control={control} render={({ field }) => <SimpleMDE placeholder="Description…" {...field} /> }
        />
        <Button>Submit</Button>
    </form>
  )
}

export default NewIssue