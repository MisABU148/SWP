import React, {FC, useState} from 'react';

interface StudentGroupProps  {
    onSelectType: (type: string) => void;
}
const StudentGroup: FC<StudentGroupProps> = ({ onSelectType }) => {
    const [tapS, setIsTapS] = useState('#FFFFFF');
    const [tapG, setIsTapG] = useState('#FFFFFF');

    function choose_student() {
        setIsTapS('#CDCDFF');
        setIsTapG('#FFFFFF');
        onSelectType('student');
    }

    function choose_group() {
        setIsTapG('#CDCDFF');
        setIsTapS('#FFFFFF');
        onSelectType('group');

    }

    return (
        <div>
            <div className='choose-type'>
                <h3>Выберите: </h3>
                <button onClick={choose_student} style={{background: tapS}}>Участник</button>
                <button onClick={choose_group} style={{background: tapG}}>Группа</button>
            </div>
        </div>
    );
};
export default StudentGroup;