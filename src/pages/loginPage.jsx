import { useNavigate } from 'react-router-dom';

function LoginPage(){
    const navigate = useNavigate();

    const handleLogin = () => {
        // Prented login succeeded
        navigate('/dashboard');
        // To navigate to the previous path
        // navigate(-1);
    };

    return(
        <div>
            <h1>Login</h1>
            <p>Click to simulate a login</p>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginPage;