import React from 'react';

function OneUsage({ usage }) {
  let today = new Date();
  let dateTo = new Date(usage.date_to);
  let differenceTime = dateTo.getTime() - today.getTime();
  let differenceDays = Math.floor(differenceTime / (1000 * 60 * 60 * 24));

  const commonStyles = {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#ffffff'
  };

  const activeStyles = {
    ...commonStyles,
    border: '2px solid #4CAF50'
  };

  const expiredStyles = {
    ...commonStyles,
    border: '2px solid #ff0000'
  };

  const imgStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px'
  };

  const nameStyles = {
    fontSize: '24px', // Povećana veličina fonta za ime
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333' // Tamnija boja za bolju vidljivost
  };

  return (
    <>
      {differenceDays > 0 ? (
        <div style={activeStyles}>
          <div style={nameStyles}>{usage.service.name}</div>
          <div className="description">{usage.service.description}</div>
          <div className="img">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f90d947c2c5a958455b42b0/1614303020125-QBWUNM9VELACND2PFNQ8/1r+luxury+gym+melbourne"
              alt=""
              style={imgStyles}
            />
          </div>
          <div className="started">
            Od {usage.date_from} do {usage.date_to}
          </div>
          <div className="durationleft">
            <p className="active-usage">Aktivno još: {differenceDays} dana</p>
          </div>
        </div>
      ) : (
        <div style={expiredStyles}>
          <div style={nameStyles}>{usage.service.name}</div>
          <div className="description">{usage.service.description}</div>
          <div className="img">
            <img
              src="https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png"
              alt=""
              style={imgStyles}
            />
          </div>
          <div className="started">
            {usage.date_from} - {usage.date_to}
          </div>
          <div className="durationleft">
            <p className="active-usage">Usluga je istekla!</p>
          </div>
          <div className="buttonDiv">
            <button className="activate">Obriši</button>
          </div>
        </div>
      )}
    </>
  );
}

export default OneUsage;
