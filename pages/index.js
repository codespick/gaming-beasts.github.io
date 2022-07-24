let callofduty = "/image/call-of-duty-black-ops.jpg";
import React, { useState, useEffect } from "react";
import Link from "next/Link";
import InfiniteScroll from "react-infinite-scroll-component";
// import  fs from "fs"
// import "dotenv"

import * as fs from "fs";
function HomeIndex(props) {
  const [gamesCard, setGamesCard] = useState(props.allblogs);
  const [count, setCount] = useState(3);
  // useEffect(() => {
  //    // console.log(gamesCard);
  //    // console.log("use effect is running");
  //    fetch(`http://localhost:3000/api/home-games-card?count=${count + 2}`).then((a) => { return a.json() }).then((parsed) => {
  //       // console.log(parsed);
  //       setGamesCard(parsed)
  //    })
  // }, [])

  let fetchData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // let d = await fetch(`http://localhost:3000/api/home-games-card?count=${count + 3}`);

    let d = await fetch(
      process.env.NODE_ENV === "production"
        ? `<http://localhost:3000/api/home-games-card?count=${count + 3}>`
        : `<http://192.168.43.19:3000/api/home-games-card?count=${count + 3}>`
    );
    // (process.env.NODE_ENV === "production") {
    //    `<http://localhost:3000/api/home-games-card?count=${count + 3}>`
    // }

    let data = await d.json();
    setCount(count + 3);
    setGamesCard(data);
  };

  return (
    <>
      <main>
        <div id="section" className="item">
          <div className="carousel">
            <input
              type="radio"
              name="carousel"
              id="1"
              defaultChecked="checked"
              className="carousel__activator"
            />
            <input
              type="radio"
              name="carousel"
              id="2"
              className="carousel__activator"
            />
            <input
              type="radio"
              name="carousel"
              id="3"
              className="carousel__activator"
            />
            <input
              type="radio"
              name="carousel"
              id="4"
              className="carousel__activator"
            />
            <input
              type="radio"
              name="carousel"
              id="5"
              className="carousel__activator"
            />
            <div className="carousel__controls">
              <label
                htmlFor="5"
                className="carousel__control carousel__control--previous"
              ></label>
              <label
                htmlFor="2"
                className="carousel__control carousel__control--next"
              ></label>
            </div>
            <div className="carousel__controls">
              <label
                htmlFor="1"
                className="carousel__control carousel__control--previous"
              ></label>
              <label
                htmlFor="3"
                className="carousel__control carousel__control--next"
              ></label>
            </div>
            <div className="carousel__controls">
              <label
                htmlFor="2"
                className="carousel__control carousel__control--previous"
              ></label>
              <label
                htmlFor="4"
                className="carousel__control carousel__control--next"
              ></label>
            </div>
            <div className="carousel__controls">
              <label
                htmlFor="3"
                className="carousel__control carousel__control--previous"
              ></label>
              <label
                htmlFor="5"
                className="carousel__control carousel__control--next"
              ></label>
            </div>
            <div className="carousel__controls">
              <label
                htmlFor="4"
                className="carousel__control carousel__control--previous"
              ></label>
              <label
                htmlFor="1"
                className="carousel__control carousel__control--next"
              ></label>
            </div>
            <div className="carousel__track">
              <div className="carousel__slide">
                <img
                  src={"/image/call-of-duty-black-ops.jpg"}
                  loading="lazy"
                  alt="call of duty black ops"
                />
              </div>
              <div className="carousel__slide">
                <img
                  src={"/image/Hitman-2.jpg"}
                  loading="lazy"
                  alt="hitman 2"
                />
              </div>
              <div className="carousel__slide">
                <img
                  className="img3"
                  src={"/image/fast-and-furious.jpg"}
                  loading="lazy"
                  alt="fast furious showdown"
                />
              </div>
              <div className="carousel__slide">
                <img
                  src={"/image/freedom-fighter.jpg"}
                  loading="lazy"
                  alt="freedom fighter 7"
                />
              </div>
              <div className="carousel__slide">
                <img
                  className="img5"
                  src={"/image/trialfusion.jpg"}
                  loading="lazy"
                  alt="trial fusion"
                />
              </div>
            </div>

            <div className="carousel__indicators">
              <label htmlFor="1" className="carousel__indicator"></label>
              <label htmlFor="2" className="carousel__indicator"></label>
              <label htmlFor="3" className="carousel__indicator"></label>
              <label htmlFor="4" className="carousel__indicator"></label>
              <label htmlFor="5" className="carousel__indicator"></label>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="card-columns">
            <style jsx>
              {`
                .fa-solid,
                .fas {
                  font-family: "Font Awesome 6 Free";
                  font-weight: 500;
                }
              `}
            </style>

            {gamesCard.map((blogItems) => {
              let myLoader = ({ src, width, quality }) => {
                return src, width, quality;
              };
              return (
                <InfiniteScroll
                  dataLength={gamesCard.length} //This is important field to render the next data
                  next={fetchData}
                  // hasMore={true}
                  hasMore={props.allCount !== gamesCard.length}
                  // loader={<h4 style={{ color: "red" }}>Loading...</h4>}
                  // endMessage={
                  //    <p style={{ textAlign: 'center' }}>
                  //       <b>Yay! You have seen it all</b>
                  //    </p>
                  // }
                  key={blogItems.slug}
                  //
                >
                  <div className="card">
                    {/* <a href={blogItems.slug}> */}
                    <img
                      width={370}
                      height={225}
                      className="card-img-top"
                      src={blogItems.main_image}
                      alt={blogItems.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{blogItems.title}</h5>
                      {/* <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...
         </p> */}

                      <p
                        className="card-text"
                        style={{
                          color: props.colorMode === "dark" ? "white" : "black",
                        }}
                      >
                        <i className="fas fa-eye"></i>
                        {process.browser && localStorage.clickcount}{" "}
                        <span style={{ color: "green" }}>By Admin </span> -{" "}
                        <i className="fas fa-calendar-alt"></i>Jan 20, 2018
                      </p>
                      <Link href={"blogpost/" + blogItems.slug}>
                        <div className="col-lg-12">
                          <button
                            type="button"
                            className="btn btn-lg btn-primary"
                          >
                            <span className="glyphicon glyphicon-globe"></span>
                            visit
                          </button>
                        </div>
                      </Link>
                    </div>
                    {/* </a> */}
                  </div>
                </InfiniteScroll>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("gamescard");
  let allCount = data.length;
  let myfile;
  let allblogs = [];
  for (let index = 0; index < 3; index++) {
    const item = data[index];
    // console.log(item);
    myfile = await fs.promises.readFile("gamescard/" + item, "utf-8");
    allblogs.push(JSON.parse(myfile));
  }
  return {
    props: { allblogs, allCount },
  };
}

// export async function getServerSideProps(context) {
//    console.log('====================================');
//    const router = useRouter();
//    // const [blog, setBlog] = useState()
//    const { slug } = router.query;
//    console.log(context);
//    console.log('====================================');
//    let data = await fetch(`http://localhost/api/home-games-card`)
//    let myProps = data.json()

//    return {
//       props: { myProps }, // will be passed to the page component as props
//    }
// }

export default HomeIndex;
