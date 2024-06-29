import React, {FC, useEffect, useState} from 'react';
import {TopicItem} from "../types/TopicItem";
import axios from "axios";
import TopicList from "./TopicList";

const TopicListApi:() => JSX.Element= () => {
    const [topic, setTopic]  = useState<TopicItem[]>([]);


    useEffect(() => {
        fetchTopic()
    }, [])

    async function fetchTopic() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTopic(response.data)
        } catch (e) {
            alert(e);
        }
    }

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            // setTopics(topics.filter((topic) => topic.id !== id));
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className='topics'>
            <TopicList topics={topic}  onDelete={handleDelete}/>
        </div>
    );
};

export default TopicListApi;