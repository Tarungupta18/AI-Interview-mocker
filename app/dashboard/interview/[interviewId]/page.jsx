"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import Webcam from 'react-webcam';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Interview({ params }) {
    const [interviewData, setInterviewData] = useState(null);
    const [webCamEnable, setWebCamEnable] = useState(false);
    useEffect(() => {
        GetInterviewDetails();
    }, []);
    
    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId))
        setInterviewData(result[0]);
        
    }
  return (
      <div className='my-10'>
          <h2 className='font-bold text-2xl'>Let's Get Started</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className='flex flex-col my-5 gap-5'>
                <div className='flex flex-col gap-5 p-5 rounded-lg border'>
              <h2 className='text-lg'><strong>Job Role/Job Position:</strong>{' '}
                    {interviewData ? interviewData.jobPosition : 'Loading...'}</h2>
              <h2 className='text-lg'><strong>Job Description/Tech Stack:</strong>{' '}
                    {interviewData ? interviewData.jobDesc : 'Loading...'}</h2>
              <h2 className='text-lg'><strong>Years of Experience:</strong>{' '}
                    {interviewData ? interviewData.jobExperience : 'Loading...'}</h2>
                </div>
                <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                    <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb/><strong>Information</strong></h2>
                    <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                </div>
          </div>
          <div>
              {webCamEnable ? <Webcam
                  onUserMedia={() => console.log('hello')}
                  onUserMediaError={() => setWebCamEnable(false)}
                  mirrored={true}
                  style={{
                      height: 300,
                      weight:300
                }}
              />
                  :
                  <>
                  <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border' />
                  <Button variant="ghost" className="w-full" onClick={()=>setWebCamEnable(true)}>Enable Web Cam and Microphone</Button>
                  </>
              }
          </div>
          </div>
          <div className='flex justify-end items-end'>
            <Link href={"/dashboard/interview/"+params.interviewId+"/start"}>
              <Button>Start Interview</Button>
            </Link>
          </div>
          
    </div>
  )
}
