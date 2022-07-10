import React from 'react'
import './CatItem.css'

const CatItem = ({props}) => {

  return (
    <>
      <div className='col-lg-3 col-md-4 col-sm-6 col-12 justify-content-center my-5'>
          <div className="card h-100">
            <img className='card-img-top img-thumbnail' 
                key={props?.reference_image_id } 
                src={props?.image?.url} 
                alt={props?.id}
                style={{ height: 200 }}
                />
              <div className='card-body'>
                <h2 className='card-title text-left mb-3 fs-4' key={props?.id}>{props?.name}</h2>
                <h4 className='card-text text-left fs-6 mb-4'>Origin: {props?.origin}</h4>
                <p className='mb-1'>Temperament :</p>
                <p className=''>{props?.temperament}</p>
              </div>
          </div>  
        </div>
    </>
  )
}

export default CatItem