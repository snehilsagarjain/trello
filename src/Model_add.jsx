import React from 'react'
import "./Model_add.css";
const Model_add = () => {
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
  
      const addlocation = () => {
          setLocation(!location);
      }
      {console.log(location)}
  return (
    // <div>Model_add</div>
    <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    {/* <div>ADD TASK</div> */}
                    <button onClick={modalClose}>Close</button>
                </div>
                <div className="modal-content">
                    {/* <h2>{view.title}</h2> */}
                    <h2 style={{border: '1px solid red', textAlign: 'center'}}>{"ADD TASK"}</h2>
                    {/* <img src={view.thumbnail} alt={view.title} />
                    <p>{view.description}</p>
                    <h3>Price: {view.price}</h3> */}
                     {/* style={{border: '1px solid blue'}} */}
                    <form>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <label htmlFor="taskname"><h3 style={{border: '1px solid red', width: '120px', height: '40px',textAlign: 'center'}}> Task Name</h3></label>
                            <div><input type="text" id="taskname" style={{ width: '240px', height: '40px', padding: '8px',fontSize: '20px' }} /></div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <label htmlFor="options"><h3 style={{border: '1px solid red', width: '120px', textAlign: 'center', height: '40px'}}>Select List</h3></label>
                            <select id="options" value={selectedOption} onChange={handleChange} style={{ width: '250px', height: '40px', padding: '8px',fontSize: '20px' }}>
                                <option value="">Select...</option>
                                {/* <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option> */}
                            </select>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{flexGrow: '1'}}><b>Start Date</b></div>
                            <div style={{flexGrow: '1', paddingLeft: '30px'}}><b>Due Date</b></div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '10px'}}>
                            <div style={{marginRight: '34px'}}>
                                <input type="checkbox" style={{ transform: 'scale(1.5)', marginRight: '10px' }}/>
                                <input type="text" style={{width: '140px', height: '40px', padding: '8px',fontSize: '20px'}} />
                            </div>
                            <div>
                                <input type="checkbox" style={{ transform: 'scale(1.5)', marginRight: '10px' }}/>
                                <input type="text" style={{width: '140px', height: '40px', padding: '8px',fontSize: '20px'}}/>
                            </div>
                        </div>
                    </form>
                    <button onClick={ addlocation }> { location ? "Remove Location" : "Add Location"} </button>
                        {/* <div> */}
                        {/* 
                            location ?
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.338484090619!2d75.82439617422045!3d26.892750760950396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db69383e9cba7%3A0xfa366ce932edaee3!2sSagar%20Fashions!5e0!3m2!1sen!2sin!4v1735478713395!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
                            : ""  */
                        }
                        {/* </div> */}
                    <div style={{ width: '100%', height: '400px', border: 'none'}}>
                    { location && 
                        (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.338484090619!2d75.82439617422045!3d26.892750760950396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db69383e9cba7%3A0xfa366ce932edaee3!2sSagar%20Fashions!5e0!3m2!1sen!2sin!4v1735478713395!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            /> 
                        )
                    }
                    </div>
                    <button style={{border: '1px solid red', width: '100%'}}><h3><b>ADD TASK</b></h3></button>
                    {/* <span style={{border: '1px solid blue'}}>
                        <input type="text" />
                        <div>
                        <select id="options" value={selectedOption} onChange={handleChange}>
                            <option value="">Select...</option>
                            {/* <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option> */}{/*
                        </select>
                        </div>
                    </span> */}
                </div>
            </div>
        </div>
  )
}

export default Model_add