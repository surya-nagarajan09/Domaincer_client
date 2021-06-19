import React,{Fragment,useState} from 'react';
import Login from '../Recruiter/Login';
import SignUp from "../Recruiter/SignUp";
import {Button,Container,Row,Col,ButtonGroup,Card} from "react-bootstrap";

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

const RecruiterPage=()=>{
    const [login,setLogin]=useState(<Login/>)
    return(
        <Fragment>
            <Container style={styles.container}>
                <Row>
                    <Col xs={12}>
                       <Row style={styles.container}>
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
                            <Row>   
                                 <Col xs={3}></Col>
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
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container> 
        </Fragment>
        )

}

export default RecruiterPage;