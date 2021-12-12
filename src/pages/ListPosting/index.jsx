import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import {doc, getDocs,query, collection, getFirestore} from 'firebase/firestore';
import './ListPosting.css';
import img1 from './nith.png';
import nithlogo from './NIT_Hamirpur_logo.png';
const ListPosting = () => {

  const [posts,setPosts] = useState();

  useEffect(()=>{
    (async ()=>{
      try{
        const db = getFirestore();
        const docSnap = await getDocs(query(collection(db, "posts")));
  
        if(docSnap){
         let data = [];
          docSnap.forEach(doc=>{
           data.push({id: doc.id,...doc.data()})
         }) 
         setPosts(data);
        }
      }catch(err){
        console.log(err);
      }
    })()

  },[])

  return (
    <div className="container my-5">
      <div id = "home" className="row"></div>
      <div id="header">
        <div id="logo-holder">
          <div id="logo" style={{height:"50px", display: "flex", alignItems: "center"}}>
            <img src={nithlogo} style={{height: "90%", width: "auto"}}/> 
          </div>
        </div>
        <div id="nav" className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#placement-record">Placement Record</a>
          <a href="#footer">Contact Us</a>
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
      </div>
        {posts?.map((post, index) => {
          return (
            <div key={index} className="d-flex justify-content-center">
              <div className="col-md-8 col-sm-12">
                
                  <Post post={post} />
            
              </div>
            </div>
          );
        })}
      <div id="about" class="section">
      <div class="about-text">
        <h1>National Institute of Technology Hamirpur</h1>
        <h2 ClassName="aboutHeading">
         is one of the thirty-one NITs of the country, which came into existence on 7th August 1986 as Regional Engineering College, 
         a joint and cooperative enterprise of the Govt. of India and Govt. of Himachal Pradesh.
        <br></br>
        <br></br>
        On 26th June 2002, REC Hamirpur was awarded the status of Deemed University and upgraded to National Institute of Technology. 
        NIT Hamirpur is an institute of National importance set up by an act of Parliament namely the National Institute of Technology Act 2007 which received the accent of the President of India on 5th June, 2007. 
        </h2>
      </div>
      <div class="about-img">
        <img src={img1}></img>
      </div>
    </div>
    
    <div id="placement-record" class="section">
      <h1>Placement Statistics</h1>
      <div id="placement-synopsis">
      	<div id="placement-detail-1">
      		<div class="table100 ver5 m-b-110">

      			<div class="table100-body js-pscroll">
						<table style={{width:"100%"}}>
							<caption style={{fontSize: "25px", fontWeight: "none", textAlign: "center", backgroundColor: "#204584", color: "white", padding: "7px", textTransform: "uppercase", width: "100%"}}>Placement Statistics</caption>
							<tbody>
								<tr class="row100 body">
									<td class="cell100 column1">No. of Students registered</td>
									<td class="cell100 column2">600</td>
									<td class="cell100 column3" style={{backgroundColor: "#008000"}}></td>
								</tr>

								<tr class="row100 body">
									<td class="cell100 column1">No. of Job Offers</td>
									<td class="cell100 column2">590</td>
									<td class="cell100 column3" style={{backgroundColor: "#9B59B6"}}></td>
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
									<td class="cell100 column1">Students going for Higher Studies</td>
									<td class="cell100 column2">8</td>
									<td class="cell100 column3" style={{backgroundColor: "#F4D03F"}}></td>
								</tr>

								<tr class="row100 body">
									<td class="cell100 column1">% of students selected</td>
									<td class="cell100 column2">99%</td>
									<td class="cell100 column3" style={{backgroundColor: "darkorange"}}></td>
								</tr>

								<tr class="row100 body">
									<td class="cell100 column1">Students qualified GATE-2018</td>
									<td class="cell100 column2">98</td>
									<td class="cell100 column3" style={{backgroundColor: "cornflowerblue"}}></td>
								</tr>

								<tr class="row100 body">
									<td class="cell100 column1">Students qualified CAT-2018</td>
									<td class="cell100 column2">12</td>
									<td class="cell100 column3" style={{backgroundColor: "Chocolate"}}></td>
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
          <li>NIT Hamirpur had a successful placement session during 2017-18.</li>
          <li>Students got offers from both on-campus and online/off-campus selection process.</li>
          <li>Some students even qualified for GATE and CAT and some have went to pursue higher studies in IITs.</li>
        </ul>
      </div>
    </div>

      <div id="footer">
        <div id="footer-logo"></div>
        <div id="footer-container-down">
        <div id="footer-address">
          <span class="footer-subsection-heading">
            ADDRESS
          </span>
          <div class="footer-subsection-text">
          National Institute of Technology Hamirpur,
          Himachal Pradesh, Pin No. 177005, India.
          </div>
        </div>
        <div id="footer-quick-links">
          <span class="footer-subsection-heading">
            QUICK LINKS
          </span>
          <div class="footer-subsection-text">
            <a href="">E brochure</a><br></br>
            <a href="">Faculty Members</a><br></br>
            <a href="">Administrative body</a><br></br>
            <a href="">Mentor Institute</a><br></br>
            <a href="">Anti ragging</a><br></br>
            <a href="">Notifications</a><br></br>
            <a href="">News and events</a><br></br>
          </div>
        </div>
        <div id="footer-explore">
          <span class="footer-subsection-heading">
            EXPLORE
          </span>
          <div class="footer-subsection-text">
            <a href="">Facilities</a><br></br>
            <a href="">Nimbus</a><br></br>
            <a href="">Hill Fair</a><br></br>
            <a href="">How to reach NIT Hamipur</a><br></br>
          </div>
        </div>

        <div id="footer-contact-us">
          <span class="footer-subsection-heading">
            CONTACT US
          </span>
          <div class="footer-subsection-text">
            <a href="">Phone No. : +91-01972-254011</a><br></br>
            <a href="">Email : registrar@nith.ac.in</a><br></br>
            <a href="">Fax : +91-1972-223834</a><br></br>
          </div>
          <div id="footer-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
            <i class="fas fa-at"></i>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ListPosting;
