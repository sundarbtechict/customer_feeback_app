import React, { useState } from 'react';
import { feedbackIntialValue } from '../constants';
import { useNavigate } from 'react-router-dom';
import api from "../api/feedback";


const Guestpage = () => {
    const [feedbackdata, setFeedbackData] = useState(feedbackIntialValue);
    const navigate = useNavigate();

    const feedbackDataOnchange = (field,value)=>{
        setFeedbackData({...feedbackdata, [field]:value})
    }

    const reset = ()=> setFeedbackData(feedbackIntialValue);

    const onSubmit = async(e)=>{
        console.log(feedbackdata)
        e.preventDefault();
        if(feedbackdata.name==="" || feedbackdata.email==='' || feedbackdata.company==="" || feedbackdata.Comment===""){
            alert("All fields are mandatory");
            return;
        }
        const data = {...feedbackdata, id: Math.random()}
        const resposnse =  await api.post("/feedbacks", data);
        console.log(resposnse);
        if(resposnse.status==201){
            reset();
            navigate('/success')
        }
        else{
            alert(resposnse.statusText)
        }

    }

  return (
    <div className='w-full'>
        <div className=' mt-10 mx-auto w-[40%] p-4'>
            <div className=' font-semibold text-xl py-2 text-center'>
                Submit Your Feedback
            </div>
            <div className=' pt-4'>
                <form name='feedbackForm'>
                    <div className='py-2'>
                        <label className=' text-sm'>Name:</label>
                        <input name='name' className=' feedback-input' onChange={(e)=> feedbackDataOnchange ('name', e.target.value)}></input>
                    </div>
                    <div className='py-2'>
                        <label className=' text-sm'>Email:</label>
                        <input name='email' className=' feedback-input' onChange={(e)=> feedbackDataOnchange ('email', e.target.value)}></input>
                    </div>
                    <div className='py-2'>
                        <label className=' text-sm'>Company:</label>
                        <input name='company' className=' feedback-input' onChange={(e)=> feedbackDataOnchange ('company', e.target.value)}></input>
                    </div>
                    <div className='py-2'>
                        <label className=' text-sm'>Comments:</label>
                        <textarea name='comment' className=' feedback-input' onChange={(e)=> feedbackDataOnchange ('comment', e.target.value)}></textarea>
                    </div>
                    <div className='py-4 text-center'>
                        <button onClick={onSubmit} className=' rounded-full px-6 py-1 bg-green-600 text-white'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Guestpage