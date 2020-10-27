import React from 'react';
import '../styles/Table.css';

export const Table = ({ countries }) => {
  return (
    <div className='table'>
      {countries.map(({ country, cases }) => (
        <tr key={country}>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
