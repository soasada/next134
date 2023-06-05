'use client';

import {useRouter} from 'next/navigation';

export default function LoginButton() {
    const router = useRouter();

    return (
        <button type="button"
                onClick={() => fetch('/api', {method: 'POST'}).then(() => router.push('/'))}>
            Login
        </button>
    );
}