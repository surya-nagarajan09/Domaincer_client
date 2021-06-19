import React,{Fragment,useState,useContext} from 'react';
import Login from '../Candidate/Login';
import SignUp from "../Candidate/SignUp";
import {Button,Container,Row,Col,ButtonGroup,Card} from "react-bootstrap";
import { BiLinkExternal } from 'react-icons/bi';
import {UserContext} from "../userContext";

const styles={
    head:{
    color:"green",
    textAlign:"center",
    fontSize:"50px",
    fontWeight:"bold",
    },
    link:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    container:{
        marginTop:"20px"
    },
    card:{
       height:"600px"
    }

}


const CandidatePage=()=>{
    const [login,setLogin]=useState(<Login/>)
    const{isLogged_seeker}=useContext(UserContext);
    console.log(isLogged_seeker)
    return(
        <Fragment>
            <Container style={styles.container}>
                <Row>
                    <Col></Col>
                    <Col xs={12}>
                       <Row>
                           <Col xs={6}></Col>
                           <Col> 
                           <h1 style={styles.head}>Welcome!!!</h1>
                           </Col>
                       </Row>
                    </Col>
                    <Col className="card-image" xs={6}>   
                    </Col>
                    <Col xs={6}>
                        <Card style={styles.card}>
                            <Row style={styles.container}> 
                            <Col xs={12}>
                                <p style={{display:"flex",color:'green',justifyContent:"center"}}>LOG IN TO SEARCH JOBS!!</p>
                            </Col>  
                                 <Col xs={3}>
                                     
                                 </Col>
                                <Col xs={6}>
                                <ButtonGroup>
                                <Button variant="light" size="lg" onClick={()=>setLogin(<Login/>)}>LOGIN</Button>
                                <Button variant="secondary" size="lg" onClick={()=>setLogin(<SignUp/>)}>SIGNUP</Button>
                                </ButtonGroup>
                                </Col>                            
                                <Col xs={12}>
                                <div>
                                    {login}
                                </div>
                                </Col>
                                <Col xs={12}>
                                <div style={styles.link}>
                                <Button variant="link" href="https://domaincerclient1.herokuapp.com/recruiter">RECRUITER<BiLinkExternal/></Button>
                                </div>      
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container> 
        </Fragment>
        )

}

export default CandidatePage;