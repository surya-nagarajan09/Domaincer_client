import React,{Fragment,useEffect,useState} from 'react';
import axios from 'axios';
import { Container,Row,Col,Card,Button ,Alert} from 'react-bootstrap';
import {FaMoneyCheck,FaLocationArrow} from 'react-icons/fa';
import { Redirect } from 'react-router-dom';




const myStyle={
    header:{
        textAlign: 'center',
        display:"flex",
        justifyContent:"center",
        color:"green",
        fontSize:"80px",
        fontWeight:"bold"
    },
    card:{
        display:"flex",
        marginLeft:"10px",
        textIndent:"5px"
    }
}


const Jobs=()=>{
    const url="https://domaincer.herokuapp.com/jobs";
    const jobUrl="https://domaincer.herokuapp.com/apply_jobs";
    const [jobs,setJobs]=useState([]);
    const [seeker,setSeeker]=useState({});
    const[logout,setLogout]=useState(false);
    const[token,setToken]=useState("");
   
    

    useEffect(()=>{
        const getJobs=async()=>{
            axios.get(url, {
                headers: {
                  'authorization':token 
                }
              })
              .then((res) => {
                console.log(res.data)
                setJobs(res.data)
              })
              .catch((error) => {
                console.error(error)
              })
        }
        getJobs();

    },[token,url])

    useEffect(()=>{
       const token=window.sessionStorage.getItem("seekerToken");
       const val=JSON.parse(token)
       const user=val.userDetails
       const tokens=val.token;
       setToken(tokens)
       setSeeker(user)
    },[])

    const handleLogout=()=>{
        window.sessionStorage.removeItem("seekerToken");
        setLogout(true)
    }

    const postJob=(x)=>{
        const id=x.id;
        const data={
            id:id,
            name:seeker.name,
            email:seeker.email
        }

        axios.post(jobUrl,data, {
            headers: {
              'Authorization': `${token}` 
            }
          }).then((res)=>{
              console.log(res)
              return(
              alert("submitted!!!")
              )
          },(err)=>{
              console.log(err)
          })

    }

    
   

    if(logout){
        return(
           
            <Redirect to="/"></Redirect>
        )

    }else{

    return(
        <Fragment>
            <Container>
                <Row>
                     <Col xs={12}>
                         <Card>
                            <Row>
                                <Col xs={9}>
                                    <div style={myStyle.header}>
                                        <p >JOBS</p>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <Row>
                                        <Col xs={12}>
                                        <p><span>Logged in as:{seeker.email}</span></p>
                                        </Col>
                                        <Col xs={6}>
                                        </Col>
                                        <Col >
                                        <Button size="sm" variant="danger"onClick={handleLogout}>Logout</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                         </Card>
                     </Col>
                      <Col xs={12}>
                      {/* const{id,jname,jobDes,skills,ctc,noticePeriod,location,experience,education,type,role}=data; */}
                      <div>{jobs.map((x,id)=>( 
                          <Card key={id} style={{ width: '69rem' }}>
                          <Card.Body>
                          <Card.Title>{x.jname}</Card.Title>
                           <Card.Title>{x.role}</Card.Title>
                          <Card.Text>{x.jobDes}</Card.Text> 
                          <div style={myStyle.card}>
                          <Card.Text><FaMoneyCheck/>{x.ctc}</Card.Text>
                          <Card.Text><FaLocationArrow/>{x.location}</Card.Text>
                          <Card.Text>Notice Period{x.noticePeriod}</Card.Text>
                          </div>
                          <Card.Text>Experience {x.experience}</Card.Text>
                          <Card.Text>Employement Type {x.education}</Card.Text>
                          <Button variant="primary" onClick={()=>postJob(x)}>Apply</Button>
               </Card.Body>
             </Card>
           ))}</div>
                     </Col>
                </Row>

            </Container>
           
        </Fragment>
        
    )
                      

}
}

export default Jobs