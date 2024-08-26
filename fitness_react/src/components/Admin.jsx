import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import axios from 'axios';

function Admin({ currentUser, services, deleteCoach, coaches }) {
  let navigate = useNavigate();

  function deleteOneCoach(id) {
    deleteCoach(id);
    navigate('/admin');
  }

  const columnsCoaches = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstname', headerName: 'Ime', width: 150 },
    { field: 'lastname', headerName: 'Prezime', width: 100 },
    {
      field: 'experience',
      headerName: 'Iskustvo',
      type: 'number',
      width: 400,
    },
    {
      field: 'started',
      headerName: 'Godina pocetka',
      width: 150,
    },
    {
      field: 'delete',
      headerName: 'Izbrisi',
      width: 100,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteOneCoach(params.row.id)}
          style={{
            backgroundColor: '#f44336', // Crvena boja
            color: '#ffffff',
            textTransform: 'uppercase',
            fontSize: '14px',
            padding: '10px 15px',
            borderRadius: '4px',
            transition: 'background-color 0.3s linear',
            fontWeight: 'bold'
          }}
        >
          Obrisi
        </Button>
      ),
    },
  ];

  const columnsServices = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Naziv', width: 150 },
    { field: 'price', headerName: 'Cena', width: 100 },
    {
      field: 'duration',
      headerName: 'Trajanje(dani)',
      type: 'number',
      width: 100,
    },
    {
      field: 'description',
      headerName: 'Opis',
      width: 400,
    },
    {
      field: 'type',
      valueGetter: (param) => param.row.type.name,
      headerName: 'Tip',
      width: 150,
    },
  ];

  return (
    <>
      {currentUser.admin === 1 && (
        <div style={{
          margin: '20px 0',
          display: 'inline-block'
        }}>
          <Link
            to="/admin/insertCoach"
            style={{
              display: 'inline-block',
              marginLeft: '10px',
              color: '#ffffff',
              textTransform: 'uppercase',
              fontSize: '14px',
              padding: '12px 20px',
              borderRadius: '4px',
              backgroundColor: '#4CAF50', // Avokado zelena
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background-color 0.3s linear'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'} // Tamnija avokado zelena
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'} // Avokado zelena
          >
            Dodaj trenera
          </Link>
        </div>
      )}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={coaches}
          columns={columnsCoaches}
          pageSize={5}
          rowsPerPageOptions={[5]}
          style={{
            border: 'none',
          }}
          componentsProps={{
            cell: {
              style: {
                border: '1px solid #ddd', // Siva granica za ćelije
              },
            },
            columnHeaders: {
              style: {
                backgroundColor: '#f0f0f0', // Svetla siva pozadina za zaglavlja kolona
                color: '#333', // Tamna boja teksta u zaglavljima
                fontWeight: 'bold',
              },
            },
            footer: {
              style: {
                backgroundColor: '#f0f0f0', // Svetla siva pozadina za footer
              },
            },
            row: {
              style: {
                transition: 'background-color 0.3s linear',
              },
              hover: {
                backgroundColor: '#f5f5f5', // Svetlo siva pozadina na hover
              },
            },
          }}
        />
      </div>
      {currentUser.admin === 1 && (
        <div style={{
          margin: '20px 0',
          display: 'inline-block'
        }}>
          <Link
            to="/admin/insertService"
            style={{
              display: 'inline-block',
              marginLeft: '10px',
              color: '#ffffff',
              textTransform: 'uppercase',
              fontSize: '14px',
              padding: '12px 20px',
              borderRadius: '4px',
              backgroundColor: '#4CAF50', // Avokado zelena
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background-color 0.3s linear'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'} // Tamnija avokado zelena
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'} // Avokado zelena
          >
            Dodaj uslugu
          </Link>
        </div>
      )}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={services}
          columns={columnsServices}
          pageSize={5}
          rowsPerPageOptions={[5]}
          style={{
            border: 'none',
          }}
          componentsProps={{
            cell: {
              style: {
                border: '1px solid #ddd', // Siva granica za ćelije
              },
            },
            columnHeaders: {
              style: {
                backgroundColor: '#f0f0f0', // Svetla siva pozadina za zaglavlja kolona
                color: '#333', // Tamna boja teksta u zaglavljima
                fontWeight: 'bold',
              },
            },
            footer: {
              style: {
                backgroundColor: '#f0f0f0', // Svetla siva pozadina za footer
              },
            },
            row: {
              style: {
                transition: 'background-color 0.3s linear',
              },
              hover: {
                backgroundColor: '#f5f5f5', // Svetlo siva pozadina na hover
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default Admin;
