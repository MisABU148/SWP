import React, { FC, useState } from 'react';

const AddTopic: () => JSX.Element = () => {
    const [topic, setTopic] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(e.target.value);
        //console.log(topic);
    };

    const send = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!topic.trim()) {
            alert('Please enter a topic');
            return;
        }

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            setTopic(''); // Clear the input field
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='add-topic'>
            <h3>Добавить тему: </h3>
            <form onSubmit={send}>
                <input
                    id="new-topic"
                    type="text"
                    placeholder="НАПИШИТЕ ТЕМУ"
                    value={topic}
                    onChange={handleChange}
                />
                <button type="submit">ДОБАВИТЬ</button>
            </form>
        </div>
    );
};

export default AddTopic;
