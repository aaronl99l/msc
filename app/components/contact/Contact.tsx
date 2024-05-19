'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
    return (
        <div style={{
            backgroundColor: "black"
        }}>   
            
            <form onSubmit={ handleSubmit(onSubmit) }
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-black dark:bg-black-500">
                
                <h1 className="text-2xl font-bold dark:text-gray-50">
                    Contact
                </h1>

                
                <label
                    htmlFor="name"
                    className="text-gray-500 font-light mt-8 dark:text-gray-50">
                    Full name<span className="text-black-500 dark:text-gray-50">*</span>
                </label>
                <input
                    type="text"
                    placeholder='Full Name'
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-500 font-light text-gray-500"
                    {...register('email', {required: true})}
                />
                

                <label
                    htmlFor="email"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50">
                    E-mail<span className="text-gray-500">*</span>
                </label>
                <input
                    type="email"
                    placeholder="email@email.com"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-500 font-light text-gray-500"
                    {...register('email', {required: true})}
                />
                

                <label
                    htmlFor="subject"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50">
                    Subject<span className="text-gray-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="subject"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-500 font-light text-gray-500"
                    {...register('email', {required: true})}    
                />

                
                <label
                    htmlFor="message"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50">
                    Message<span className="text-gray-500">*</span>
                </label>
                <textarea
                    placeholder="Ask us!"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-500 font-light text-gray-500"
                    {...register('message', {required: true})}
                ></textarea>
                
                <div className="flex flex-row items-center justify-start">
                    <button
                    type="submit"
                    className="px-10 mt-8 py-2 bg-[red] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                    
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-cyan-500 ml-2"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                        fill="white"/>
                    </svg>
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Contact;