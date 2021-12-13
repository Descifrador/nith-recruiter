import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import {
  doc,
  getDocs,
  query,
  collection,
  getFirestore,
} from "firebase/firestore";
import "./ListPosting.css";
import img1 from "./nith.png";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer/Footer";
const ListPosting = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      try {
        const db = getFirestore();
        const docSnap = await getDocs(query(collection(db, "posts")));

        if (docSnap) {
          let data = [];
          docSnap.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() });
          });
          setPosts(data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <div className="container my-5">
        {/* <div id="home" className="row"></div> */}
        <Header />

        <div id="about" class="section">
          <div class="about-text">
            <div style={{ padding: "40px" }}></div>
            <h1>National Institute of Technology Hamirpur</h1>
            <h2 ClassName="aboutHeading">
              is one of the thirty-one NITs of the country, which came into
              existence on 7th August 1986 as Regional Engineering College, a
              joint and cooperative enterprise of the Govt. of India and Govt.
              of Himachal Pradesh.
              <br></br>
              <br></br>
              On 26th June 2002, REC Hamirpur was awarded the status of Deemed
              University and upgraded to National Institute of Technology. NIT
              Hamirpur is an institute of National importance set up by an act
              of Parliament namely the National Institute of Technology Act 2007
              which received the accent of the President of India on 5th June,
              2007.
            </h2>
          </div>
          <div class="about-img">
            <img src={img1}></img>
          </div>
        </div>

        <div id="placement-record" class="section">
          <h1>Placement Statistics</h1>
          <div id="placement-synopsis" style={{ marginLeft: "40%" }}>
            <div id="placement-detail-1">
              <div class="table100 ver5 m-b-110">
                <div class="table100-body js-pscroll">
                  <table style={{ width: "100%" }}>
                    <caption
                      style={{
                        fontSize: "25px",
                        fontWeight: "none",
                        textAlign: "center",
                        backgroundColor: "#204584",
                        color: "white",
                        padding: "7px",
                        textTransform: "uppercase",
                        width: "100%",
                      }}
                    >
                      Placement Statistics
                    </caption>
                    <tbody>
                      <tr class="row100 body">
                        <td class="cell100 column1">
                          No. of Students registered
                        </td>
                        <td class="cell100 column2">600</td>
                        <td
                          class="cell100 column3"
                          style={{ backgroundColor: "#008000" }}
                        ></td>
                      </tr>

                      <tr class="row100 body">
                        <td class="cell100 column1">No. of Job Offers</td>
                        <td class="cell100 column2">590</td>
                        <td
                          class="cell100 column3"
                          style={{ backgroundColor: "#9B59B6" }}
                        ></td>
                      </tr>

                      <tr class="row100 body">
                        <td class="cell100 column1">Highest Package</td>
                        <td class="cell100 column2">2.3 crore</td>
                        <td class="cell100 column3"></td>
                      </tr>

                      <tr class="row100 body">
                        <td class="cell100 column1">Average Package</td>
                        <td class="cell100 column2">30 lpa</td>
                        <td class="cell100 column3"></td>
                      </tr>

                      <tr class="row100 body">
                        <td class="cell100 column1">
                          Students going for Higher Studies
                        </td>
                        <td class="cell100 column2">8</td>
                        <td
                          class="cell100 column3"
                          style={{ backgroundColor: "#F4D03F" }}
                        ></td>
                      </tr>

                      <tr class="row100 body">
                        <td class="cell100 column1">% of students selected</td>
                        <td class="cell100 column2">99%</td>
                        <td
                          class="cell100 column3"
                          style={{ backgroundColor: "darkorange" }}
                        ></td>
                      </tr>

                      <tr class="row100 body">
                        <td class="cell100 column1">
                          Students qualified GATE-2021
                        </td>
                        <td class="cell100 column2">98</td>
                        <td
                          class="cell100 column3"
                          style={{ backgroundColor: "cornflowerblue" }}
                        ></td>
                      </tr>

                      <tr class="row100 body">
                        <td class="cell100 column1">
                          Students qualified CAT-2021
                        </td>
                        <td class="cell100 column2">12</td>
                        <td
                          class="cell100 column3"
                          style={{ backgroundColor: "Chocolate" }}
                        ></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div id="placement-chart">
              <canvas id="mycanvas" width="300" height="300"></canvas>
            </div>
          </div>
          <div class="placement-points">
            <ul>
              <li>
                NIT Hamirpur had a successful placement session during 2019-20.
              </li>
              <li>
                Students got offers from both on-campus and online/off-campus
                selection process.
              </li>
              <li>
                Some students even qualified for GATE and CAT and some have went
                to pursue higher studies in IITs.
              </li>
            </ul>
          </div>
        </div>
        <div id="postings" className="row"></div>
        <div style={{ paddingTop: "100px" }}></div>
        {posts?.map((post, index) => {
          return (
            <div key={index} className="d-flex justify-content-center">
              <div className="col-md-8 col-sm-12">
                <Post post={post} />
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ListPosting;
