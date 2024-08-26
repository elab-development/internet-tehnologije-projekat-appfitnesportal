import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import OneUsage from './OneUsage';

function Usages({ token }) {
  let header = {
    headers: { Authorization: 'Bearer ' + token }
  };

  const [usages, setUsages] = useState();
  useEffect(() => {
    if (usages == null) {
      axios.get('api/usages', header).then((res) => {
        console.log(res.data);
        setUsages(res.data.usages);
      });
    }
  }, [usages]);

  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h1 className="headingmain">Vase trenutne usluge <span></span></h1>
      </div>
      <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', maxWidth: '800px',  margin: '50px 100px 100px 350px'}}>
        {usages == null ? (
          <p style={{ color: '#ff0000', textAlign: 'center' }}>Učitavanje...</p>
        ) : (
          usages.map((usage) => (
            <OneUsage usage={usage} key={usage.id} style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
          ))
        )}
      </div>
    </>
  );
}

export default Usages;
