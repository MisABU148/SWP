import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
}

const ChooseId: () => JSX.Element = () => {
    const [value, setValue] = useState<string>('');
    const [ids, setIds] = useState<User[]>([]);

    useEffect(() => {
        fetchIds();
    }, []);

    async function fetchIds() {
        try {
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
            setIds(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <select value={value} onChange={(event) => setValue(event.target.value)}>
                <option value="">Выберите ID</option>
                {ids.map((user) => (
                    <option key={user.id} value={user.id.toString()}>
                        {user.id}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ChooseId;
