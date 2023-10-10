import React, { useEffect, useState } from 'react';
import api from "../api/feedback";


const Adminpage = () => {

    const [feedbackList, setFeedbackList] = useState([]);

    const fetchFeedbacks = async ()=>{
        const response = await api.get('/feedbacks');
        console.log(response.data)
        setFeedbackList(response.data);
    }


    useEffect(()=>{
        fetchFeedbacks();
    },[])

  return (
    <div className='w-full'>
        <div className=' mx-auto mt-8 w-[70%] p-4'>
            <div className=' font-semibold text-xl py-4 text-center'>
                Customer Comments
            </div>
            {
                !feedbackList.length ? 
                    <div className='text-center mt-6 font-semibold'> Loading...</div>
                :
                <div className='py-4'>
                    {
                    feedbackList.map((item)=> <div className='my-4 rounded border border-gray-100 shadow-md '>
                    <div className='px-4 '>
                        <div className=' font-semibold pb-1'> {item.name}</div>
                        <div className='flex items-center gap-1'>
                            <div className=' font-semibold text-xs'> {item.company}</div>
                            <div className=' font-semibold text-xs'>&#x2022;</div>
                            <div className=' font-semibold text-xs'> {item.email}</div>
                        </div>
                    </div>
                    <div className='py-2 px-4'>
                    {item.comment}
                    </div>
                    </div>)
                    }
                </div>
            }
        </div>
    </div>

  )
}

export default Adminpage