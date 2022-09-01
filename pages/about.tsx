import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface AboutPagrProps {
}

export default function AboutPagr(props: AboutPagrProps) {
    const router = useRouter();
    console.log('about querry: ', router.query);

    useEffect(() => {
        //check query available
    })

    return (
        <div>
            About
        </div>
    );
}

export async function getServerSideProps() {
    return {
        props: {}
    }
}
