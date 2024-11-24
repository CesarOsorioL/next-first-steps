import { Metadata } from "next";

export const metadata: Metadata ={
    title:'SEO Title',
    description: 'SEO Description',
    keywords:['About Page','Fernando']
}


export default function AboutPage(){
    return (
        <>
            <span>About</span>
        </>
    )
}