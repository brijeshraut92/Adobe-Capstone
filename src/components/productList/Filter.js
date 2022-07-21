import React from "react";

export default function Filter(props) {
  return (
    <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--hide">
      <div className="filter">
        <p className="tiltle">Filters</p>
        <div className="divider"></div>
        <p>Attribute</p>
        {props.categoryNames}
        {/* <div className="divider"></div>
        <p>Attribute</p>
        <div className="option">
          <input type="checkbox" name="Option" value="Option" />
          <label htmlFor="Option" > Option</label><br></br>
          <input type="checkbox" name="Option" value="Option" />
          <label htmlFor="Option"> Option</label><br></br>
          <input type="checkbox" name="Option" value="Option" />
          <label htmlFor="Option"> Option</label><br></br>
          <input type="checkbox" name="Option" value="Option" />
          <label htmlFor="Option"> Option</label><br></br>
          <input type="checkbox" name="Option" value="Option" />
          <label htmlFor="Option"> Option</label><br></br>
        </div> */}
        <div className="divider"></div>
        <div className='filter-color'>
          <h3>Color</h3>
          <div className='color-box'>
            <div className='color-card' id='black' />
            <div className='color-card' id='white' />
            <div className='color-card' id='green' />
            <div className='color-card' id='yellow' />
            <div className='color-card' id='blue' />
            <div className='color-card' id='red' />
            <div className='color-card' id='purple' />
            <div className='color-card' id='pink' />
            <div className='color-card' id='saffron' />
            <div className='color-card' id='gradient' />
          </div>
        </div>
        {/* <div className="divider"></div>
        <p>Attribute</p>
        <div className="attribute">
          <input type="checkbox" id="Option" name="Option" value="Option" />
          <label htmlFor="Option"> Option</label><br></br>
          <input type="checkbox" id="Option" name="Option" value="Option" />
          <label htmlFor="Option"> Option</label><br></br>
          <input type="checkbox" id="Option" name="Option" value="Option" />
          <label htmlFor="Option"> Option</label><br></br>
          <input type="checkbox" id="Option" name="Option" value="Option" />
          <label htmlFor="Option"> Option</label><br></br>
          <input type="checkbox" id="Option" name="Option" value="Option" />
          <label htmlFor="Option"> Option</label><br></br>
        </div> */}

      </div>
    </div>
  );
}
