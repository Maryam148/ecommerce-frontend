import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div>
            <hr />
            <div className="my-5 flex justify-center flex-row  gap-10 sm:gap-x-50  ">
                <div>
                    <ul className='flex flex-col gap-1 text-gray-700'>
                        <li>FAQs</li>
                        <li>Payment</li>
                        <li>How to Buy</li>
                        <li>Shipping & Deliveries</li>
                        <li>Exchange & Returns</li>
                    </ul>
                </div>
                <div>
                    <p className='text-l font-medium mb-3'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-700'>
                        <li>+92 320 4066881</li>
                        <li>+92 123 4567891</li>
                        <li>contact@wiwiwi.com</li>
                    </ul>
                </div>
                
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>@Copyrights Reserved by WIWIWI 2025</p>
            </div>
            

        </div>
    )
}

export default Footer