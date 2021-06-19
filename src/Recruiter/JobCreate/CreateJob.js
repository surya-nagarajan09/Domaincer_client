import React,{Fragment,useState,useEffect} from "react";
import { Container,Row,Col,Form,Card,Button} from "react-bootstrap";
import axios from "axios"

const style={
    head:{
        justifyContent:"center",
        display:"flex",
        alignItems:"center",
        color:'green',
        fontSize:"50px",
        fontWeight:"bold",
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        marginTop:"10px"
    },
    button:{
        justifyContent:"center",
        alignItems:"stretch",
        display:"flex"

        }
}
const CreateJob=()=>{
    const[user,setUser]=useState("")

    useEffect(()=>{
        const data=window.sessionStorage.getItem("token");
        const parsed=JSON.parse(data);
        const token=parsed.token
        const user=parsed.recruiterDetails.email;
        setUser(user)
        setToken(token)
     },[])

     
     const[data,setData]=useState({id:"",jname:"",jobDes:"",skills:"",ctc:"",noticePeriod:"",location:"",experience:"",education:"",type:"",roll:"",postedBy:""});
     const[msg,setMsg]=useState("");
     const[jnameMsg,setJname]=useState("");
     const[idMsg,setId]=useState("");
     const[jobDesMsg,setJobDes]=useState("");
     const[skillsMsg,setSkills]=useState("");
     const[ctcMsg,setCtc]=useState("");
     const[noticePeriodMsg,setNoticePeriod]=useState("");
     const[locationMsg,setLocation]=useState("");
     const[experienceMsg,setExperience]=useState("");
     const[educationMsg,setEducation]=useState("");
     const[typeMsg,setType]=useState("");
     const[roleMsg,setRole]=useState("");
     const[token,setToken]=useState("");
 
     

  


    const url="https://domaincer.herokuapp.com/create_job";

   


    const handleForm=()=>{
     const{id,jname,jobDes,skills,ctc,noticePeriod,location,experience,education,type,role,postedBy}=data;
     console.log(user)
     setData({...data,postedBy:user});  
     console.log(postedBy)
        
        if(id===""){
            setId("Id cant be empty")
        }else if(jname===""){
            setJname("Job name cant be empty")

        }else if(jobDes===""){
            setJobDes(" Job Description cant be empty")

        }else if(skills===""){
            setSkills(" Skills cant be empty")

        }else if(ctc===""){
            setCtc(" CTC cant be empty")

        }else if(noticePeriod===""){
            setNoticePeriod(" noticePeriod cant be empty")

        }else if(location===""){
            setLocation(" location cant be empty")

        }else if(experience===""){
            setExperience(" experience cant be  empty")       
        }else if(education===""){
            setEducation(" education cant be empty")
        }else if(type===""){
            setType(" type cant be empty")
        }else if(role===""){
            setRole(" role cant be empty")
        }else{
            axios.post(url,data, {
                headers: {
                  'Authorization': `${token}` 
                }
              }).then((res)=>{
                  setMsg("user Created")
              },(err)=>{
                  console.log(err)
              })
        }


    }
    return(
        <Fragment>
            <Container>
                <Row>
                  <Col xs={12}>
                      <Card>
                          <div style={style.head}>
                          <p>POST NEW JOBS</p>
                          </div>
                      </Card>  
                  </Col>
                  <div style={style.container}>
                  <Col xs={1}>
                  </Col>
                  <Col xs={10}>
                     <Form>
                       <Row>
                          <Col xs={4}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Company Name</Form.Label>
                             <Form.Control type="text" placeholder="Enter job id" onChange={(e)=>setData({...data,id:e.target.value})}/>
                             <Form.Text className="text-muted">{idMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={8}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Enter Job Name</Form.Label>
                             <Form.Control type="text" placeholder="Enter job Name" onChange={(e)=>setData({...data,jname:e.target.value})} />
                             <Form.Text className="text-muted">{jnameMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={12}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Enter JOb Description</Form.Label>
                             <Form.Control  as="textarea" rows={3} placeholder="Enter job Description" onChange={(e)=>setData({...data,jobDes:e.target.value})} />
                             <Form.Text className="text-muted">{jobDesMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={6}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Enter Skills Needed </Form.Label>
                             <Form.Control type="text" placeholder="Enter SKills Needed" onChange={(e)=>setData({...data,skills:e.target.value})} />
                             <Form.Text className="text-muted">{skillsMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={6}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Enter CTC </Form.Label>
                             <Form.Control type="text" placeholder="Enter CTC" onChange={(e)=>setData({...data,ctc:e.target.value})}/>
                             <Form.Text className="text-muted">{ctcMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={4}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Enter Notice Period </Form.Label>
                             <Form.Control type="text" placeholder="Enter Notice Period" onChange={(e)=>setData({...data,noticePeriod:e.target.value})}/>
                             <Form.Text className="text-muted">{noticePeriodMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={4}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Enter Location</Form.Label>
                             <Form.Control type="text" placeholder="Enter Location" onChange={(e)=>setData({...data,location:e.target.value})} />
                             <Form.Text className="text-muted">{locationMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={4}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Enter Experience</Form.Label>
                             <Form.Control type="text" placeholder="Enter Experience" onChange={(e)=>setData({...data,experience:e.target.value})} />
                             <Form.Text className="text-muted">{experienceMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={4}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Employement Type</Form.Label>
                             <Form.Control type="text" placeholder="eg(permanent,part time)" onChange={(e)=>setData({...data,education:e.target.value})} />
                             <Form.Text className="text-muted">{educationMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={4}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>EDUCATION</Form.Label>
                             <Form.Control type="text" placeholder="Enter Education" onChange={(e)=>setData({...data,type:e.target.value})} />
                             <Form.Text className="text-muted">{typeMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                         <Col xs={4}>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Role</Form.Label>
                             <Form.Control type="text" placeholder="Enter Role" onChange={(e)=>setData({...data,role:e.target.value})} />
                             <Form.Text className="text-muted">{roleMsg}</Form.Text>
                             </Form.Group>
                         </Col>
                      </Row>
                   </Form>
                  </Col>
                  </div>
                  <Col xs={12}>
                  <div style={style.button}>
                  <Button variant="success" size="lg" onClick={handleForm}>CREATE JOB</Button>
                  <p>{msg}</p>
                  </div>
                  </Col>
                </Row>
            </Container>
        </Fragment>
    )

}

export default CreateJob