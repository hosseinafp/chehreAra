import React from 'react';
import { Cart3,Heart,Clock } from 'react-bootstrap-icons';

const Card = ({item}) => {
    return (
        <div className="card ">
            <div className="card-body">
                <div className='d-flex justify-content-center'>
                    <div className='col-6'>
                        <Heart className='fsmicon mx-1 align-self-center p-2 text-muted border rounded cursor-pointer' />
                        <Cart3 className='fsmicon mx-1 align-self-center p-2 text-muted border rounded cursor-pointer' />
                    </div>
                    <div className='col-6'>
                        <h5 className="text-end card-title text-danger fw-bold">پیشنهاد ویژه</h5>
                        <h6 className="text-end card-subtitle mb-2 text-danger">۲۳:۱۲:۰۵
                        <Clock className='fs-6 mx-1 align-self-center text-muted' />
                        </h6>
                    </div>
                </div>
                <img src={item.src} className="card-img-top shadow mb-1 cursor-pointer" alt="..." height={'250px'} />
                <div className='d-flex justify-content-center'>
                    <p className='border-0 rounded-circle box me-1' style={{backgroundColor:'#EEAB5D'}}></p>
                    <p className='border-0 rounded-circle box me-1' style={{backgroundColor:'#CCA16A'}}></p>
                    <p className='border-0 rounded-circle box me-1' style={{backgroundColor:'#D29152'}}></p>
                    <p className='border-0 rounded-circle box me-1' style={{backgroundColor:'#E4B17F'}}></p>
                    <p className='border-0 rounded-circle box me-1' style={{backgroundColor:'#9A5315'}}></p>
                </div>
                <h5 className="text-end card-title">{item.name}</h5>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between'>
                        تومان
                        <h4 className=''>{item.price}</h4>
                    </div>
                    {item.offer=== true? <p className='rounded bg-danger text-white p-1'>%۵۰</p>:''}
                </div>
            </div>
        </div>
    );
};

export default Card;