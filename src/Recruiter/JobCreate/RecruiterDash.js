import React,{Fragment,useState,useEffect} from 'react';
import CreateJob from './CreateJob';
import ViewApplication from './ViewApplications';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import  { Redirect } from 'react-router-dom'


const style={
   header:{
       display: 'flex'
   },
   login:{
       marginRight:"0px"
   }
}
const RecruiterDash=()=>{
    const [app,setApp]=useState(<CreateJob/>);
    const[user,setUser]=useState([]);
    const [logout,setLogout]=useState(false);


    useEffect(()=>{
        const data=window.sessionStorage.getItem("token");
        const parsed=JSON.parse(data);
        const mail=parsed.recruiterDetails.email
        setUser(mail)
    },[]);

    const handleLogout=()=>{
      sessionStorage.removeItem("token");
      setLogout(true);
    }

    if(logout){
        return(
        <Redirect to="/recruiter"></Redirect>
        )

    }else{

    return(
        <Fragment>
            <Container>
              <Row>
                   <Col xs={12}>
                       <Card>
                       <Row>
                           <Col xs={7}>
                           <div style={style.header}>
                           <Button variant="dark" onClick={()=>setApp(<CreateJob/>)}>CREATE NEW JOB</Button>
                           <Button variant="light" onClick={()=>setApp(<ViewApplication/>)}>VIEW APPLICATIONS</Button>
                           </div>
                         </Col>
                         <Col xs={5} style={{display:"flex"}}>
                             <p style={{marginTop:"5px"}}>logged in <span >{user}</span></p>
                             <Button onClick={handleLogout} variant="danger" size="sm" style={{width:'100px',height:'27px',marginTop:"5px"}}>LOGOUT</Button>
                         </Col>
                       </Row>
                       </Card>  
                  </Col>
                  <Col xs={12}>    
            <div>{app}</div>    
                  </Col>
              </Row>
            </Container>
           
        </Fragment>
        
    )

}
}

export default RecruiterDash;