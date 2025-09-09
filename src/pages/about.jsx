import about from '../assets/about.png'

const About = () => {
    return(
        
        <div>
        <div className='text-2xl text-center pt-10 border-t'>
            <p className='prata-regular'>ABOUT US</p>
        </div>

        <div className='justify-center my-10 flex flex-col md:flex-row gap-10'>
            <img className='md:w-85 md:h-90' src={about} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae sequi, deserunt expedita eos veritatis aliquid minima vitae iusto atque, quaerat dicta quae deleniti repellat quas voluptates dignissimos. Quo, fuga mollitia!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iste omnis magnam perspiciatis ipsam voluptatem ipsum dolor eveniet voluptatibus, maiores eligendi numquam amet doloremque, est sed quam commodi quos et?</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa saepe aspernatur nobis, cumque odit, architecto dicta, ducimus consequatur quae doloremque est. Necessitatibus sunt, explicabo possimus provident architecto excepturi illo ducimus.</p>
            </div>
            
        </div>
        <div className='text-xl mt-20 mb-10 flex justify-center'>
            <p className='prata-regular'>WHY CHOOSE US</p>
        </div>
        <div className='flex flex-col sm:mx-20 justify-center gap-3 md:flex-row text-sm mb-20'>
        <div className='px-10 md:px-10 border pt-2 border-gray-700 sm:py-10 flex flex-col gap-2'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nesciunt dignissimos culpa voluptatibus reprehenderit velit quos vel nobis corporis? Dolores quo rem facilis dolorum modi? Quis cum dolores accusamus neque?</p>
        </div>

        <div className=' px-10 md:px-10 border pt-2 border-gray-700 sm:py-10 flex flex-col gap-2'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nesciunt dignissimos culpa voluptatibus reprehenderit velit quos vel nobis corporis? Dolores quo rem facilis dolorum modi? Quis cum dolores accusamus neque?</p>
        </div>

        <div className='px-10 md:px-10 border pt-2 border-gray-700 sm:py-10 flex flex-col gap-2'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nesciunt dignissimos culpa voluptatibus reprehenderit velit quos vel nobis corporis? Dolores quo rem facilis dolorum modi? Quis cum dolores accusamus neque?</p>
        </div>
        </div>
        </div>
        )
}
export default About