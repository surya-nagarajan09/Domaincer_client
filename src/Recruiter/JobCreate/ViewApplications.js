import React,{Fragment,useEffect,useState} from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
import axios from 'axios'
import { FaRegObjectUngroup } from 'react-icons/fa';


const ViewApplication=()=>{
  const [user,setUser]=useState([]);
  const [data,setData]=useState([]);
  const [temp,setTemp]=useState([]);


  useEffect(()=>{
    const data=window.sessionStorage.getItem("token");
    const parsed=JSON.parse(data);
    const user=parsed.recruiterDetails.email;
    setUser(user)
 },[])

 const url=`https://domaincer.herokuapp.com/get_applicants/${user}`;
 console.log(user)

 useEffect(()=>{
     const data=()=>{
        axios.get(url)
          .then((res) => {
              console.log(res)
            setData(res.data)
            setTemp(res.data[0].applicants)

           })
          .catch((error) => {
            console.error(error)
          })
     }

     data();

 },[url])

 if(data.length===0){

    return(
         <Fragment>
             <Container>
                 <Row>
                     <Col>
                     <h1 style={{justifyContent:'center',display:"flex",marginTop:'50px'}}>No Apps!!!</h1>
                     </Col>
                 </Row>
             </Container>
         </Fragment>
    )

 }else{


    return(
        <Fragment>
           <Container>
               <Row>
                   <Col xs={2}>
                   </Col>
                   <Col >
                   <Fragment>
                       <div>
                           {
                               data.map((x)=>(
                                   <div>
                                       <Card style={{ width: '45rem' }}>
                                           <Card.Body>
                                           <Card.Title>{x.jname}</Card.Title>
                                           <Card.Text>{x.jobDes}</Card.Text>
                                          </Card.Body>
                                       <Card.Text>{temp.map((z)=>(
                                           <div>
                                           <p>Email:{z[0].email}</p>
                                           <p>Name:{z[0].name}</p>
                                           </div>
                                          
                                       ))}</Card.Text>
                                
                                           <Card.Body>
                                           
                                    </Card.Body>
                                       </Card>

                                   </div>
                               ))
                           }
                       </div>
                   </Fragment>
                   </Col>
               </Row>
           </Container>
        </Fragment>
    )

}
}

export default ViewApplication