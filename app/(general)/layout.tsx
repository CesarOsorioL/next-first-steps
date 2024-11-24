import React from "react";
import { Navbar } from '../components';

export default function GeneralLayout({
    children
}:{children: React.ReactNode;}){
    return(
        <>
            <Navbar />
            <main>
                <div>
                    <h1>Hello Root Layout About</h1>
                    {children}
                </div>
            </main>
        </>
    )
}