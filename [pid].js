import { useRouter } from "next/router";
import Head from "next/head";
// import Image from "next/image";
import React, { useEffect, useState } from 'react'
// import * as fs from "fs"
import Link from 'next/Link';
import * as fs from "fs"


const pid = (props) => {

    const router = useRouter();
    // let sample = {
    //     props: props.myProps
    // }
    // console.log(myProps);
    // const { slug } = router.query;
    const [blog, setBlog] = useState(props.myBlog)
    const [count, setCount] = useState(1)

    const getAnswer = async () => {
        let mainData = await fetch(`http://localhost:3000/api/set-1gb-to-5gb-games?count=${count}`)
        let fullDataInJson = await mainData.json();
        setCount(count + 1)
        let AsJsonData = fullDataInJson
        setBlog(AsJsonData)
        // console.log(AsJsonData);
    }
    useEffect(() => {
        if (!router.isReady) return;

        getAnswer()
    }, [router.isReady]);

    let practiceJson = async () => {

        let data = await fs.promises.readdir("1GbTo5GbGames");
        let allCount = data.length
        let myfile;
        let allblogs = [];
        for (let index = 0; index < 3; index++) {
            const item = data[index];
            // console.log(item);
            myfile = await fs.promises.readFile(("1GbTo5GbGames/" + item), "utf-8");
            allblogs.push(JSON.parse(myfile))
        }

        console.log('====================================');
        console.log(allblogs);
        console.log('====================================');
    }

    practiceJson()
    return (<>
        {/* <GamingStyle /> */}

        <div id="content" className="site-content container">
            <div id="main-content-row" className="tie-row main-content-row">
                {
                    blog && blog.map((value) => {
                        // console.log(value.title);

                        return (

                            // <InfiniteScroll
                            //     dataLength={blog.length} //This is important field to render the next data
                            //     next={getAnswer}
                            //     // hasMore={true}
                            //     hasMore={props.allCount !== blog.length}
                            //     // loader={<h4 style={{ color: "red" }}>Loading...</h4>}
                            //     // endMessage={
                            //     //    <p style={{ textAlign: 'center' }}>
                            //     //       <b>Yay! You have seen it all</b>
                            //     //    </p>
                            //     // }
                            //     key={value.slug}
                            // >

                            <div key={value.slug}>

                                <div className="main-content tie-col-md-8 tie-col-xs-12" role="main">


                                    <article id="the-post" className="container-wrapper post-content tie-standard">


                                        <header className="entry-header-outer">

                                            <div className="entry-header">

                                                <h1 className="post-title entry-title">{value.title}</h1>

                                            </div>



                                        </header>


                                        <div className="entry-content entry clearfix">


                                            <p><span style={{ fontWeight: " 400" }}>{value.first_para}</span></p>

                                            <h3><span className="ez-toc-section" id="What_is_the_game_about"></span><b>What is the game
                                                about?</b><span className="ez-toc-section-end"></span></h3>
                                            <p><span style={{ fontWeight: "400" }}>Mater, one of Disney Pixar Cars&#8217; key characters, is
                                                hosting a national race event. This race is open to racers from all over the world who
                                                want to take on Lightning McQueen. The game has numerous racing competitions in which
                                                players can compete against new characters. Players can also explore the world of
                                                Radiator Springs and Lightning McQueen&#8217;s racing headquarters in addition to
                                                racing. Players can play the video game version of Disney Pixar Cars, if watching the
                                                cars race isn&#8217;t your thing then you can participate by racing. </span></p>
                                            <h3><span className="ez-toc-section" id="Gameplay"></span><b>Gameplay</b><span
                                                className="ez-toc-section-end"></span></h3>
                                            <p><span style={{ fontWeight: "400" }}>Mater forgets his words while reporting an event on
                                                television, which causes some uncertainty in the gameplay. Lightning McQueen hosted the
                                                event in Radiator Springs to commemorate the completion of his new racing stadium and
                                                headquarters. Mater completely disregards the content and refers to it as the
                                                &#8220;Mater-National Championship.&#8221; </span></p>
                                            <p><span style={{ fontWeight: "400" }}>Players will be taught a range of methods and controls that
                                                will aid them in the racing competition, which will feature 5 to 9 competitors per race.
                                                There are various types of races, such as road races, stadium races, rustbucket races,
                                                and many others. Accelerate; brake, e-brake, and steer are among the basic controls
                                                available, while power slide, tilt, jump, and boost are among the advanced controls
                                                available. Apart from the racing, the players can participate in a variety of
                                                mini-games.</span></p>
                                            <h3><span className="ez-toc-section" id="Features_of_the_game"></span><b>Features of the
                                                game</b><span className="ez-toc-section-end"></span></h3>
                                            <p><span style={{ fontWeight: "400" }}>The third installment in the Cars video game franchise is
                                                Disney Pixar Cars: Mater-National Championship. The input obtained for the previous
                                                edition of this game was used to produce this installment, which addresses the issues
                                                from the prior version. The features that make this game fun to play are listed
                                                below.</span></p>
                                            <p><img alt="" width="150" height="150"
                                                data-srcset="https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-150x150.jpg 150w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-300x300.jpg 300w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-585x585.jpg 585w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-24x24.jpg 24w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-48x48.jpg 48w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-96x96.jpg 96w"
                                                data-src="https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-150x150.jpg"
                                                data-sizes="(max-width: 150px) 100vw, 150px"
                                                className="aligncenter size-thumbnail wp-image-1644 lazyload"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img
                                                    className="aligncenter size-thumbnail wp-image-1644"
                                                    src="https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-150x150.jpg"
                                                    alt="" width="150" height="150"
                                                    srcSet="https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-150x150.jpg 150w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-300x300.jpg 300w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-585x585.jpg 585w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-24x24.jpg 24w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-48x48.jpg 48w, https://gamingbeasts.com/wp-content/uploads/2021/01/New-monsters-and-demons-96x96.jpg 96w"
                                                    sizes="(max-width: 150px) 100vw, 150px" /></noscript><b></b></p>
                                            <ul>
                                                <li style={{ textAlign: "center" }} aria-level="1"><b>Monster Truck</b></li>
                                            </ul>
                                            <p style={{ textAlign: "center" }}><span style={{ fontWeight: "400" }}>Disney Pixar Cars: Mater-National
                                                Championship includes monster truck race. Players can race with monster trucks in a
                                                monster truck race as well as the open world. Other activities are included in the side
                                                objective, including monster truck racing, which is a new addition to the game. This
                                                monster truck race is one of the optional side objectives that players must complete to
                                                progress in the game. </span></p>
                                            <p style={{ textAlign: "center" }}><img alt="" width="150" height="150"
                                                data-srcset="https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-150x150.png 150w, https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-24x24.png 24w, https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-48x48.png 48w, https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-96x96.png 96w, https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice.png 225w"
                                                data-src="https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-150x150.png"
                                                data-sizes="(max-width: 150px) 100vw, 150px"
                                                className="aligncenter size-thumbnail wp-image-4101 lazyload"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img
                                                    className="aligncenter size-thumbnail wp-image-4101"
                                                    src="https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-150x150.png"
                                                    alt="" width="150" height="150"
                                                    srcSet="https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-150x150.png 150w, https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-24x24.png 24w, https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-48x48.png 48w, https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice-96x96.png 96w, https://gamingbeasts.com/wp-content/uploads/2021/03/Designation-Choice.png 225w"
                                                    sizes="(max-width: 150px) 100vw, 150px" /></noscript><b></b></p>
                                            <ul style={{ textAlign: "center" }}>
                                                <li aria-level="1"><b>Physics</b></li>
                                            </ul>
                                            <p style={{ textAlign: "center" }}><span style={{ fontWeight: "400" }}>The cars featured in Cars: With
                                                one exception, the cars in Cars: Mater-National Championship share comparable qualities
                                                to those in the previous game. The physics have been tweaked to make it seem a little
                                                heavier, making it easier to slide out of the corner. The difference between on-road and
                                                off-road driving is also evident, and the game&#8217;s tracks are better developed.
                                            </span></p>
                                            <p style={{ textAlign: "center" }}><img alt="" width="150" height="150"
                                                data-srcset="https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-150x150.png 150w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-300x300.png 300w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-24x24.png 24w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-48x48.png 48w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-96x96.png 96w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters.png 512w"
                                                data-src="https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-150x150.png"
                                                data-sizes="(max-width: 150px) 100vw, 150px"
                                                className="aligncenter size-thumbnail wp-image-856 lazyload"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img
                                                    className="aligncenter size-thumbnail wp-image-856"
                                                    src="https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-150x150.png"
                                                    alt="" width="150" height="150"
                                                    srcSet="https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-150x150.png 150w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-300x300.png 300w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-24x24.png 24w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-48x48.png 48w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters-96x96.png 96w, https://gamingbeasts.com/wp-content/uploads/2021/01/Female-characters.png 512w"
                                                    sizes="(max-width: 150px) 100vw, 150px" /></noscript><b></b></p>
                                            <ul style={{ textAlign: "center" }}>
                                                <li aria-level="1"><b>Special Guests</b></li>
                                            </ul>
                                            <p style={{ textAlign: "center" }}><span style={{ fontWeight: "400" }}>Two special visitors appear in
                                                Cars: Mater-National Championship to offer interest to the gameplay. Characters are
                                                vital in keeping a game going smoothly, and the producers have hand-picked a few special
                                                guests to participate in this tournament. Mike and Sulley from Monster Trucks Inc.
                                                appear as special guests in this game.</span></p>
                                            <p style={{ textAlign: "center" }}><img alt="" width="150" height="150"
                                                data-srcset="https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-150x150.jpg 150w, https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-24x24.jpg 24w, https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-48x48.jpg 48w, https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-96x96.jpg 96w, https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes.jpg 225w"
                                                data-src="https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-150x150.jpg"
                                                data-sizes="(max-width: 150px) 100vw, 150px"
                                                className="aligncenter size-thumbnail wp-image-846 lazyload"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img
                                                    className="aligncenter size-thumbnail wp-image-846"
                                                    src="https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-150x150.jpg"
                                                    alt="" width="150" height="150"
                                                    srcSet="https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-150x150.jpg 150w, https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-24x24.jpg 24w, https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-48x48.jpg 48w, https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes-96x96.jpg 96w, https://gamingbeasts.com/wp-content/uploads/2021/01/Gaming-modes.jpg 225w"
                                                    sizes="(max-width: 150px) 100vw, 150px" /></noscript><b></b></p>
                                            <ul style={{ textAlign: "center" }}>
                                                <li aria-level="1"><b>Mini-games</b></li>
                                            </ul>
                                            <p style={{ textAlign: "center" }}><span style={{ fontWeight: "400" }}>In Cars: Mater-National
                                                Championship, there are approximately 20 mini-games. Apart from participating in the
                                                racing competition, players can enjoy these games. Tractor Tipping, Ramone&#8217;s
                                                Rhythmic Rumble, Law&#8217;s Race &#8216;n&#8217; Chase, Fillmore&#8217;s Fuel Frenzy,
                                                Mike and Sulley&#8217;s Last Laugh, and many more mini-games. Each of these mini-games
                                                has its own set of objectives for players to complete.</span></p>
                                            <p style={{ textAlign: "center" }}><img alt="" width="150" height="150"
                                                data-srcset="https://gamingbeasts.com/wp-content/uploads/2020/12/content-150x150.png 150w, https://gamingbeasts.com/wp-content/uploads/2020/12/content-300x300.png 300w, https://gamingbeasts.com/wp-content/uploads/2020/12/content-24x24.png 24w, https://gamingbeasts.com/wp-content/uploads/2020/12/content-48x48.png 48w, https://gamingbeasts.com/wp-content/uploads/2020/12/content-96x96.png 96w, https://gamingbeasts.com/wp-content/uploads/2020/12/content.png 512w"
                                                data-src="https://gamingbeasts.com/wp-content/uploads/2020/12/content-150x150.png"
                                                data-sizes="(max-width: 150px) 100vw, 150px"
                                                className="aligncenter size-thumbnail wp-image-621 lazyload"
                                                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img
                                                    className="aligncenter size-thumbnail wp-image-621"
                                                    src="https://gamingbeasts.com/wp-content/uploads/2020/12/content-150x150.png" alt=""
                                                    width="150" height="150"
                                                    srcSet="https://gamingbeasts.com/wp-content/uploads/2020/12/content-150x150.png 150w, https://gamingbeasts.com/wp-content/uploads/2020/12/content-300x300.png 300w, https://gamingbeasts.com/wp-content/uploads/2020/12/content-24x24.png 24w, https://gamingbeasts.com/wp-content/uploads/2020/12/content-48x48.png 48w, https://gamingbeasts.com/wp-content/uploads/2020/12/content-96x96.png 96w, https://gamingbeasts.com/wp-content/uploads/2020/12/content.png 512w"
                                                    sizes="(max-width: 150px) 100vw, 150px" /></noscript><b></b></p>
                                            <ul style={{ textAlign: "center" }}>
                                                <li aria-level="1"><b>Bonus content</b></li>
                                            </ul>
                                            <p style={{ textAlign: "center" }}><span style={{ fontWeight: "400" }}>This feature in Cars:
                                                Mater-National Championship allows players to use their Bonus Points to purchase various
                                                unlockable content. These bonus points will be available to players while playing in
                                                storey mode, arcade mode, or versus mode. There are also choices to purchase a
                                                character&#8217;s paint job, character and environment concept work, and some other
                                                miscellaneous art.</span></p>
                                            <p><span style={{ fontWeight: "400" }}>Disney Pixar Cars: Mater-National Championship is an
                                                addictive game that will transport you back to your childhood. This game&#8217;s
                                                gameplay is simple to grasp, making it appropriate for children as young as five years
                                                old.</span></p>
                                            <h2 style={{ textAlign: "center" }}><span className="ez-toc-section"
                                                id="Disney_Pixar_Cars_Mater-National_Championship_PC_Game_Download"></span>Disney Pixar
                                                Cars Mater-National Championship PC Game Download<span className="ez-toc-section-end"></span>
                                            </h2>
                                            <figure className="wp-block-table is-style-stripes">
                                                <table className="has-fixed-layout">
                                                    <tbody>
                                                        <tr>
                                                            <th>Name</th>
                                                            <td>Disney Pixar Cars Mater-National Championship</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Initial Release Date</th>
                                                            <td>29 October 2007</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Platforms</th>
                                                            <td>
                                                                <div className="wDYxhc" lang="en-IN"
                                                                    data-attrid="kc:/cvg/computer_videogame:platform" data-md="1001"
                                                                    data-hveid="CDcQAA"
                                                                    data-ved="2ahUKEwiy2eyuyNH0AhX-zzgGHbpaAEcQkCl6BAg3EAA">
                                                                    <div className="Z1hOCe">
                                                                        <div className="zloOqf PZPZlf"
                                                                            data-ved="2ahUKEwiy2eyuyNH0AhX-zzgGHbpaAEcQyxMoAHoECDcQAQ">
                                                                            <div className="rVusze">Wii, PlayStation 2, Microsoft Windows, Game
                                                                                Boy Advance, Xbox 360, Nintendo DS, PlayStation 3</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Developer</th>
                                                            <td>Rainbow Studios, THQ, Incinerator Studios, Tantalus Media</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Publisher</th>
                                                            <td><a href="https://gamingbeasts.com/tag/the-walt-disney-company/">The Walt
                                                                Disney Company</a>, <a href="https://gamingbeasts.com/tag/thq/">THQ</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Series</th>
                                                            <td>Cars</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Genres</th>
                                                            <td>Racing Video Game, Racing</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Category</th>
                                                            <td>PC Games &gt;<a
                                                                href="https://gamingbeasts.com/category/pc-games/racing/">Racing</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </figure>
                                            <p style={{ textAlign: "center" }} data-wp-editing="1"><img alt="" width={435} height={609}
                                                data-src="https://gamingbeasts.com/wp-content/uploads/2022/03/CrashMetal-–-Cyberpunk-pc-dvd.jpg"
                                                className="aligncenter wp-image-16849  ls-is-cached lazyloaded"
                                                src="https://gamingbeasts.com/wp-content/uploads/2022/03/CrashMetal-–-Cyberpunk-pc-dvd.jpg" /><noscript><img
                                                    className="aligncenter wp-image-16849 "
                                                    src="https://gamingbeasts.com/wp-content/uploads/2022/03/CrashMetal-–-Cyberpunk-pc-dvd.jpg"
                                                    alt="" width="435" height="609" /></noscript>This download is 100% Free and Hosted
                                                on the Fastest Cloud Server.</p>


                                            <p style={{ textAlign: "center" }}><a
                                                href="https://gamingbeasts.com/disney-pixar-cars-mater-national-championship-download/"><button
                                                    className="dlbtn">Download Now</button></a></p>

                                            <script async
                                                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6729587265115810"
                                                crossOrigin="anonymous"></script>
                                            <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-6729587265115810"
                                                data-ad-slot="2805988329" data-ad-format="link" data-full-width-responsive="true"></ins>
                                            <script>
                                                (adsbygoogle = window.adsbygoogle || []).push({ });
                                            </script>


                                            <h3><span className="ez-toc-section"
                                                id="How_To_Download_Disney_Pixar_Cars_Mater-National_Championship_PC_Instructions"></span><strong>How
                                                    To Download Disney Pixar Cars Mater-National Championship PC Instructions</strong><span
                                                        className="ez-toc-section-end"></span></h3>
                                            <ul>
                                                <li><strong>Step 1</strong>: Click On Download Button,You will be redirected to our download
                                                    page</li>
                                                <li><strong>Step 2</strong>: Click On Download Disney Pixar Cars Mater-National Championship
                                                    PC Button</li>
                                                <li><strong>Step 3</strong>: Your Download Will Start Free Installer Officially Created From
                                                    GamingBeasts.com</li>
                                                <li><strong>Step 4</strong>: Download &amp; Install The File &amp; Then You Will Be Able To
                                                    Install The Game</li>
                                                <li><strong>Step 5</strong>: With Good Internet Connection, It Will Be Easy To Download The
                                                    Game</li>
                                                <li><strong>Step 6</strong>: After Completing The Installation You Can Disney Pixar Cars
                                                    Mater-National Championship PC For free</li>
                                            </ul>

                                            <h4><span className="ez-toc-section"
                                                id="Disney_Pixar_Cars_Mater-National_Championship_-_Minimum_System_Requirement"></span><strong>Disney
                                                    Pixar Cars Mater-National Championship – Minimum System Requirement</strong><span
                                                        className="ez-toc-section-end"></span></h4>
                                            <ul>
                                                <li>Memory: 512 MB</li>
                                                <li>Graphics Card: ATI FireGL T2-128</li>
                                                <li>CPU: Intel Pentium 4 1.60GHz</li>
                                                <li>File Size: 2 GB</li>
                                                <li>OS: Windows 2000/XP/Vista</li>
                                            </ul>
                                            <h4><span className="ez-toc-section"
                                                id="Disney_Pixar_Cars_Mater-National_Championship_-_Recommended_System_Requirement"></span><strong>Disney
                                                    Pixar Cars Mater-National Championship – Recommended System Requirement</strong><span
                                                        className="ez-toc-section-end"></span></h4>
                                            <ul>
                                                <li>OS: Windows 2000/XP/Vista</li>
                                                <li>Processor: Pentium 4 or Athlon XP 1.6GHz Processor</li>
                                                <li>Memory: 512 MB RAM</li>
                                                <li>Graphics: 64MB DirectX 9.0c Compatible Video Card</li>
                                                <li>DirectX: Version 9.0c</li>
                                                <li>Storage: 2 GB available space</li>
                                                <li>Sound Card: 16-Bit DirectX 9.0c Compatible Sound Card</li>
                                            </ul>
                                            <h3><span className="ez-toc-section" id="FAQs"></span><b>FAQs</b><span
                                                className="ez-toc-section-end"></span></h3>
                                            <section className="sc_fs_faq sc_card">
                                                <div>
                                                    <h4><span className="ez-toc-section"
                                                        id="How_many_mini-games_are_there_in_Cars_Mater-National_Championship"></span>How
                                                        many mini-games are there in Cars: Mater-National Championship?<span
                                                            className="ez-toc-section-end"></span></h4>
                                                    <div>
                                                        <p>
                                                            There are 20 mini-games present in this game. </p>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className="sc_fs_faq sc_card">
                                                <div>
                                                    <h4><span className="ez-toc-section"
                                                        id="Which_year_was_Cars_Mater-National_Championship_released"></span>Which year
                                                        was Cars: Mater-National Championship released?<span
                                                            className="ez-toc-section-end"></span></h4>
                                                    <div>
                                                        <p>
                                                            This game was released in the year 2007. </p>
                                                    </div>
                                                </div>
                                            </section>
                                            <section className="sc_fs_faq sc_card">
                                                <div>
                                                    <h4><span className="ez-toc-section"
                                                        id="How_much_space_is_required_for_Cars_Mater-National_Championship"></span>How
                                                        much space is required for Cars: Mater-National Championship?<span
                                                            className="ez-toc-section-end"></span></h4>
                                                    <div>
                                                        <p>
                                                            This game requires about 2 GB of storage space. </p>
                                                    </div>
                                                </div>
                                            </section>







                                        </div>

                                        <div id="post-extra-info">
                                            <div className="theiaStickySidebar">
                                            </div>
                                        </div>

                                        <div className="clearfix"></div>

                                    </article>


                                    <div className="post-components">




                                    </div>


                                </div>


                                <aside className="sidebar tie-col-md-4 tie-col-xs-12 normal-side is-sticky" aria-label="Primary Sidebar">
                                    <div className="theiaStickySidebar">
                                        <div id="search-2" className="container-wrapper widget widget_search">
                                            <div className="widget-title the-global-title has-block-head-4">
                                                <div className="the-subtitle">Search Games</div>
                                            </div>
                                            <form role="search" method="get" className="search-form" action="https://gamingbeasts.com/">
                                                <label style={{ marginRight: "-20%" }}>
                                                    <span className="screen-reader-text">Search for:</span>
                                                    <input type="search" className="search-field" placeholder="Search &hellip;" value=""
                                                        name="s" />
                                                </label>
                                                <input type="submit" className="search-submit" readOnly="Search" />
                                            </form>
                                            <div className="clearfix"></div>
                                        </div>



                                    </div>
                                </aside>




                            </div>
                            // </InfiniteScroll>


                        )
                    })

                }
            </div>
        </div>




    </>);
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "crashmetal-cyberpunk-free-pc-game-download" } }
        ],
        fallback: true // false or 'blocking'
    };
}
export async function getStaticProps(context) {
    // let data = await fs.promises.readdir("1GbTo5GbGames");
    // let allCount = data.length
    // let myfile;
    // let allblogs = [];
    // for (let index = 0; index < 3; index++) {
    //     const item = data[index];
    //     // console.log(item);
    //     myfile = await fs.promises.readFile(("1GbTo5GbGames/" + item), "utf-8");
    //     allblogs.push(JSON.parse(myfile))

    // }
    // return {
    //     props: { allblogs, allCount }
    // }
    const data = await fetch(`https://api.tvmaze.com/shows/${params.slug}`)
    const myBlog = await data.json()

    return {
        props: {
            myBlog
        }
    }

}




// export async function getServerSideProps(context) {
//     console.log('====================================');
//     // const router = useRouter();
//     // const [blog, setBlog] = useState()
//     // const { slug } = context.query;
//     // console.log(req.query);
//     console.log('====================================');
//     let data = await fetch(`http://localhost:3000/api/set-1gb-to-5gb-games`)
//     let myProps = await data.json()

//     return {
//         props: { myProps }, // will be passed to the page component as props
//     }
// }

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

export default pid