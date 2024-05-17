import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom'
import { userInfoAtom } from '../../store/global-atoms';

interface SecureLayoutProps {
    children?: any;
}


const SecureLayout = (props: SecureLayoutProps) => {

    const [userInfo] = useAtom(userInfoAtom)
    const navigate = useNavigate();

    if (userInfo === null || userInfo === undefined) {
       return navigate('/auth')
    }

    return props.children;
}

export default SecureLayout