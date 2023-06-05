'use client';

type HeaderProps = {
    username?: string
}

export default function Header({username}: HeaderProps) {
    console.log('Header username', username);
    return (
        <>
            {username ? <>{`Hi, ${username}`}</> : <>Unauthorized</>}
        </>
    );
}