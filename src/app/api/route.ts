import {cookies} from 'next/headers';
import {NextResponse} from 'next/server';

export async function POST(request: Request) {
    // login success
    cookies().set({
        name: 'username',
        value: 'John',
        httpOnly: true,
        maxAge: 2592000,
        sameSite: 'strict',
        path: '/',
    });
    console.log('Login success');
    return NextResponse.json({ok: 'ok'});
}