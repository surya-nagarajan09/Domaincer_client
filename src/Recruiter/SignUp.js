
import React,{Fragment,useState} from "react";
import {Form,Button,Container,Row,Col,Spinner} from "react-bootstrap";
import axios from 'axios'

const buttonStyle={
    display:"flex",
    justifyContent: 'center',
    alignItems:"stretch",
    marginBottom:"10px",
}


const SignUP=()=>{
    const [form,setForm]=useState({name:"",num:"",cname:"",email:"",pwd:"",pwdCheck:""});
    const[nameMsg,setnameMsg]=useState("");
    const[numMsg,setnumMsg]=useState("");
    const [emailMsg,setEmailMsg]=useState("");
    const [cnameMsg,setcnameMsg]=useState("")
    const [pwdHandler,setPwdHandler]=useState("");
    const [pwdCheck,setPwdCheck]=useState("");
    const[msg,setMsg]=useState("");

    const url="https://domaincer.herokuapp.com/register-company"
  

    const handleForm=()=>{
        const{name,num,email,pwd,pwdCheck,cname}=form;

        if(name===""){
            setnameMsg("Name can't be empty");
        }else if(num===""){
            setnumMsg("phone number can't be empty");
        }else if(num.length!==10){
            setnumMsg("invalid phone number")
        }else if(cname===""){
            setcnameMsg("company name can't be empty");
       }
        else if(email===""){
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
            setMsg(<Spinner></Spinner>)
            axios.post(url,form).then((res)=>{
                console.log(res.data)
            },(err)=>{
                console.log(err)
            })
            setMsg("SUCCESSFULLY SIGNED IN")
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
                             <Form.Label>Name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter Name" onChange={(e)=>setForm({...form,name:e.target.value})} />
                            <Form.Text className="text-muted">{nameMsg}</Form.Text>
                            </Form.Group>
                            </Col>
                            <Col>     
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Contact Number</Form.Label>
                             <Form.Control size="lg" type="tel" placeholder="Enter Contact Number" onChange={(e)=>setForm({...form,num:e.target.value})} />
                             <Form.Text className="text-muted">{numMsg}</Form.Text>
                        </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Company Name</Form.Label>
                           <Form.Control size="lg" type="email" placeholder="Enter Company Name" onChange={(e)=>setForm({...form,cname:e.target.value})} />
                           <Form.Text className="text-muted">{cnameMsg}</Form.Text>
                        </Form.Group>
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
                        <Button variant="success"  onClick={handleForm}>Signup</Button>
                        <p>{msg}</p>
                        </div>       
              </Form>
                    </Col>
                </Row>
            </Container> 
        </Fragment>
    )
}

export default SignUP;