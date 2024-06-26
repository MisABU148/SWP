import React, {FC, useState} from 'react';

const ChooseId: FC = () => {
    const arOptions = ['0000', '0001', '0002', '0003'];
    const [value, setValue] = useState('');

    const options = arOptions.map((text, index) => {
        return <option key={index}>{text}</option>;
    });

    return (
        <div>
            <select value={value} onChange={(event) => setValue(event.target.value)}>
                {options}
            </select>
        </div>
    );
};

export default ChooseId;