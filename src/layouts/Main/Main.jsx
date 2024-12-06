
import { Outlet } from 'react-router-dom';
import Container from '../UI/Container';
import Footer from '../../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <Container>
            <Outlet />
            <Footer/>
        </Container>
    );
};

export default Main;