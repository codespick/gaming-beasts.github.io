
import React, { useState, useEffect } from 'react'
import Link from 'next/Link';
import InfiniteScroll from 'react-infinite-scroll-component';

const Section = (props) => {

    return (



        <>

        </>
    )
}

export async function getStaticProps(context) {
    let data = await fs.promises.readdir("gamescard");
    let allCount = data.length
    let myfile;
    let allblogs = [];
    for (let index = 0; index < 3; index++) {
        const item = data[index];
        // console.log(item);
        myfile = await fs.promises.readFile(("gamescard/" + item), "utf-8");
        allblogs.push(JSON.parse(myfile))

    }
    return {
        props: { allblogs, allCount }
    }
}

export default Section