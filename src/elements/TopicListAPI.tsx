import React, {FC, useEffect, useState} from 'react';
import {TopicItem} from "../types/TopicItem";
import axios from "axios";
import TopicList from "./TopicList";

const TopicListApi:FC= () => {
    const [topic, setTopic]  = useState<TopicItem[]>([]);
    

    useEffect(() => {
        fetchTopic()
    }, [])

    async function fetchTopic() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users') //есть еще какой-то fetch, может вообще по другому надо я хз
            setTopic(response.data)
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div className='topics'>
            <TopicList topics={topic}/>
        </div>
    );
};

export default TopicListApi;