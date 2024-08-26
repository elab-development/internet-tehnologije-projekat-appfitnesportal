import React from 'react'
import axios from 'axios';
import OneService from './OneService';
import {useState, useEffect} from 'react'

function Services({token, createUsage, usages}){

    

    const [types, setTypes]=useState();
    useEffect(()=>{
        if(types==null){
            axios.get("api/types").then((res)=>{
                setTypes(res.data.types);
            });
        }
    },[types]);

    

     const [services, setServices]=useState();
     useEffect(()=>{
       if(services==null){
       axios.get("api/services").then((res)=>{
      setServices(res.data.services);
      
    });

    



          }
                },[services]);

                 const sortPriceAsc = () => {
                     const sortedServices = [...services].sort((a, b) => a.price - b.price);
                      setServices(sortedServices);
                    };
                     const sortPriceDsc = () => {
                         const sortedServices = [...services].sort((a, b) => b.price - a.price);
                          setServices(sortedServices);
                         };
                          const sortNameAsc = () => {
                             const sortedServices = [...services].sort((a, b) => b.name.localeCompare(a.name));
                              setServices(sortedServices);
                             };
                              const sortNameDsc = () => {
                                 const sortedServices = [...services].sort((a, b) => a.name.localeCompare(b.name));
                                  setServices(sortedServices);
                                 };


                                 const[searhText, setSearchText]=useState('')
                                 function handleSearch(e){
                                    setSearchText(e.target.value.toLowerCase())
                                 }
                                 
                                 const exportToCSV = () => {
                                    const csvRows = [];
                                    csvRows.push(['ID', 'Name', 'Price', 'Duration', 'Description', 'Type ID']);
                                    services.forEach(service => {
                                        csvRows.push([
                                            service.id,
                                            service.name,
                                            service.price,
                                            service.duration,
                                            service.description,
                                            service.type_id
                                        ]);
                                    });
                                    const csvString = csvRows.map(row => row.join(',')).join('\n');
                                    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
                                    const url = URL.createObjectURL(blob);
                                    const link = document.createElement('a');
                                    link.setAttribute('href', url);
                                    link.setAttribute('download', 'services.csv');
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                };
                                 
                                 return (
                                     <>
                                      <div className='centerAreaServices'>
                                         <h1 className='text1'>Usluge</h1>
                                         </div>
                                          <div className='functionalities'>
                                             <div className='searchDiv'>
                                                 <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                     <p style={{marginRight: "10px"}}>Pretraži uslugu:</p>
                                                     </div>
                                                      <input className='search' type="text" 
                                                      placeholder='Unesite tekst za pretragu' onInput={handleSearch} />
                                                      <button className='sortD' onClick={sortPriceDsc}>Sortiraj opadajuće po ceni</button>
                                                      <button className='sortA' onClick={sortPriceAsc}>Sortiraj rastuće po ceni</button>
                                                       <button className='sortD' onClick={sortNameDsc}>Sortiraj opadajuće po imenu</button>
                                                       <button className='sortA' onClick={sortNameAsc}>Sortiraj rastuće po imenu</button>
                                                       <button className='export' onClick={exportToCSV}>Preuzmi kao CSV</button> {/* Dugme za preuzimanje */}

                                                     </div>
                                                     </div>
                                                      <div className='services-body'>
                                                         {services==null ? <></> : 
                                                            (searhText=='' ? (services.map((service)=>(
                                                                <OneService token={token} service={service} key={service.id} createUsage={createUsage} usages={usages}/>
                                                                 ))) : (services.
                                                                    filter((s)=>s.name.toLowerCase().includes(searhText))
                                                                    .map((service)=>(
                                                                    <OneService token={token} service={service} key={service.id} createUsage={createUsage} usages={usages}/>
                                                                     ))))
                                                         }
                                                             </div>
                                                              </>
                                                               );
                                                                }
                                                        export default Services                                                     