import React from 'react'
import Card from './Card'

function Services() {


    return (
        <>
            <div className='relative py-16'>
                <div className="flex justify-evenly items-center flex-wrap gap-10 ">
                    <Card image={'/service1.png'} title={'Web Design'} desc={'New website, mobile site, site redesign and site migration'} />
                    <Card image={'/service2.png'} title={'Marketing & Promoting'} desc={'SEO, marketing and advertising written content and more'} />
                    <Card image={'/service3.png'} title={'Online stores'} desc={'Store optimization and settings shipping, payment capabilities and more.'} />
                    <Card image={'/service4.png'} title={'Small Tasks'} desc={'Analytics, domains, web guidance, updates and more.'} />
                    <Card image={'/service5.png'} title={'Graphic Design'} desc={'Custom logo, photography, image editing, brand development and more.'} />
                    <Card image={'/service6.png'} title={'Web Development'} desc={'Database setup, integrations, custom functionalities, code advice and more.'} />
                </div>
            </div>
        </>
    )
}

export default Services
