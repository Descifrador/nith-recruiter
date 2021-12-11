import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import {doc, getDocs,query, collection, getFirestore} from 'firebase/firestore'
import './ListPosting.css'

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
           data.push(doc.data())
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
      <div id="header">
        <div id="logo-holder">
          <div id="logo">
            <img src="index.png"/> 
          </div>
        </div>
        <div id="nav" className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#infrastructure">Infrastructure</a>
          <a href="#placement-record">Placement Record</a>
          <a href="#footer">Contact Us</a>
        </div>
      </div>
      <div className="space"></div>

      <div id = "home" className="row"></div>
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
        <h1>Indian Institute of Information Technology</h1>
        <h2 ClassName="aboutHeading">
          is set up at Kalyani,
          Nadia District by Government of India (MHRD), Government of West Bengal and Industry Partners, with an objective
          to produce best-in-class human resources in IT and to harness the multidimensional facets of IT in various domains.
          Presently, the institute is being mentored by Indian Institute of Technology Kharagpur with Prof. Partha P. Chakrabarti, Director, IIT Kharagpur as Mentor Director
          and Prof. Anupam Basu, Professor, Department of Computer Science and Engineering, IIT Kharagpur as Executive Director/Professor-In-Charge.
        </h2>
      </div>
      <div class="about-img">
        
      </div>
    </div>
      <div id="infrastructure" class="section">
      <div class="text-div">
          <h1>Infrastructure</h1>
          <h2>
            The Government of West Bengal has lent support to the institute by granting
            50 acres of land for setting up the Campus.
            While construction has been started in the land provided,
            the institute is presently running from the temporary campus at Webel IT Park, Kalyani.
            The infrastructure of the building is pretty good and sufficient for the functioning of the institution.
            The classrooms alloted for the institution are smart classrooms, which have video conferencing facility.
            Faculties and industry experts from distant locations take classes and interact with the students through video conferencing in the classrooms.
          </h2>
      </div>
      {/* <div class="icons-div">
        <a href="http://iiitkalyani.ac.in/html/Campus.html" class="infra-icon">
          <img src="img/building_blue.svg">
          <span>CAMPUS</span>
        </a>
        <a href="http://iiitkalyani.ac.in/html/Hostel.html" class="infra-icon">
          <img src="img/bunk.svg">
          <span>HOSTEL</span>
        </a>
        <a href="http://iiitkalyani.ac.in/html/Other.html" class="infra-icon">
          <img src="img/cooking.svg">
          <span>CANTEEN</span>
        </a>
        <a href="http://iiitkalyani.ac.in/html/Medical.html" class="infra-icon">
          <img src="img/hospital.svg">
          <span>HOSPITAL</span>
        </a>
        <a href="http://iiitkalyani.ac.in/html/Labs.html" class="infra-icon">
          <img src="img/lab.svg">
          <span>LAB</span>
        </a>
        <a href="http://iiitkalyani.ac.in/html/Library.html" class="infra-icon">
          <img src="img/books.svg">
          <span>LIBRARY</span>
        </a>
      </div> */}
    </div>

      <div id="footer">
        <div id="footer-logo"></div>
        <div id="footer-container-down">
        <div id="footer-address">
          <span class="footer-subsection-heading">
            ADDRESS
          </span>
          <div class="footer-subsection-text">
            Indian Institute of Information Technology, Kalyani
            Webel IT Park (Near Buddha Park), Kalyani,
            Nadia, West Bengal. PIN - 741235.
          </div>
        </div>
        <div id="footer-quick-links">
          <span class="footer-subsection-heading">
            QUICK LINKS
          </span>
          <div class="footer-subsection-text">
            <a href="">E brochure</a>
            <a href="">Faculty Members</a>
            <a href="">Administrative body</a>
            <a href="">Mentor Institute</a>
            <a href="">Anti ragging</a>
            <a href="">Notifications</a>
            <a href="">News and events</a>
            <a href="">IIIT-PPP act</a>
            <a href="">RTI</a>
          </div>
        </div>
        <div id="footer-explore">
          <span class="footer-subsection-heading">
            EXPLORE
          </span>
          <div class="footer-subsection-text">
            <a href="">Facilities</a>
            <a href="">Film and Media Club (FMC)</a>
            <a href="">Symphony (Music club)</a>
            <a href="">Algoholic (Technical club)</a>
            <a href="">How to reach IIIT Kalyani</a>
          </div>
        </div>

        <div id="footer-contact-us">
          <span class="footer-subsection-heading">
            CONTACT US
          </span>
          <div class="footer-subsection-text">
            <a href="">Registrar - registrar@iiitkalyani.ac.in</a>
            <a href="">IIIT Kalyani Office - office@iiitkalyani.ac.in</a>
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
