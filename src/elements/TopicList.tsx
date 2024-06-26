import React, {FC} from 'react';
import {TopicItem} from "../types/TopicItem";

interface TopicListProps {
    topics: TopicItem[]
}

const TopicList:FC<TopicListProps> = ({topics}) => {
    return (
        <div>
            {topics.map(topic =>
                <div key={topic.id}>{topic.name}</div>
            )}
        </div>
    );
};

export default TopicList;