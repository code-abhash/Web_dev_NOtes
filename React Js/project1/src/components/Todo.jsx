import React from 'react';

const Todo = () => {
  return (
    <center>
      <h1 >ToDo App</h1>

        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control me-2" // Add right margin to the input
            id="todoInput"
            aria-describedby="todoHelp"
            placeholder="Enter Todo"
            style={{ width: 'auto', minWidth: '300px' }} // Control width
          />
          <input
            type="date"
            className="form-control me-2" 
            id="dateInput"
            aria-describedby="dateHelp"
            placeholder="Enter Date"
            style={{ width: 'auto', minWidth: '300px' }}
          />
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: '10px' }} // Add 10px left margin
          >
            ADD
          </button>
        </div>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control me-2" // Add right margin to the input
            id="todoInput"
            aria-describedby="todoHelp"
            placeholder="Enter Todo"
            style={{ width: 'auto', minWidth: '300px' }} // Control width
          />
          <input
            type="date"
            className="form-control me-2" 
            id="dateInput"
            aria-describedby="dateHelp"
            placeholder="Enter Date"
            style={{ width: 'auto', minWidth: '300px' }}
          />
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: '10px' }} // Add 10px left margin
          >
            ADD
          </button>
        </div>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control me-2" // Add right margin to the input
            id="todoInput"
            aria-describedby="todoHelp"
            placeholder="Enter Todo"
            style={{ width: 'auto', minWidth: '300px' }} // Control width
          />
          <input
            type="date"
            className="form-control me-2" 
            id="dateInput"
            aria-describedby="dateHelp"
            placeholder="Enter Date"
            style={{ width: 'auto', minWidth: '300px' }}
          />
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: '10px' }} // Add 10px left margin
          >
            ADD
          </button>
        </div>
    </center>
  );
};

export default Todo;
