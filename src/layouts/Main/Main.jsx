
import { Outlet } from 'react-router-dom';
import Container from '../UI/Container';

const Main = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};

export default Main;