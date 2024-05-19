import React from 'react';

const Sorting = ({ setSort }) => {
  return (
    <div className='bg-gray-100 my-3 p-3 flex items-center justify-end rounded-md'>
      <select onChange={e => setSort(e.target.value)} className='bg-white py-3 px-5 border border-gray-300 rounded' name="" id="">
        <option value="" disabled selected>Seçiniz</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
}

export default Sorting;
