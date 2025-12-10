import { useParams } from 'react-router-dom';

function UserPage(){
    const { username } = useParams();
    return (
        <div>
            <h1>User Profile</h1>
            <p>Showing profile info for: {username}</p>
        </div>
    )
}

export default UserPage;