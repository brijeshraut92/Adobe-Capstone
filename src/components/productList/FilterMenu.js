import React from 'react';
import sliders from '../../assets/icons/sliders.png'
import '../../Styles/components/filterMenu.scss'

export default function FilterMenu(props) {
    function openNav() {
        document.getElementById("mySidepanel").style.width = "343px";
    }

    function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }

    return (
        <>
            <a className="Filter-sort" onClick={openNav}>
                <img className="icon" src={sliders} alt="profile icon" />
                Filter Results</a>
            <div id="mySidepanel" class="sidepanel">
                <a href="#" class="closebtn" onClick={closeNav}>×</a>
                <p>Filters</p>
                <div className="dividerr"></div>
                <div className='color-boxx'>
                    <div className='color-cardd' id='black' />
                    <a>X Black</a>
                    <p>clear all</p>
                </div>
                <div className="divider"></div>
                <p>Attribute</p>
                {props.categoryNames}
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
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br>
            <input type="checkbox"  id="Option" name="Option" value="Option" />
            <label htmlFor="Option"> Option</label><br></br> */}

            </div>
        </>
    )
}
