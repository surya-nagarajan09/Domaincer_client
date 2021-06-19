
import React,{Fragment,useState,useContext} from "react";
import {Form,Button,Container,Row,Col,Spinner} from "react-bootstrap";
import axios from  "axios";
import {UserContext} from '../userContext';


const buttonStyle={
    display:"flex",
    justifyContent: 'center',
    alignItems:"stretch",
    marginBottom:"10px",
}


const SignUP=()=>{
    let {isLogged_seeker}=useContext(UserContext);
    console.log(isLogged_seeker)
    const [form,setForm]=useState({fname:"",lname:"",email:"",pwd:"",pwdCheck:""});
    const[fnameMsg,setFnameMsg]=useState("");
    const[lnameMsg,setlnameMsg]=useState("");
    const [emailMsg,setEmailMsg]=useState("");
    const [pwdHandler,setPwdHandler]=useState("");
    const [pwdCheck,setPwdCheck]=useState("");
    const[msg,setMsg]=useState("");
   

    const url="https://domaincer.herokuapp.com/register-jobseeker";

    const handleForm=()=>{
        const{fname,lname,email,pwd,pwdCheck}=form;

        if(fname===""){
            setFnameMsg("FirstName can't be empty");
        }else if(lname===""){
            setlnameMsg("LastName can't be empty");
        }else if(email===""){
            setEmailMsg("Email can't be empty'");
        }else if(pwd===""){
            setPwdHandler("Password can't be empty'")
        }else if(pwd.length<8){
            setPwdHandler("Password length must be greater than 8")
        }else if(pwdCheck===""){
            setPwdCheck("Re-enter password can't be empty")
        }else if(pwdCheck!==pwd) {
            setPwdCheck("Password must be same")
        }else{
            setMsg( <Spinner animation="border" variant="success"/>)
            axios.post(url,form).then((res)=>{
                if(res.status===200){
                    setMsg("SUCCESSFULLY LOGGED IN");
                }else {
                    setMsg("user already taken")
               }
            
            },(err)=>{
                console.log(err)
            })
        }
        
    }

    return(
        <Fragment>
            <Container>
                <Row>
                    <Col>
                    <Form>
                        <Row>
                            <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>First Name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter FirstName" onChange={(e)=>setForm({...form,fname:e.target.value})} />
                            <Form.Text className="text-muted">{fnameMsg}</Form.Text>
                            </Form.Group>
                            </Col>
                            <Col>     
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Last Name</Form.Label>
                             <Form.Control size="lg" type="text" placeholder="Enter LastName" onChange={(e)=>setForm({...form,lname:e.target.value})} />
                             <Form.Text className="text-muted">{lnameMsg}</Form.Text>
                        </Form.Group>
                        </Col>
                      </Row>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control size="lg" type="email" placeholder="Enter email" onChange={(e)=>setForm({...form,email:e.target.value})} />
                           <Form.Text className="text-muted">{emailMsg}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control size="lg" type="password" placeholder="Password" onChange={(e)=>setForm({...form,pwd:e.target.value})}/>
                          <Form.Text className="text-muted">{pwdHandler}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Re-enter Password</Form.Label>
                         <Form.Control size="lg" type="password" placeholder=" Re-enter Password" onChange={(e)=>setForm({...form,pwdCheck:e.target.value})}/>
                         <Form.Text className="text-muted">{pwdCheck}</Form.Text>
                        </Form.Group>
                        <div style={buttonStyle}>
                        <Button variant="success" onClick={handleForm}>SIGN UP</Button>
                         <p style={{marginLeft:'15px'}}>{msg}</p>
                        </div>       
              </Form>
                    </Col>
                </Row>
            </Container> 
        </Fragment>
    )
}

export default SignUP;