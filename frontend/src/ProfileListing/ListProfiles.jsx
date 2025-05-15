// ProfileList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

export default function ProfileList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users') // Make sure this endpoint returns all users
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="profile-list">
            {users.map(user => (
                <ProfileCard key={user._id} user={user} />
            ))}
        </div>
    );
}
