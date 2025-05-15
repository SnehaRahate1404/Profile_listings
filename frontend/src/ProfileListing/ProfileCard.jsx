import './ProfileCard.css'
import { Link } from 'react-router-dom';

export default function ProfileCard({ user }) {
    return (
        <div className="card">
            <img src={`/${user.avatar}`} className="card-img-top" alt={user.name} />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.description}</p>
                <Link to={`/ProfilePage/${user._id}`} className="btn btn-primary">View Profile</Link>
            </div>
        </div>
    );
}