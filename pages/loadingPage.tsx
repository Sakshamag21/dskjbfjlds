import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { recoilSessionState } from '../pkg/recoilDeclarations';

const LoadingPage: NextPage = () => {
    const router = useRouter()
    const [session] = useRecoilState(recoilSessionState);
    useEffect(() => {
        if(session === undefined) {
            router.push('./verify')
        }
        else {
            router.push('./')
        }
    })
    return(
        <div>
            Hello
        </div>
    )
}

export default LoadingPage