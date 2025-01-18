import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation';
import { usePlaidLink } from 'react-plaid-link';
import { createLinkToken } from '@/lib/actions/user.action';

interface PlaidLinkOptions {
    token: string;
    onSuccess: (public_token: string) => void;
}

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);  
            setToken(data?.linkToken);  
        }

        getLinkToken();
    }, [user]);

    const onSuccess = useCallback(async (public_token: string) => {
        // await exchangePublicToken({  
        //     publicToken: public_token,  
        //     user,  
        // });  

        router.push('/');
    }, [user]);

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
    };

    const {open, ready} = usePlaidLink(config);

    return (
        <>
            {variant === 'primary' ? (
                <Button onClick={() => open()} disabled={!ready} className='plaidlink-primary'>
                    Connect bank
                </Button>
            ) : variant === 'ghost' ? (
                <Button>
                    Connect bank
                </Button>
            ) : (
                <Button>
                    Connect bank
                </Button>
            )}
        </>
    )
}

export default PlaidLink
