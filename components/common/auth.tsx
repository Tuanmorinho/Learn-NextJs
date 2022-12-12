import { useAuth } from 'hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface IAuthProps {
    children: any
}

export function Auth({ children }: IAuthProps) {

    const router = useRouter();
    const { profile, firstLoading } = useAuth();

    useEffect(() => {
        if (!firstLoading && !profile) router.push('/login')
    }, [router, profile, firstLoading]);

    if (!profile) return <div>Loading...</div>

    return (<div>{ children }</div>);
}
