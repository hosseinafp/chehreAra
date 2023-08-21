import React from 'react';
import TextOfBox from './TextOfBox';
import { Facebook, Instagram, Linkedin, Telegram, Twitter, Whatsapp } from 'react-bootstrap-icons';
import Etehadiye from '../assets/Etehadiye.png'
import Samandehi from '../assets/Samandehi.png'
import eNAMAD from '../assets/eNAMAD.png'

const Footer = () => {
    const data=[
        {
            header:'همراه با چهره آرا',
            data:[
                {
                    name:'اتاق خبر چهره آرا'
                },
                {
                    name:'گزارش تخلف در چهره آرا'
                },
                {
                    name:'تماس با چهره آرا'
                },
                {
                    name:'درباره چهره آرا'
                },
            ]
        },
        {
           header:'خدمات مشتریان',
            data:[
                {
                    name:'پاسخ به پرسش‌های متداول'
                },
                {
                    name:'رویه‌های بازگرداندن کالا'
                },
                {
                    name:'شرایط استفاده'
                },
                {
                    name:'حریم خصوصی'
                },
            ]
        },
        {
           header:'راهنمای خرید از چهره آرا',
            data:[
                {
                    name:'نحوه ثبت سفارش'
                },
                {
                    name:'رویه ارسال سفارش'
                },
                {
                    name:'شیوه‌های پرداخت'
                },
            ]
        },
        {
           header:'ارتباط با چهره آرا',
            data:[
                {
                    name:'تلفن: ۳۲۶۵۹۸۵۴ - ۰۵۱'
                },
                {
                    name:'آدرس: خـراسان رضوی، مشهد، فرامرز عباسی، مجتمع نور، واحد ۵۵'
                },
            ]
        },
        
    ]
    return (
        <div className="rounded text-white mx-md-5 container" style={{backgroundColor:'#15181D'}}>
            <div className="row justify-content-evenly py-4">
                {data.reverse().map(item=>(
                   <TextOfBox item={item} /> 
                ))}
            </div>
            <div className="row justify-content-between mx-3">
                <div className='col-12 col-md-3 order-2 order-md-1'>
                    <h5 className="text-end">{'...چهره آرا در شبکه های اجتماعی'}</h5>
                    <div className='d-flex justify-content-evenly py-3'>
                        <Twitter   className='cursor-pointer fs-1 mx-1 align-self-center p-2 text-white border rounded' />
                        <Instagram className='cursor-pointer fs-1 mx-1 align-self-center p-2 text-white border rounded' />
                        <Telegram  className='cursor-pointer fs-1 mx-1 align-self-center p-2 text-white border rounded' />
                        <Whatsapp  className='cursor-pointer fs-1 mx-1 align-self-center p-2 text-white border rounded' />
                        <Facebook  className='cursor-pointer fs-1 mx-1 align-self-center p-2 text-white border rounded' />
                        <Linkedin  className='cursor-pointer fs-1 mx-1 align-self-center p-2 text-white border rounded' />
                    </div>
                    <p className="text-end fs-14">{'با ثبت ایمیل یا شماره موبایل خود، از اخبار و تخفیف های ویژه ی فروشگاه چهره آرا مطلع شوید.'}</p>
                    <div className='d-flex justify-content-evenly py-3'>
                        <p className='p-2 rounded cursor-pointer' style={{backgroundColor:'#272A31'}}>ثبت</p>
                        <input placeholder='...لطفا ایمیل یا شماره موبایل خود را وارد فرمایید' className='col-9 fsm2 rounded pInput' />
                    </div>
                    <h5 className="text-end">{'مجوزها'}</h5>
                    <div className='d-flex justify-content-evenly py-3'>
                        <div className='rounded bg-white cursor-pointer p-3'>
                            <img  src={eNAMAD} alt='eNAMAD' />
                        </div>
                        <div className='rounded bg-white cursor-pointer mx-1 p-3'>
                            <img  src={Samandehi} alt='Samandehi' />
                        </div>
                        <div className='rounded bg-white cursor-pointer p-3'>
                            <img  src={Etehadiye} alt='Etehadiye' />
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-9 align-self-center order-1 order-md-2'>
                    <h5 className=" text-end">{'تجربه ای متفاوت در فروشگاه اینترنتی چهره آرا'}</h5>
                    <p className="text-end text-white">
                        {'فروشگاه اینترنتی چهره آرا با بیش از 5 سال سابقه در ارائه محصولات با کيفيت ، مرغوب و با اصالت از برندهای معتبر جهانی مشغول به فعاليت است. هم اکنون فروشگاه اینترنتی چهره آرا در ادامه اين رسالت و سابقه درخشان، به دنبال ارائه محصولات با کيفيت و اورجينال از برندهای معتبر خارجی و ايرانی در محيط آنلاين است. مشتريان می توانند از ميان هزاران محصول با کيفيت خارجی و داخلی آرایشی، بهداشتی و عطر محصول مورد نظر خود را جستجو ، بررسی و انتخاب نمايند. در فروشگاه اینترنتی چهره آرا مشتريان عزیز می توانيد به راحتی، خرید اینترنتی لذت بخش، مطمئن و آسان را تجربه کنند و کالای مورد نظر خود را به سرعت در سراسر ایران دریافت نمایند.'}
                    </p>
                </div>
            
            </div>
            <hr/>
            <div className="d-flex justify-content-center text-end">
                <p style={{color:'#7F7F7F'}}>کلیه حقوق این سایت محفوظ و متعلق به شرکت چهره آرا است و استفاده از مطالب سایت، برای اهداف غیرتجاری و با ذکر منبع مانعی ندارد.</p>
            </div>
        </div>
    );
};

export default Footer;