import { useRouter } from "next/router";
import Head from "next/head";
import React, { useEffect, useState } from 'react'
// import * as fs from "fs"
import Link from 'next/Link';
import InfiniteScroll from 'react-infinite-scroll-component';
const slug1 = (props) => {

    const router = useRouter();
    // let sample = {
    //     props: props.myProps
    // }
    // console.log(myProps);
    // const { slug } = router.query;
    const [blog, setBlog] = useState()
    const [count, setCount] = useState(3)

    const getAnswer = async () => {
        let mainData = await fetch(`http://localhost:3000/api/all-page-contents?count=${count}`)
        let fullDataInJson = await mainData.json();
        setCount(count + 3)
        let AsJsonData = fullDataInJson
        setBlog(AsJsonData)
        // console.log(AsJsonData);
    }
    useEffect(() => {
        if (!router.isReady) return;
        getAnswer();
    }, [router.isReady]);

    // console.log(blog && blog.title);


    return (<>
        {/* <h1>{blog && blog.title}</h1> */}

        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        </Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossOrigin="anonymous"></script>
        <main>


            <div className="container mt-2">
                <div className="row">

                    {
                        blog && blog.map((value) => {
                            return (
                                <div className="column">
                                    <InfiniteScroll
                                        dataLength={blog.length} //This is important field to render the next data
                                        next={getAnswer}
                                        // hasMore={true}
                                        hasMore={props.allCount !== blog.length}
                                        // loader={<h4 style={{ color: "red" }}>Loading...</h4>}
                                        // endMessage={
                                        //    <p style={{ textAlign: 'center' }}>
                                        //       <b>Yay! You have seen it all</b>
                                        //    </p>
                                        // }
                                        key={value.slug}
                                    >
                                        {/* <div className="col-md-3 col-sm-6 item"> */}
                                        <div className="column col-md-3 item">

                                            <div className="card item-card card-block">
                                                <img loading="lazy" src={value.main_image}
                                                    alt="Photo of sunset" />
                                                <div className="card_content">
                                                    <h2 className="card_title">{value.title}</h2>
                                                    <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                                    <button className="btn1 card_btn">Read More</button>
                                                </div>
                                            </div>
                                        </div>





                                    </InfiniteScroll>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </main>

        {/* <div>{blog && blog.first_paragraph}</div>

        <img width={"100px"} height={"100px"} src={blog && blog.main_image} alt={blog && blog.altTag} />
        <h1>{blog && blog.slug}</h1> */}

        {/* {
            blog.map((value) => {
                return (
                    <>
                        <div className="main">
                            <ul className="cards">
                                <li className="cards_item">
                                    <div className="card">
                                        <div className="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
                                        <div className="card_content">
                                            <h2 className="card_title">{value.title}</h2>
                                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                            <button className="btn1 card_btn">Read More</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </>
                )
            })
        } */}

        {/* <div className="main">
            <ul className="cards">
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
                        <div className="card_content">
                            <h2 className="card_title">{blog && blog.title}</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                            <button className="btn1 card_btn">Read More</button>
                        </div>
                    </div>
                </li>
            </ul>

        </div> */}
    </>);
}

// export async function getStaticProps(context) {
//     let data = await fs.promises.readdir("pagecontents");
//     let allCount = data.length
//     let myfile;
//     let allblogs = [];
//     for (let index = 0; index < 3; index++) {
//         const item = data[index];
//         // console.log(item);
//         myfile = await fs.promises.readFile(("pagecontents/" + item), "utf-8");
//         allblogs.push(JSON.parse(myfile))

//     }
//     return {
//         props: { allblogs, allCount }
//     }
// }

export async function getServerSideProps(context) {
    console.log('====================================');
    // const router = useRouter();
    // const [blog, setBlog] = useState()
    // const { slug } = context.query;
    // console.log(req.query);
    console.log('====================================');
    let data = await fetch(`http://localhost:3000/api/all-page-contents`)
    let myProps = await data.json()

    return {
        props: { myProps }, // will be passed to the page component as props
    }
}

// return { props: { myProps } }
// let data = await fs.promises.readdir("pagecontents");
// let allCount = data.length
// let myfile;
// let allblogs = [];
// for (let index = 0; index < 3; index++) {
//     const item = data[index];
//     // console.log(item);
//     myfile = await fs.promises.readFile(("pagecontents/" + item), "utf-8");
//     allblogs.push(JSON.parse(myfile))

// }
// return {
//     props: { allblogs, allCount }
// }

export default slug1