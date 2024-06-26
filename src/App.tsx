import React, {useState} from 'react';
import "./styles/main_page.css"
import "./elements/StudentGroup.tsx"
import StudentGroup from "./elements/StudentGroup";
import ChooseId from "./elements/ChooseId";
import AddTopic from "./elements/AddTopic";
import TopicListApi from "./elements/TopicListAPI";

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
                    <div className='choose-type'>
                        <h3>Выберите: </h3>
                        <StudentGroup onSelectType={handleSelectType}/>
                    </div>
                    <div className='choose-id'>
                        <h3>Впишите ID {type === 'student' ? 'участника' : 'группы'}: </h3>
                        <ChooseId/>
                    </div>
                    <div className='add-topic'>
                        <h3>Темы {type === 'student' ? 'участника' : 'группы'} ID: </h3>
                        <TopicListApi/>
                    </div>
                    <div className='add-topic'>
                        <h3>Добавить тему: </h3>
                        <AddTopic/>
                    </div>
                </div>
            </main>
        </body>
    );
};

export default App;