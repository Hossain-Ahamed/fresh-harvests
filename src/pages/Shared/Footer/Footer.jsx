import React from 'react';
import { Link } from 'react-router-dom';
import phoneIcon from '../../../assets/svg/telephone.svg'
import mailIcon from '../../../assets/svg/email.svg'
import landmarkIcon from '../../../assets/svg/landmark.svg'
import appstore from '../../../assets/svg/appstore.svg'
import playstore from '../../../assets/svg/playstore.svg';
import visa from '../../../assets/svg/visa.svg';
import paypal from '../../../assets/svg/paypal.svg';
import applepay from '../../../assets/svg/applepay.svg';
import social from '../../../assets/svg/social.svg';
import logoIcon from '../../../assets/svg/icon.svg'

const Footer = () => {
    return (
        <div className='bg-grey-20 mt-14 lg:mt-36 pt-8 lg:pt-16 px-4 lg:px-10  '>

            <div className='grid grid-cols-1 lg:grid-cols-5 gap-y-7'>
                <div className='col-span-1 lg:col-span-2 flex justify-start items-center gap-3'>
                    <img src={logoIcon} alt="logo" className='w-8 h-8 lg:w-14 lg:h-14' />
                    <h1 className='heading-5 lg:heading-3'>Fresh harvests</h1>
                </div>
                <div className='col-span-1 lg:col-span-3 w-full grid grid-cols-4 px-2'>
                    <QuickLink
                        sectionName="Quick links1"
                        links={[
                            {
                                name: 'Home',
                                path: '/',
                            },
                            {
                                name: 'Shop',
                                path: '/shop',
                            },
                            {
                                name: 'About us',
                                path: '/#about-us',
                            },
                            {
                                name: 'Blog',
                                path: '/#blog',
                            },
                            {
                                name: 'Detail Blog',
                                path: '/',
                            },
                        ]}
                    />
                    <QuickLink
                        sectionName="Quick links2"
                        links={[
                            {
                                name: 'Favorites',
                                path: '/',
                            },
                            {
                                name: 'Cart',
                                path: '/',
                            },
                            {
                                name: 'Sign in',
                                path: '/#sign-in',
                            },
                            {
                                name: 'Register',
                                path: '/',
                            },

                        ]}
                    />

                    <div className='col-span-2 grid grid-cols-1 gap-2 items-start'>
                        <p className='text-black heading-6' aria-label='contact information'>Contact us</p>
                        <Link className='flex items-center justify-start gap-x-1 cursor-pointer' to="tel:1234 5678 90">
                            <img src={phoneIcon} alt="phone icons" />
                            <span className='text-grey-100 body-3 lg:body-2'>1234 5678 90</span>
                        </Link>
                        <Link className='flex items-center justify-start gap-x-1 cursor-pointer' to="#" onClick={() => window.open(`mailto:Freshharvests@gmail.com`, '_blank')}>
                            <img src={mailIcon} alt="email icons" />
                            <span className='text-grey-100 body-3 lg:body-2'>Freshharvests@gmail.com</span>
                        </Link>
                        <p className='flex items-center justify-start gap-x-1 cursor-pointer' >
                            <img src={landmarkIcon} alt="landmark icons" />
                            <span className='text-grey-100 body-3 lg:body-2'>Tanjung Sari Street, Pontianak, Indonesia</span>
                        </p>
                    </div>
                </div>

            </div>
            <div className='mt-4 flex flex-col lg:flex-row  justify-center lg:justify-between items-start lg:items-center'>
                <div className='order-2 lg:order-1'>
                    <p className='heading-7 text-black'>Download App:</p>
                    <div className='my-3 flex justify-start items-start gap-x-4'>
                        <img src={appstore} alt="appstore" />
                        <img src={playstore} alt="playstore" />
                    </div>
                </div>
                <div className='order-1 lg:order-2'>
                    <p className='heading-7 text-black'>Accepted Payment Methods:</p>
                    <div className='my-3  flex justify-start items-start gap-x-2.5'>
                        <img src={visa} alt="visa" />
                        <img src={paypal} alt="paypal" />
                        <img src={applepay} alt="applepay" />
                    </div>
                </div>
            </div>
            <hr className="h-px mt-8 bg-grey-50 border-0" />

            <div className='py-6 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='order-2 lg:order-1 flex justify-center lg:justify-start items-center'>
                    
                   <p className='heading-7 text-black'>© Copyright 2024, All Rights Reserved by Banana Studio</p>
                </div>
                <div className='order-1 lg:order-2 flex justify-center lg:justify-end items-center'>
                   <img src={social} alt="social icons" />
                </div>
            </div>

          
        </div>
    );
};

export default Footer;

const QuickLink = ({ sectionName, links }) => {
    console.log(links)
    return (
        <div className='grid grid-cols-1 gap-3 items-start justify-start'>
            <p className='text-black heading-6'>{sectionName}</p>
            {
                links.map((link, _idx) => <Link key={_idx} to={link.path} className='body-3 text-grey-100 cursor-pointer'>{link.name}</Link>)
            }
        </div>
    )
}