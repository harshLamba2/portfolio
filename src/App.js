import {useState, useRef} from 'react';
import axios from 'axios';
import './'
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";


function Portfolio(){

const [queryName, setQueryName]=useState('');
const [queryEmail, setQueryEmail]=useState('');
const [queryNumber, setQueryNumber]=useState('');
const [query, setQuery]=useState('');

const [validationPoints, setValidationPoints]=useState('');

const phoneNumberPattern = /^[6-9]\d{9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const nameInput=useRef(null);
const emailInput=useRef(null);
const numberInput=useRef(null);
const queryInput=useRef(null);

const disableAll=()=>{
    nameInput.current.disabled=true
    emailInput.current.disabled=true
    numberInput.current.disabled=true
    queryInput.current.disabled=true
}

const [enableSubmit, setEnableSubmit]=useState(false);
const [submisionStatus, setSubmisionStatus]=useState(false);
const [loader, setLoader]=useState(false);

const checkEnable=()=>{


    if(queryName!=='' && emailPattern.test(queryEmail) && phoneNumberPattern.test(queryNumber) && query!==''){
        setValidationPoints('')
        setEnableSubmit(true);
    }else{
        setEnableSubmit(false);
    }
}



const sendQuery=()=>{
    
    setLoader(true);
    axios.post('/query_profile',{name:queryName, email:queryEmail, number:queryNumber, query:query })
    .then((res)=>{
    setSubmisionStatus(true);
    setLoader(false);
    disableAll()
})
.catch((err)=>{ 
    alert(`Request coudn't be cent`);
    console.log(err)
});
}



function focusElement(elem){
    
const targetElement = document.getElementById(elem);
console.log(targetElement)
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}





return(
    <div className="container-fluid main_container">
    <div className="row navigation">
      <nav className="navbar navbar-expand fixed-top">
        <span className="navbar-brand brand ps-3 text-white">
          Portfolio.
        </span>

        <div className="collapse navbar-collapse w-100 d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-3">

            <li className="nav-item active" onClick={()=>focusElement('about_sec')}> ABOUT</li> 
            <li className="nav-item active border_it" onClick={()=>focusElement('product_sec')}>PROJECTS</li>
            <li className="nav-item active" onClick={()=>focusElement('contact_sec')}>CONTACT</li>
          </ul>
        </div>
      </nav>
    </div>
    
    <div className="row information ">
      <div className="col-12  text-center mb-2">
        <img alt='profilePicture' src="/portfolio_images/profile2.jpg" className="profile rounded-circle me-5" />
        <div className="icon text-light">
          <a href="https://www.linkedin.com/in/harsh-lamba-1b185b214" target="_blank" rel="noreferrer">
            <FaLinkedin className='ps-sm-4 ps-0 r_icon'/>
          </a>
          <br />
          <a href="https://github.com/lambaharsh01" target="_blank" rel="noreferrer">
            <FaGithub className='ps-sm-4 ps-0 r_icon'/>
          </a>
          <br />
          <a href="https://wa.link/zfpu97" target="_blank" rel="noreferrer">
            <FaWhatsapp className='ps-sm-4 ps-0 r_icon'/>
            <br />
          </a>
          <a href="tel:8287868558" rel="noreferrer">
            <FaPhoneAlt className='ms-0 ms-sm-4 '/>
          </a>
        </div>
        <div className="col-12 text-center text-white mt-4 pb-3">
          <h1 className="border-bottom">HARSH LAMBA</h1>
          <h5 >MERN STACK DEVELOPER</h5>
        </div>
        <span  id='about_sec'></span>
      </div>
    </div>
    {/* about me */}
    <div className="row mt-5 p-3 ">



















    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main-timeline">
                    <div class="timeline">
                        <span class="timeline-content">
                            <div class="timeline-year">2023-24</div>
                            <h3 class="title">Node Js Developer</h3>
                            <h6 class="title">Manthan IT Solutions</h6>
                            <span className='techStackHeading'>02/2023 to Present</span>
                            <p class="description mb-2">
                            As a Node.js Developer working with Oracle DB and MySQL, I worked closely with teams to create optimized systems, ensuring error-free solutions. I consistently worked hard to contribute to the company's success.
                            </p>
                            <span className='techStack mt-3'><span className='techStackHeading'>Tech Stack: </span>Node Js, Oracle 19C, MySQL, EJS, JQuery</span>
                        </span>
                    </div>


                    <div class="timeline">
                        <span class="timeline-content">
                            <div class="timeline-year">2022-23</div>
                            <h3 class="title">Web Development Trainee/ Intern</h3>
                            <h6 class="title">VSIT</h6>
                            <span className='techStackHeading'>07/2022 to 02/2023</span>
                            <p class="description mb-2">
                            At VSIT, I learned web designing and created responsive/dynamic websites using the MERN Stack Framework.
                            </p>
                            <span className='techStack mt-3'><span className='techStackHeading'>Tech Stack: </span> React, Node Js, MongoDB, MySQL</span>
                        </span>
                    </div>

                    <div class="timeline">
                        <span class="timeline-content">
                            <div class="timeline-year">2019-22</div>
                            <h3 class="title">Graduation</h3>
                            <h6 class="title">Delhi University</h6>
                            <span className='techStackHeading'>05/2019 to 06/2022</span>
                            <p class="description mb-2">
                            I graduated from Delhi University with honors in Geography. As Vice President of the Departmental Society 'Shivalik' and an active member of the Debating Society 'Dictum', I played a key role in managing various college events.
                            </p>
                        </span>
                    </div>


                </div>
            </div>
        </div>
    </div>
    </div>



{/* PROJECTS SECTION START */}
{/* PROJECTS SECTION START */}
{/* PROJECTS SECTION START */}

    <div className="row p-1 mt-5 text-light projectDiv">
      <h2 className="text-center pb-3 pt-3 border-bottom mb-3"> PROJECTS </h2>
      <br/>

      <div className="col-sm-4 p-1 text-center mb-3">
      <h5 className="pt-3">MERN Stack/ E-Commerse</h5>
          <img alt="ecomProject" src="/portfolio_images/eCom.jpg" className="w-100 project"  />
      </div>
      
      <div className="col-sm-4 p-1 text-center mb-3">
      <h5 className="pt-3">MERN Stack/ ToDo</h5>
          <img alt="toDoApp" src="/portfolio_images/toDoApp.jpg" className="w-100 project"/>
      </div>

      <div className="col-sm-4 p-1 text-center mb-3">
      <h5 className="pt-3">BOOTSTRAP</h5>
        <a
          href="https://github.com/lambaharsh01/Wood-furniture-page-"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="woodProject" src="/portfolio_images/project1.jpg" className="w-100 project" />
        </a>
      </div>
      
    </div>


{/* PROJECTS SECTION END */}
{/* PROJECTS SECTION END */}
{/* PROJECTS SECTION END */}




{/* CONTACT SECTION START */}
{/* CONTACT SECTION START */}
{/* CONTACT SECTION START */}

    <div className="row mt-5 ">

      <div className="col-sm-6 p-2 content_align_down mb-4">

<div className='w-100 h-100 border_when_small p-2' >

        <h3>Get In Touch</h3>
        <p>
          You can contact me any day of the week I'd be
          happy to help you with any of your queries.
        </p>
        <i className="fa-solid fa-phone"></i><FaPhoneAlt/> 8287868558
        <br />
        <i className="fa-solid fa-envelope "></i><MdOutlineAlternateEmail/> lambaharsh01@gmail.com | lambaharsh0101@gmail.com
      </div>
      </div>

      <div className="col-sm-6 p-2 content_align_down mb-5">

      <div className='w-100 h-100 border_when_small send_query_Section p-2'>

        <h3 id='contact_sec'>Send Your Query</h3>
          <input type="text" placeholder="Your Name" value={queryName}  className="w-100 my-1"
          onChange={(elem)=>{setQueryName(elem.currentTarget.value); checkEnable();}}
          ref={nameInput}
          />

          <input type="email" placeholder="Your Email" value={queryEmail} className="w-100 my-1"
          onChange={(elem)=>{
            setQueryEmail(elem.currentTarget.value); 
            checkEnable();
            
          }}
          ref={emailInput}
          />

          <input type="number" placeholder="Your Mobile No." value={queryNumber} className="w-100 my-1"
          onChange={(elem)=>{
            setQueryNumber(elem.currentTarget.value); 
            checkEnable();
          }}
          ref={numberInput}
          />

          <textarea className="w-100 mt-1" value={query} placeholder="Your Query"
          onChange={(elem)=>{setQuery(elem.currentTarget.value); checkEnable();}}
          ref={queryInput}
          />
        
{enableSubmit && (
<div>
    {!submisionStatus && (

<span>
{!loader && (
    <button className="btn queryButton border border-dark  text-light bg-success" onClick={sendQuery}>SUBMIT</button>
)}
{loader && (
    <button className="btn queryButton border text-light border-dark bg-success">
        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        SENDING YOUR QUERY...
    </button>
)}
</span>

    )}

    {submisionStatus && (
<button className="btn disabledQueryButton border border-dark" disabled>QUERY SENT</button>
    )}

</div>
)}
        
{!enableSubmit && (
<button className="btn disabledQueryButton text-light border border-dark" onClick={()=>{
if(queryName===''){
  setValidationPoints('Please Mention Your Name');
}else if(!emailPattern.test(queryEmail)){
  setValidationPoints('Please Mention A Valid Email');
}else if(!phoneNumberPattern.test(queryNumber)){
  setValidationPoints('Please Mention A Valid Phone Number');
}else if(query===''){
  setValidationPoints('Please Mention Your Query');
}

}}>SUBMIT</button>
)}


{(validationPoints.length>3) && (
<div className='mt-3 text-danger text-start'>
<p>{validationPoints}</p>
</div>
)}


        </div>
      </div>
    </div>

    {/* CONTACT SECTION END */}
    {/* CONTACT SECTION END */}
    {/* CONTACT SECTION END */}



  </div>

  
)

}

export default Portfolio;