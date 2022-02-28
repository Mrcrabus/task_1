import React, {FC} from 'react';
import {Container, Image} from 'react-bootstrap';
import Logo from '../assests/Logo.svg'

const MainLayout: FC = ({children}) => {
    return (
        <Container className={'d-flex flex-column align-items-center justify-content-center  m-5 '}>
            <div><Image src={Logo} alt="..."/></div>
            <div>{children}</div>

        </Container>
    );
};

export default MainLayout;
