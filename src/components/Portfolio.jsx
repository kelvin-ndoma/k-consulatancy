import SEO from "../assets/SEO.png";
import AD from "../assets/ADs.png";
import AB from "../assets/AB testing.png";
import Web from "../assets/Web & App Audit.png";
import Email from "../assets/Email marketing.png";
import Content from "../assets/Content creation.png";
import Social from "../assets/Social media.png";
import Google from "../assets/G4A.png";
import Page from "../assets/Landing page.png";
import Contents from "../assets/Content creation.png";
import Campaign from "../assets/campaign.png";
import maths from "../assets/maths.png";
import Rails from "../assets/ruby.png";
import Reactjs from "../assets/react.png";
import JS from "../assets/js.png";
import Tailwind from "../assets/css.png";
import Boot from "../assets/bootstrap.png"
import Css from "../assets/css.png";
import html from "../assets/html.png";
import Webs from "../assets/Web & App Audit.png";
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div name="skills" className='w-full  text-black bg-[#C0C0C0]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Set of Skills</p>
                    <p className='py-4'>Hi, these are the technologies & tools I have experience with</p>
                    <Link to="digital">
                        <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 md:mr-10 mb-2 md:mb-0 md:ml-2 rounded-md transition duration-300 ease-in-out'>
                            Digital Marketing Skills
                        </button>
                    </Link>

                    <Link to="software">
                        <button className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 md:ml-2 rounded-md transition duration-300 ease-in-out'>
                            Software Engineering Skills
                        </button>
                    </Link>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center py-8' >
                    <div className='shadow-md shadow-[#160e04] hover:scale-110 duration-500'>
                        <img className=' w-50 mx-auto' src={SEO} alt='HTML icon' />
                        <p className='py-4'>SEO & SEM</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={AD} alt='ADS icon' />
                        <p className='py-4'>Ads(FB,IG, Google)</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={AB} alt='A/B icon' />
                        <p className='py-4'>A/B Testing</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Web} alt='HTML icon' />
                        <p className='py-4'>SEO& Web +App Auditting</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-60 mx-auto' src={Email} alt='email marketing' />
                        <p className='py-4'>Email Marketing</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-60 mx-auto' src={Content} alt='HTML icon' />
                        <p className='py-4'>Content creation</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Social} alt='Social Media Management' />
                        <p className='py-4'>Social Media Management</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Google} alt='Google 4 Analyticsicon' />
                        <p className='py-4'>Google 4 Analytics</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Page} alt='Landing Pages creation and optimizationicon' />
                        <p className='py-4'>Landing Pages creation and optimization</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Contents} alt='HTML icon' />
                        <p className='py-4'>Content strategy</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Campaign} alt='Campaign management, reporting and Recommendations icon' />
                        <p className='py-4'>Campaign management, reporting and Recommendations</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Webs} alt='Web design and Developemt icon' />
                        <p className='py-4'>Web design and Developemt</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={html} alt='HTML icon' />
                        <p className='py-4'>HTML 5</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Css} alt='css icon' />
                        <p className='py-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Boot} alt='Bootstrap icon' />
                        <p className='py-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Tailwind} alt='Tailwind css icon' />
                        <p className='py-4'>Tailwind css</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={JS} alt='Javascript icon' />
                        <p className='py-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Reactjs} alt='React js & Vite icon' />
                        <p className='py-4'>React js & Vite</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={Rails} alt='Ruby on Rails icon' />
                        <p className='py-4'>Ruby on Rails</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-50 mx-auto' src={maths} alt='Mathematics & Physics Skills icon' />
                        <p className='py-4'>Mathematics & Physics Skills</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio