
import { Outlet } from 'react-router-dom';
import Container from '../UI/Container';
import Footer from '../../pages/Shared/Footer/Footer';
import MainNavbar from './MainNavbar';

const Main = () => {
    return (
        <Container>
            <MainNavbar/>
            <Outlet />
            <Footer/>
        </Container>
    );
};

export default Main;