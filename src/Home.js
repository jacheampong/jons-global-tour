import React from 'react';
import Demo from './components/common/demo';

export default function Home() {
    return (
        <>
            <main>
                <h2>Simple React App served by NGINX and Docker</h2>
                <Demo />
            </main>
        </>
    )
}