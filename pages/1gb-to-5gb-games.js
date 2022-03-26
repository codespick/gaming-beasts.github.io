import Head from "next/head";
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/Link';
import TopBar from "../components/TopBar";


const OneGbTo15Gb_Games = (props) => {
    const router = useRouter();
    const [blog, setBlog] = useState()
    const [count, setCount] = useState(4)
    const getAnswer = async () => {
        let mainData = await fetch(`http://localhost:3000/api/set-1gb-to-5gb-games?count=${count}`)
        let fullDataInJson = await mainData.json();
        setCount(count + 4)
        let AsJsonData = fullDataInJson
        setBlog(AsJsonData)
        // console.log(AsJsonData);
    }

    useEffect(() => {
        if (!router.isReady) return;
        getAnswer()
    }, 500);

    return (
        <>
            <Head>
                <title>GamingBeast - Racing Games under 1gb to 5gb</title>
            </Head>

            <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous"></script>
            <div className="container mt-2">
                <div className="row">

                    {
                        blog && blog.map((value) => {
                            return (
                                <div key={value.slug} className="column">
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


                                    >
                                        {/* <div className="col-md-3 col-sm-6 item"> */}
                                        <div className="column col-md-3 item">

                                            <div className="all_cards card item-card card-block">
                                                <img src={value.main_image}
                                                    alt="Photo of sunset" />
                                                <div className="card_content">
                                                    <h2 className="card_title">{value.title}</h2>
                                                    {/* <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p> */}
                                                    <Link href={value.slug}>
                                                        <button className="btn1 card_btn">
                                                            Read More
                                                        </button>
                                                    </Link>
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

            <TopBar />
        </>
    )
}

export async function getServerSideProps(context) {
    console.log('====================================');
    // const router = useRouter();
    // const [blog, setBlog] = useState()
    // const { slug } = context.query;
    // console.log(req.query);
    console.log('====================================');
    let data = await fetch(`http://localhost:3000/api/set-1gb-to-5gb-games`)
    let myProps = await data.json()

    return {
        props: { myProps }, // will be passed to the page component as props
    }
}

export default OneGbTo15Gb_Games