import { useNavigate } from 'react-router-dom'

export const Contact = ( { message} ) => {
    const navigate = useNavigate();
    return (
        <div>
            <p>Contactです、{ message }</p>
            <button onClink={() => navigate('/about')}>about</button>
        </div>
    );
}
