import React from 'react'
import { Component } from "react";

class Template extends Component {
    render() {
        const { number } = this.props;
        const { title } = this.props;
        const { desc } = this.props;
        return (
            <>

                <section className='flex flex-col  h-96 max-w-96 w-auto '>
                    <h1 className='border-b-2 text-4xl w-80 border-white'>{number}</h1>
                    <div className='flex flex-col gap-1 mt-5'>
                        <h1 className='font-bold text-2xl'>{title}</h1>
                        <p className='text-xl mt-3'>{desc}</p>
                    </div>
                </section>

            </>
        );
    }
}

function Section2() {

    return (

        <div className='h-full relative bg-black'>
            <h1 className='font-bold text-5xl text-white text-center pt-20'>How it works</h1>
            <section className='text-white items-center flex flex-wrap justify-center relative gap-x-28 mt-20'>


                <Template number={'01'} title={'Find a professional'} desc={'Browse services, portfolios, and client reviews and then connect with agencies and freelancers you like to work with. You can also fill out a form and get matched with providers that fit your needs.'} />
                <Template number={'02'} title={'Discuss your needs'} desc={'Once connected, ask any questions you have to potential providers, outline your project goals and expectations, get feedback and price quotes, and review your options.'} />
                <Template number={'03'} title={'Get your project done'} desc={'Start working with your pro, set a timeline, payment plan and project details that will help bring your ideas to life.'} />
            </section>
        </div>
    )
}


export default Section2
