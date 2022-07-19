import React from 'react'
import banner from '../../assets/img/banner.png'

export default function Banner() {
  return (
    <section className='banner'>
        <div className="container">
            <div className="row">
                <div className="aem-Grid aem-Grid--default--8 aem-Grid--phone--12 reverse">
                <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--12 phn-container">
                    <div className='card'>
                    <p className='text'>Women’s Outerwear
                    <div className='line'></div>
                    </p>
                    
                    </div>
                </div>
                <div className="aem-GridColumn  aem-GridColumn--default--5 aem-GridColumn--phone--12">
                <img className="banner-img" src={banner} alt="banner img" />
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
