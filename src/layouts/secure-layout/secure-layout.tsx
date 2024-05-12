import { useAtom } from 'jotai';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfoAtom } from '../../store/global-atoms';

interface SecureLayoutProps {
    children: JSX.Element;
}


const SecureLayout = (props: SecureLayoutProps) => {

    const [userInfo] = useAtom(userInfoAtom)
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            return navigate('/auth')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo])

    return props.children;
}

export default SecureLayout