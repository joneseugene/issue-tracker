'use client'

import { TextField, Callout, Button, Text, Spinner } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from "@/app/validationSchema";
import { z } from "zod";
import { ErrorMessage } from "@/app/components/ErrorMessage";

type IssueForm = z.infer<typeof createIssueSchema>
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

const NewIssue = () => {
  const router = useRouter();
  const {register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });

  const [ error, setError ] = useState('');
  const [ isSubmitting, setSubmitting ] = useState('');
  
  return (
    <div className="max-w-xl">
        {error && (
          <Callout.Root color="red" className="mb-5">
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}
        <form className='space-y-3' onSubmit={handleSubmit(async(data) => {
          try {
            setSubmitting(true)
          await axios.post('/api/issues', data);
          router.push('/issues')
          } catch (error) {
            setSubmitting(false)
            console.log(error)
            setError('An unexpected error occurred');
          }
          
          })}>
            <TextField.Root placeholder="Title..." {...register('title')}/>
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
            <Controller
                name="description" control={control} render={({ field }) => <SimpleMDE placeholder="Description…" {...field} /> }
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
            <Button disabled={isSubmitting}>Submit Issue {isSubmitting && <Spinner />}</Button>
        </form>
    </div>
  )
}

export default NewIssue