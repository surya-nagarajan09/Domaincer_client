import React,{Fragment,useState} from "react";
import {Form,Button,Container} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import axios from "axios"


const buttonStyle={
    display:"flex",
    justifyContent: 'center',
    alignItems:"stretch",
    marginBottom:"10px",
}


const Login=()=>{
    const [form,setForm]=useState({email:"",pwd:""});
    const [emailMsg,setEmailMsg]=useState("");
    const [pwdHandler,setPwdHandler]=useState("");
    const[isLogged,setIsLogged]=useState(false)
 
    const url="https://domaincer.herokuapp.com/login-recruiter"

    const handleForm=()=>{
        const{email,pwd}=form;
        
        if(email===""){
           setEmailMsg("Email can't be empty")
        }else if(pwd===""){
           setPwdHandler("Password can't be empty");
        }else if(pwd.length<8){
            setPwdHandler("Password length must be greater than 8")
        }
        else{
            axios.post(url,form).then((res)=>{
                setIsLogged(true)
                const data=JSON.stringify(res.data)
                window.sessionStorage.setItem("token",data)
            },(err)=>{
                console.log(err)
            })
           
        }
    }

    if(isLogged){
        return (
           <Redirect to="recruiterdash"/>
        )
    }else{
    return(
        <Fragment>
            <Container>
            <Form>
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
            <div style={buttonStyle}>
            <Button variant="success"  onClick={handleForm}>Login</Button>
            </div>     
          </Form>
        </Container>
        </Fragment>
    )
    }
}

export default Login;