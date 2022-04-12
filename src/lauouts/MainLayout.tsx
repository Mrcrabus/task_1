import React, {FC} from 'react';
import Logo from '../assests/Logo.svg'

const MainLayout: FC = ({children}) => {
    return (
        <div className={'flex justify-center items-center flex-col w-[760px] m-auto'}>
            <div className={'m-5 '}><img src={Logo} alt="..."/></div>
            <div>{children}</div>

        </div>
    );
};

export default MainLayout;
