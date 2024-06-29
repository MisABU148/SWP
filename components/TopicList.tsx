import React, { FC } from 'react';
import { TopicItem } from "@/types/TopicItem";

interface TopicListProps {
    topics: TopicItem[];
    onDelete: (id: number) => void;
}

const TopicList: FC<TopicListProps> = ({ topics, onDelete }) => {
    return (
        <div>
            {topics.map(topic => (
                <div key={topic.id}>
                    {topic.name}
                    <button onClick={() => onDelete(topic.id)}>Удалить</button>
                </div>
            ))}
        </div>
    );
};

export default TopicList;
