import { Menu,  Button } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import type { NextPage } from 'next'
import { Navigation,  SPIstruct } from '../components/navigation';
import {isMobile} from 'react-device-detect'
import Table, { ColumnsType } from 'antd/lib/table';
import {  useState } from 'react';
// import { useRecoilState } from 'recoil';
import { Route } from 'react-router';
import Component from './verify';
import DataType from '../components/datatype';
import React from "react";
import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRouter } from "next/router";
import { xenon } from "../pkg/xenon";
import { useContext } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { Avatar, Image } from 'antd';
import { recoilSessionState } from "../pkg/recoilDeclarations";

import { allSemsData, Sem10Data, Sem11Data, Sem12Data, Sem13Data, Sem14Data, Sem15Data, Sem16Data, Sem1Data, Sem2Data, Sem3Data, Sem4Data, Sem5Data, Sem6Data, Sem7Data, Sem8Data, Sem9Data } from '../components/recoilDeclarations';
// import { useRouter } from 'next/router'
// import { NextResponse } from 'next/server'
import {
  
  Routes,
  redirect as DomRedirect,
  BrowserRouter,
} from "react-router-dom";

const Home: NextPage = () => {
  // const router = useRouter();
  //       const [session, setSession] = useRecoilState(recoilSessionState);
  //       const { next: next } = router.query;

  // console.log("hzcghz");
  const sessiondata=useRecoilValue(recoilSessionState);
  
  console.log(sessiondata?.user.id);

  // console.log("ndsvhdhvvvvvv");
  // console.log(session)
  const dummyData=[[{key: 0, course: 'MTH101A', grade: 'C', credits: 11, credits_received: 6.6,is_repeated:false,is_sx:false},
                    {key: 1, course: 'PHY101A', grade: 'C', credits: 3, credits_received: 6.6,is_repeated:false,is_sx:false},
                    {key: 2, course: 'PHY102A', grade: 'C', credits: 11, credits_received: 6.6,is_repeated:false,is_sx:false},
                    {key: 3, course: 'LIF101A', grade: 'C', credits: 6, credits_received: 6.6,is_repeated:false,is_sx:false},
                    {key: 4, course: 'ENG124A', grade: 'C', credits: 11, credits_received: 6.6,is_repeated:false,is_sx:false},
                    {key: 5, course: 'TA101A', grade: 'C', credits: 9, credits_received: 6.6,is_repeated:false,is_sx:false}],
                    [{key: 6, course: 'MTH102A', grade: 'C', credits: 11, credits_received: 6.6,is_repeated:false,is_sx:false},
                    {key: 7, course: 'PHY103A', grade: 'C', credits: 11, credits_received: 6.6,is_repeated:false,is_sx:false},
                    {key: 8, course: 'ESC101A', grade: 'C', credits: 14, credits_received: 6.6,is_repeated:false,is_sx:false},
                    {key: 9, course: 'CHM102A', grade: 'C', credits: 8, credits_received: 6.6,is_repeated:false,is_sx:false},
                    {key: 10, course: 'CHM101A', grade: 'C', credits: 3, credits_received: 6.6,is_repeated:false,is_sx:false}]];
  const addinpdata = async (e:any) => {
    // e.preventDefault();

    
  
    const { name, email, work, add, mobile, desc, age } = {name:"saksham",email:"bsvc@gmail.com",
           work:"xnbc",add:"sf",mobile:845678923,desc:"yjsd",age:12};
        console.log(name,email)

        const res = await fetch("http://localhost:8003/register1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, add, mobile, desc, age,dummyData
            })
        });

        const data = await res.json();
        console.log(data);


    // }
}
        
  
  const handleClick1 = () => {
    const element1 = document.getElementById("spi-cpi");
    element1?.scrollIntoView({behavior: 'smooth'});
  };
  const portPage=()=>{
    
        
        console.log("yes");
        return(<Component/>)
    
  }
  const userImage=`https://images-students-iitk.sgp1.digitaloceanspaces.com/images-students-iitk/${sessiondata?.user.rollno}.jpg`
  const handleClick2 = () => {
    const element2 = document.getElementById("acad-status");
    element2?.scrollIntoView({behavior: 'smooth'});
  };
  // console.log(Sem1Data,"sem1data");

  const [semData, setSemData] = useRecoilState(allSemsData)
  if (dummyData){
    // semData=dummyData
  }
  // const [trial, setTrial] = useState<DataType[][]>()
    const [status, setStatus] = useState("Normal");
    const [showStat, setShowStat] = useState(false)
    let [sem1a, ] = useRecoilState(Sem1Data);
    let [sem2a, ] = useRecoilState(Sem2Data)
    const [sem3a, ] = useRecoilState(Sem3Data)
    const [sem4a, ] = useRecoilState(Sem4Data)
    const [sem5a, ] = useRecoilState(Sem5Data)
    const [sem6a, ] = useRecoilState(Sem6Data)
    const [sem7a, ] = useRecoilState(Sem7Data)
    const [sem8a, ] = useRecoilState(Sem8Data)
    const [sem9a, ] = useRecoilState(Sem9Data)
    const [sem10a, ] = useRecoilState(Sem10Data)
    const [sem11a, ] = useRecoilState(Sem11Data)
    const [sem12a, ] = useRecoilState(Sem12Data)
    const [sem13a, ] = useRecoilState(Sem13Data)
    const [sem14a, ] = useRecoilState(Sem14Data)
    const [sem15a, ] = useRecoilState(Sem15Data)
    const [sem16a, ] = useRecoilState(Sem16Data)
    const semArray=[sem1a,sem2a,sem3a,sem4a,sem5a,sem6a,sem7a,sem8a,sem9a,sem10a,sem11a,sem12a,sem13a,sem14a,sem15a,sem16a,];
    // if (dummyData){
    //   console.log(dummyData.length);
    //   for (let c=dummyData.length;c>0;c--){
    //     console.log("updated ",c-1);
    //     if (c-1==1){
    //       sem2a=dummyData[c-1];
    //       tempFunc();
    //     }
    //     if(c-1==0){
    //       sem1a=dummyData[c-1];
    //     }
    //     // semArray[c-1]=dummyData[c-1];
    //     console.log(sem1a)
    //   }
    // }
    const tempFunc = () => {
      setSemData([]);
      let semDataAll = semData
      
      semDataAll = []
      
      // console.log(sem1a)
      if(sem1a.length !== 0) {semDataAll = [sem1a];}
      if(sem2a.length !== 0) {semDataAll?.push(sem2a)}
      if(sem3a.length !== 0) {semDataAll?.push(sem3a)}
      if(sem4a.length !== 0) {semDataAll?.push(sem4a)}
      if(sem5a.length !== 0) {semDataAll?.push(sem5a)}
      if(sem6a.length !== 0) {semDataAll?.push(sem6a)}
      if(sem7a.length !== 0) {semDataAll?.push(sem7a)}
      if(sem8a.length !== 0) {semDataAll?.push(sem8a)}
      if(sem9a.length !== 0) {semDataAll?.push(sem9a)}
      if(sem10a.length !== 0) {semDataAll?.push(sem10a)}
      if(sem11a.length !== 0) {semDataAll?.push(sem11a)}
      if(sem12a.length !== 0) {semDataAll?.push(sem12a)}
      if(sem13a.length !== 0) {semDataAll?.push(sem13a)}
      if(sem14a.length !== 0) {semDataAll?.push(sem14a)}
      if(sem15a.length !== 0) {semDataAll?.push(sem15a)}
      if(sem16a.length !== 0) {semDataAll?.push(sem16a)}
      setSemData(semDataAll)
  }
  // if (dummyData){
  //   // console.log(dummyData.length);
  //   for (let c=dummyData.length;c>0;c--){
  //     // console.log("updated ",c-1);
  //     if(c-1==0){
  //       sem1a=dummyData[c-1];
      
  //     }
  //     if (c-1==1){
  //       sem2a=dummyData[c-1];
      
  //     }
      
  //     // semArray[c-1]=dummyData[c-1];
  //     // console.log(sem1a)
  //   }
    
  // }

    const getStats = (semData:DataType[][]) => {  
      
      let semDataAll = semData
      semDataAll = []
      // console.log(sem1a)
      if(sem1a.length !== 0) {semDataAll = [sem1a];}
      if(sem2a.length !== 0) {semDataAll?.push(sem2a)}
      if(sem3a.length !== 0) {semDataAll?.push(sem3a)}
      if(sem4a.length !== 0) {semDataAll?.push(sem4a)}
      if(sem5a.length !== 0) {semDataAll?.push(sem5a)}
      if(sem6a.length !== 0) {semDataAll?.push(sem6a)}
      if(sem7a.length !== 0) {semDataAll?.push(sem7a)}
      if(sem8a.length !== 0) {semDataAll?.push(sem8a)}
      if(sem9a.length !== 0) {semDataAll?.push(sem9a)}
      if(sem10a.length !== 0) {semDataAll?.push(sem10a)}
      if(sem11a.length !== 0) {semDataAll?.push(sem11a)}
      if(sem12a.length !== 0) {semDataAll?.push(sem12a)}
      if(sem13a.length !== 0) {semDataAll?.push(sem13a)}
      if(sem14a.length !== 0) {semDataAll?.push(sem14a)}
      if(sem15a.length !== 0) {semDataAll?.push(sem15a)}
      if(sem16a.length !== 0) {semDataAll?.push(sem16a)}
      setSemData(semDataAll)
      // console.log(semData,sem1a);


        let numSems = 0;
        let prevSemCreds = 0;
        let totCreds = 0;
        let prevSemStatus = "Normal"
        
        for(let index = 0; index < semDataAll.length; index++) {
            for(let index2 = 0; index2<semDataAll[index].length; index2++) {
                // if( semData[index][index2].credits_received !== 0 || semData[index][index2].grade !== "E") {
                    totCreds = ( totCreds + semDataAll[index][index2].credits );
                    if(index !== semDataAll.length - 1) {
                        prevSemCreds = ( prevSemCreds + semDataAll[index][index2].credits )
                    }
                // }
            }
            // setNumSems(numSems+1);
            numSems = numSems + 1
            // console.log("prev sem creds:", prevSemCreds)
            // console.log("tot creds:", totCreds)
            if( prevSemCreds >= 30 && (totCreds >= numSems*(numSems+24) && totCreds < 36*numSems)) {
                setStatus("Warning")
            }
            if( prevSemCreds < 30 && (totCreds >= 36*numSems) ) {
                setStatus("Warning")
            }
    
            if( prevSemCreds >= 30 && (totCreds < (24+numSems)*numSems) ) {
                setStatus("Academic Probation")
                prevSemStatus = "Academic Probation"
                // console.log("AP")
            }
            else if( prevSemCreds < 30 && (totCreds >= numSems*(numSems+24) && totCreds < 36*numSems) ){
                setStatus("Academic Probation")
                prevSemStatus = "Academic Probation"
                // console.log("AP")
            }
            else if( prevSemCreds < 30 && (totCreds < (24+numSems)*numSems) && prevSemStatus != "Academic Probation") {
                setStatus("Academic Probation")
                prevSemStatus = "Academic Probation"
                // console.log("AP")
            }
            else if( prevSemStatus == "Academic Probation" && prevSemCreds < 30 && totCreds < (24 + numSems)*numSems) {
                setStatus("Programme Termination")
                // console.log("PT")
            }
            
        }
        setShowStat(true)
            
    }
    
    // console.log(semData,sem1a);

    const [results, setResults] = useState<SPIstruct[]>([])
    const [cpi, setCpi] = useState(0)
    const [showStat2, setShowStat2] = useState(false)

    
const columns: ColumnsType<SPIstruct> = [
    {
      title: 'Semester',
      dataIndex: 'sem_name',
      key: 'sem_name',
    },
    {
      title: 'SPI',
      dataIndex: 'spi',
      key: 'spi',
    },
    {
      title: 'Credits Completed',
      dataIndex: 'credits_completed',
      key: 'credits_completed',
    }
  ];

    const getSPI = () => {

      let semDataAll = semData
      semDataAll = []
      // console.log(sem1a)
      if(sem1a.length !== 0) {semDataAll = [sem1a];}
      if(sem2a.length !== 0) {semDataAll?.push(sem2a)}
      if(sem3a.length !== 0) {semDataAll?.push(sem3a)}
      if(sem4a.length !== 0) {semDataAll?.push(sem4a)}
      if(sem5a.length !== 0) {semDataAll?.push(sem5a)}
      if(sem6a.length !== 0) {semDataAll?.push(sem6a)}
      if(sem7a.length !== 0) {semDataAll?.push(sem7a)}
      if(sem8a.length !== 0) {semDataAll?.push(sem8a)}
      if(sem9a.length !== 0) {semDataAll?.push(sem9a)}
      if(sem10a.length !== 0) {semDataAll?.push(sem10a)}
      if(sem11a.length !== 0) {semDataAll?.push(sem11a)}
      if(sem12a.length !== 0) {semDataAll?.push(sem12a)}
      if(sem13a.length !== 0) {semDataAll?.push(sem13a)}
      if(sem14a.length !== 0) {semDataAll?.push(sem14a)}
      if(sem15a.length !== 0) {semDataAll?.push(sem15a)}
      if(sem16a.length !== 0) {semDataAll?.push(sem16a)}
      setSemData(semDataAll)


        let totCreds = 0
        let receivedCreds = 0
        let res = results
        res = []
        for(let index = 0; index < semDataAll.length; index++) {
            
            let spi_cred = 0
            let spi_cred_done = 0
            let cred = 0
            for(let index2 = 0; index2<semDataAll[index].length; index2++) {
                
                if(semDataAll[index][index2].grade !== 'S' && semDataAll[index][index2].grade !== 'X') {
                    if(semDataAll[index][index2].is_repeated === false) {
                        totCreds = totCreds + semDataAll[index][index2].credits
                        receivedCreds = receivedCreds + semDataAll[index][index2].credits_received
                    }
                    spi_cred = spi_cred + semDataAll[index][index2].credits
                    spi_cred_done = spi_cred_done + semDataAll[index][index2].credits_received
                }
                if(semDataAll[index][index2].grade !== 'X' && semDataAll[index][index2].grade !== 'E(old)' && semDataAll[index][index2].grade !== 'E(new)' && semDataAll[index][index2].grade !== 'F') {
                    cred += semDataAll[index][index2].credits
                }
            }
            let sem_name = index.toString()
            let singleSem:SPIstruct = {sem_name:sem_name, spi:Number((spi_cred_done/spi_cred*10).toFixed(3)), credits_completed: cred}
            res.push(singleSem)
        }
        setCpi(Number((receivedCreds/totCreds*10).toFixed(3)))
        setResults(res)
        // console.log(semDataAll)
        setShowStat2(true)
        // console.log("totCreds:", totCreds)
    }

    return (
      <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <Layout>
    <Header style={{ display:"flex", position: 'fixed', zIndex: 1, top:0, right:0, left:0, boxShadow:"0px 10px 5px lightblue" }}>
      <div className="logo" style={{marginRight:"30px",
      paddingLeft:"15px",
      paddingRight:"15px",
      backgroundColor:"whitesmoke",
      borderRadius:5}}>
      <a href='https://anciitk.in'>
        <img
                  src="https://anciitk.in/img/anc-logo.png"
                  alt="AnC IITK logo"
                  height="50px"
                />
                </a>
                </div>
      {!isMobile && 
        <div style={{color:"whitesmoke", paddingLeft:10, paddingRight:30, fontSize:30, minWidth: 500}}> Academics and Career Council </div>    
      
      }
      <Menu
        style={{minWidth:"250px"}}
        theme="dark"
        mode="horizontal"
        items={[{key:"SPI", label:"Get SPI / CPI", onClick:() => {
          tempFunc()
          getSPI()
          handleClick1()
        }}, 
        {key:"AP", label:"Find Status", onClick:() => {
          tempFunc()
          getStats(semData)
          handleClick2()
        }}
      ]}
      />
      <Button style={{backgroundColor: "#001529", color: "lightgray", marginTop: "15px"}} href='./y22'>For Y22</Button>
      <div>{(sessiondata?.user.id) &&
      <Avatar src={<Image src={userImage} style={{ width: 32 }} />} />}
      {(!sessiondata?.user.id) &&
      <Button style={{backgroundColor: "#001529", color: "lightgray", marginTop: "15px"}}  href='./verify'>Login</Button>}
      
      </div>
      {/* <Button style={{backgroundColor: "#001529", color: "lightgray", marginTop: "15px"}}  href='./verify'>Login</Button> */}
      
    </Header>
    <div>
      {
        !isMobile &&
          <Content className="site-layout" style={{ paddingLeft: '20%', paddingRight: '20%', marginTop: 64, paddingTop:"20px" }}>
            {/* <div  style={{ justifyContent:'center', alignItems:'center'}}> */}
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize: "30px",justifyContent:'center', alignItems:'center'}}>CPI/SPI/Status Calculator</p>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize: "15px", justifyContent:'center', alignItems:'center'}}>
                  Find your semwise SPI and CPI using the AnC calculator. 
                  Add new semesters and add new courses to each semester to get the data.
                   You can also click on the button &quot;repeated&quot; if that course has been repeated by the student and the better grade is obtained in the 
                   next attempt. Note that only the best attempt of each course should have the repeated button not clicked.
                </p>
                
            </div>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 620 }}>
      <Navigation />
      <div> { showStat &&

            
<div style={{paddingBottom:"50px"}}>
    {(semData.length > 0) &&
<p style={{"fontSize":"25px", display:'flex',justifyContent:'center', alignItems:'center'}}>{status}</p>
}
{
        (semData.length == 0) &&
        <p style={{display:'flex',justifyContent:'center', alignItems:'center'}}>Enter data into the semesters to find out your academic status</p>
}
<div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
    <Button onClick={() => setShowStat(false)}>Hide Status</Button>
</div>
</div>
}
</div>

<div>{ showStat2 && 
<div style={{paddingBottom: "50px"}}>

{(semData.length > 0) &&
    <div>
    <Table columns={columns} dataSource={results} />
    <p style={{"fontSize":"30px", display:'flex',justifyContent:'center', alignItems:'center'}}>Overall CPI : {cpi}</p>
</div>
}
{
    (semData.length == 0) &&
    <p style={{display:'flex',justifyContent:'center', alignItems:'center'}}>Enter data into the semesters to find out your SPI / CPI</p>
}
<div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
<Button onClick={() => setShowStat2(false)}>Hide CPI / SPI</Button>
</div>
</div>}
</div>
      </div>
    </Content>
      }
    </div>
    <div>
      {
        isMobile &&
        <Content className="site-layout" style={{ marginTop: 64, paddingTop:"20px" }}>
          
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize: "30px",justifyContent:'center', alignItems:'center'}}>CPI/SPI/Status Calculator</p>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize: "15px", justifyContent:'center', alignItems:'center', margin:"10px"}}>
                  Find your semwise SPI and CPI using the AnC calculator. 
                  Add new semesters and add new courses to each semester to get the data.
                   You can also click on the button &quot;repeated&quot; if that course has been repeated by the student and the better grade is obtained in the 
                   next attempt. Note that only the best attempt of each course should have the repeated button not clicked.
                </p>
            </div>
          
          <div className="site-layout-background" style={{ padding: 24, minHeight: 620 }}>
            <Navigation />
            <div id='acad-status'> { showStat &&

            
<div style={{paddingBottom:"50px"}}>
    {(semData.length > 0) &&
<p style={{"fontSize":"25px", display:'flex',justifyContent:'center', alignItems:'center'}}>{status}</p>
}
{
        (semData.length == 0) &&
        <p style={{display:'flex',justifyContent:'center', alignItems:'center'}}>Enter data into the semesters to find out your academic status</p>
}
<div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
    <Button onClick={() => setShowStat(false)}>Hide Status</Button>
</div>
</div>
}
</div>

<div id='spi-cpi'>{ showStat2 && 
<div style={{paddingBottom: "50px"}}>

{(semData.length > 0) &&
    <div>
    <Table columns={columns} dataSource={results} />
    <p style={{"fontSize":"30px", display:'flex',justifyContent:'center', alignItems:'center'}}>Overall CPI : {cpi}</p>
</div>
}
{
    (semData.length == 0) &&
    <p style={{display:'flex',justifyContent:'center', alignItems:'center'}}>Enter data into the semesters to find out your SPI / CPI</p>
}
<div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
<Button onClick={() => setShowStat2(false)}>Hide CPI / SPI</Button>
</div>
</div>}
</div>
          </div>
        </Content>
      }
    </div>
    {/* <div style={{display:'flex',justifyContent:'center', alignItems:'center', paddingBottom:"50px"}}>
        <Button  style={{width:"150px"}} onClick={addinpdata}> Save </Button>
        </div> */}
    
    <Footer style={{ textAlign: 'center', position:'fixed', bottom:"0px", left:"0px", right:"0px" }}>AnC web team ©2022 </Footer>
  </Layout>
        
        </div>
    )
}

export default Home


