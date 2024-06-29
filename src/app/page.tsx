"use client";
import React, {useState} from 'react';
import "@/styles/main_page.css";
import StudentGroup from "@/components/StudentGroup";
import ChooseId from "@/components/ChooseId";
import AddTopic from "@/components/AddTopic";
import TopicListApi from "@/components/TopicListAPI";

const App = () => {
    const [type, setType] = useState<string>('');

    const handleSelectType = (selectedType: string) => {
        setType(selectedType);
    };

    return (
        <body>
        <header>MathHelper</header>
        <main>
            <div className='hernia'>
            </div>
            <div className='panel'>
                <StudentGroup onSelectType={handleSelectType}/>
                <div className='choose-id'>
                    <h3>Выберите ID {type === 'student' ? 'участника' : 'группы'}: </h3>
                    <ChooseId/>
                </div>
                <div className='add-topic'>
                    <h3>Темы {type === 'student' ? 'участника' : 'группы'} ID: </h3>
                    <TopicListApi/>
                </div>
                <AddTopic/>
            </div>
        </main>
        </body>
    );
};

export default App;