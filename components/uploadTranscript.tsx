import { InputRef, Tag } from 'antd';
import { Button, Form, Popconfirm, Table, AutoComplete } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React, { useContext, useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import DataType, { components } from './typeDefinitions/datatype';
import { allSemsData, Sem10Data, Sem11Data, Sem12Data, Sem13Data, Sem14Data, Sem15Data, Sem16Data, Sem1Data, Sem2Data, Sem3Data, Sem4Data, Sem5Data, Sem6Data, Sem7Data, Sem8Data, Sem9Data, semCount } from './typeDefinitions/recoilDeclarations';
import getCreditsReceived from './auxilliary_functions/getCreditsReceived';
import { jsonOfCourseCredits } from './data/courseCredits';
import { useRecoilState, useRecoilValue } from "recoil";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { addAllData, defaultColumns} from './essensial_functionality/columnDeclaration';
import { RepeatedSems } from './repeated_sems';


let setVar=4;
let userDataExist=0;



let ver=0;
export const App: React.FC = () => {
  const [count, setCount] = useRecoilState(semCount);
  // setCount(dummyData.length);
  const [semData, setSemData] = useRecoilState(allSemsData)
  console.log(semData);
  const [sem1, setSem1] = useRecoilState(Sem1Data)
  const [sem2, setSem2] = useRecoilState(Sem2Data)
  const [sem3, setSem3] = useRecoilState(Sem3Data)
  const [sem4, setSem4] = useRecoilState(Sem4Data)
  const [sem5, setSem5] = useRecoilState(Sem5Data)
  const [sem6, setSem6] = useRecoilState(Sem6Data)
  const [sem7, setSem7] = useRecoilState(Sem7Data)
  const [sem8, setSem8] = useRecoilState(Sem8Data)
  const [sem9, setSem9] = useRecoilState(Sem9Data)
  const [sem10, setSem10] = useRecoilState(Sem10Data)
  const [sem11, setSem11] = useRecoilState(Sem11Data)
  const [sem12, setSem12] = useRecoilState(Sem12Data)
  const [sem13, setSem13] = useRecoilState(Sem13Data)
  const [sem14, setSem14] = useRecoilState(Sem14Data)
  const [sem15, setSem15] = useRecoilState(Sem15Data)
  const [sem16, setSem16] = useRecoilState(Sem16Data)
  var datagrades  
  const [sessiondata, _]=useRecoilState(recoilSessionState);
  console.log(sessiondata?.user.id,"user.id");
  console.log(sessiondata?.user.email,"user.email");
let userId="45645464676gchghc";
if (sessiondata?.user.id){
  userId=sessiondata?.user.id
}
  // const [count, setCount] = useRecoilState(semCount);
  const getdata = async () => {
    let email="";
    if (sessiondata?.user.email){
      email=sessiondata?.user.email
    
    
    const res = await fetch(`http://localhost:8080/getuser/${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
  
    const data = await res.json();
    console.log(data,"getdata");
    if (data){

       datagrades=data.data.gradesData;
      // dummyData=data.gradesData;
      console.log(datagrades)
      if (count<datagrades.length){
        setCount(datagrades.length);
      }
      else{
        
      }
      if (ver==0){
        console.log("inside");
      for (let y=0;y<datagrades.length;y++){
        console.log(datagrades[y],y,"assigning value")
        semArray[y](datagrades[y]);
      }
      ver=1;}
      userDataExist=1;
      console.log(data.gradesData,"gradesdatatea")
    }
  
  
  
    if (res.status === 422) {
        console.log("error ");
  
    } else {
            
        console.log("get data");
  
    }
  }}
  const semArray=[setSem1,setSem2,setSem3,setSem4,setSem5,setSem6,setSem7,setSem8,setSem9,setSem10,setSem11,setSem12,setSem13,setSem14,setSem15,setSem16];
  console.log("ver",ver);

  console.log(count);
  console.log(sem1);

const addinpdata = async () => {
  // e.preventDefault();

  console.log("yes3")
  console.log("semdata",semData);
  const gradesData=semData;
  let email="";
    if (sessiondata?.user.email){
      email=sessiondata?.user.email
    

  console.log(gradesData,"gradesData",typeof(gradesData))
  // const { name, email, work, add, mobile, desc, age } = {name:"saksham",email:"sakshamag2@gmail.com",
        //  work:"xnbc",add:"sf",mobile:845678923,desc:"yjsd",age:12};
      // console.log(name,email)
      console.log(gradesData,"tryyyyy")

      const res = await fetch("http://localhost:8080/register1", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId,gradesData,email
          })
      });

      const data = await res.json();
      console.log(data);


  // }
}else{
  alert("You are not Logged In")
}}

const [alreadyLoggedin,setalredayLoggedin]=useState(false);
console.log(alreadyLoggedin,"already Logged in")
if (userId && setVar && setVar!==2 && !alreadyLoggedin){
  getdata();
  setalredayLoggedin(true)
  console.log(userId,setVar,"setVra")
  setVar=setVar-1;
}else{
  setVar=setVar-1
}
  const updateData = async()=>{
    // e.preventDefault();
    console.log(semData,"update")
    const gradesData=semData;
    console.log(gradesData,"gradesData",typeof(gradesData))
    let email="";
    if (sessiondata?.user.email){
      email=sessiondata?.user.email
    }
    

    const res2 = await fetch(`http://localhost:8080/updateuser/${email}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
          userId,gradesData,email
        })
    });

    const data2 = await res2.json();
    console.log(data2);

    

}

  const handleSave = (row: DataType, sem: DataType[], setSem:any, isCourse: boolean) => {
    addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, 
      sem12, sem13, sem14, sem15, sem16)
    const newData = [...sem];
    if(isCourse === true) {
      let courseAtHand = jsonOfCourseCredits.filter(item => item.course === row.course)
      if(courseAtHand.length === 0) {
        row.credits = 0;
      }
      else {
        row.credits = courseAtHand[0].cred;
      }
    }
    else {
      row.credits_received = getCreditsReceived(row.credits, row.grade);
      
    }
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setSem(newData);
    addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, 
      sem12, sem13, sem14, sem15, sem16)
  };
 
  const columns = (sem:DataType[], setSem:any, sem_num:number) => defaultColumns(sem, setSem, sem_num, count, setCount,
    setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, 
        sem12, sem13, sem14, sem15, sem16).map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
        sem,
        setSem,
        message: col.message,
        is_sx: record.is_sx
      }),
    };
  });
  return (

    <div >

      <div>
        

        <RepeatedSems
          count={count} semData={semData} setSemData={setSemData}
          sem1={sem1} sem2={sem2} sem3={sem3} sem4={sem4} sem5={sem5} sem6={sem6} sem7={sem7} sem8={sem8}
          sem9={sem9} sem10={sem10} sem11={sem11} sem12={sem12} sem13={sem13} sem14={sem14} sem15={sem15} sem16={sem16}
          setSem1={setSem1} setSem2={setSem2} setSem3={setSem3} setSem4={setSem4} setSem5={setSem5} setSem6={setSem6}
          setSem7={setSem7} setSem8={setSem8} setSem9={setSem9} setSem10={setSem10} setSem11={setSem11} setSem12={setSem12}
          setSem13={setSem13} setSem14={setSem14} setSem15={setSem15} setSem16={setSem16} columns={columns} setCount={setCount}
        />
      
      <div style={{display:'flex',justifyContent:'center', alignItems:'center', padding:"10px"}}>
      <Button  style={{width:"150px"}} onClick={() => setCount(count+1)}> Add Sem </Button>
        </div>
        <div style={{display:'flex',justifyContent:'center', alignItems:'center', padding:"10px"}}>
      <Button style={{width:"150px"}} onClick={() => {
       if(count > 0) {setCount(count-1)}
       if(count === 1) {setSem1([]);}
       if(count === 2) {setSem2([]);}
       if(count === 3) {setSem3([]);}
       if(count === 4) {setSem4([]);}
       if(count === 5) {setSem5([]);}
       if(count === 6) {setSem6([]);}
       if(count === 7) {setSem7([]);}
       if(count === 8) {setSem8([]);}
       if(count === 9) {setSem9([]);}
       if(count === 10) {setSem10([]);}
       if(count === 11) {setSem11([]);}
       if(count === 12) {setSem12([]);}
       if(count === 13) {setSem13([]);}
       if(count === 14) {setSem14([]);}
       if(count === 15) {setSem15([]);}
       if(count === 16) {setSem16([]);}
        }}> Delete last Sem </Button>
        </div>
        
        <div style={{display:'flex',justifyContent:'center', alignItems:'center', paddingBottom:"50px"}}>
        <Button  style={{width:"150px"}} onClick={()=>{
          addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, 
            sem12, sem13, sem14, sem15, sem16);
          
          if (userDataExist){
            updateData();
            console.log("yes2")
          }else{
            addinpdata();
            console.log("yes1")
          }
        }}> Save </Button>
        </div>
        </div>
        
        
    </div>
    
  );
};

