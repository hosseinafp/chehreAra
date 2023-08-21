import React from 'react';
import logo from '../assets/Chehre.png'
import { Cart3, Person } from 'react-bootstrap-icons';
const Header = () => {
    return (
        <div style={{background: '#15181D'}} className="align-items-center row justify-content-between py-1 p-md-2 mx-md-5 mt-md-1 rounded">
            <div className="col-6 col-md-3 ">
                <div className="d-flex justify-content-evenly align-items-center">
                    <div className="col-2 rounded"  style={{background:'#272A31'}}>
                        <div className='d-flex justify-content-center cursor-pointer'>
                                <div className='position-relative'>
                                <Cart3 className='fs-1 align-self-center p-1 text-white' />
                                <span className="position-absolute bottom-0 right-0 badge rounded bg-danger fsm">
                                    ۵
                                    <span className="visually-hidden">unread messages</span>
                                </span> 
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <span style={{background:'#272A31'}} className='p-1 cursor-pointer rounded text-white desktop'>
                            ثبت نام/ ورود
                        </span>
                        <Person className='mobile fs-1 align-self-center p-1 text-white' />
                    </div>
                    <div className="col-md-4 text-white desktop">
                        !سلام مهرناز
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-9 text-end">
                <img src={logo} alt="Chehre" />
            </div>
        </div>
    );
};

export default Header;