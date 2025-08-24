// import React from 'react'

function Delete({item,handleDelete}) {
  return (
    <div>
      <button
        onClick={() => handleDelete(Number(item.id))}
        className="cursor-pointer"
      >
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
}

export default Delete;
