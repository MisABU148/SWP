import React, {FC} from 'react';

const AddTopic: FC = () => {
    return (
        <div>
            <form>
                <input type="text" value="НАПИШИТЕ ТЕМУ"/>
                <button type="submit">ДОБАВИТЬ</button>
            </form>
        </div>
    );
};

export default AddTopic;