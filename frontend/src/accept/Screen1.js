import React, { useState } from 'react';
import CardList from './CardList';
import Pagination from 'react-bootstrap/Pagination';

const Screen1 = ({ data }) => {
  //頁數控制
  const CasePerPage = 5;
  const page = Math.ceil(data.length / CasePerPage);
  const [active,setActive] = useState(1);
  let items = [];
  data = data?.slice(  CasePerPage * (active-1) , CasePerPage * active);
  if(data?.length === 0 && active > 1){
    setActive(()=>active - 1)
  }  
  const handleSetActive = (number)=>{
    setActive(number)
  }
  //


    for (let number = 1; number <= page; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={()=>handleSetActive(number)}>
          {number}
        </Pagination.Item>
      );
    }
  return (
    <>
      <div style={{ width: '', height: '100vh', background: 'lightcoral',borderRadius: "10px"  }}>
        <CardList selectedComponent={'component1'} data1={data} screen={1}></CardList>
        <Pagination style={{justifyContent:"center"}}>{items}</Pagination>
      </div>
    </>
  );
};



export default Screen1;
