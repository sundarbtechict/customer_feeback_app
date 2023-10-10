import { useState, useEffect } from 'react';
import api from "../api/feedback";


const useFetchFeedbacks = () => {
    const [feedbackList, setFeedbackList] = useState([]);

    const fetchFeedbacks = async ()=>{
        const response = await api.get('/feedbacks');
        console.log(response.data)
        setFeedbackList(response.data);
    }


    useEffect(()=>{
        fetchFeedbacks();
    },[])

    return feedbackList;
}

export default useFetchFeedbacks;