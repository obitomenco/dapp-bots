import { Link } from 'react-router-dom';

import BombCImage from "../images/bombcrypto.png"
import AxeInfImage from "../images/axe-infinity-vert.webp"
import ThetanArenaImage from "../images/thetan-arena-vert-bg.jpg"


const Card = ({image, btnTxt, notready}) => {

	console.log({image});
	return (
	<div className="flex justify-between w-full md:w-1/2 xl:w-1/3 px-4 ">
		<div className="animate group relative  overflow-hidden rounded-lg mb-10 text-center">
            <img className="group-hover:blur-sm" src={image}/>
         { !notready 
            ? <div className='hidden group-hover:block absolute inset-0 bg-black/20 '>
                    <Link to="/bombcrypto"><button  className='hover:bg-gray-800  rounded-2xl bg-gray-600 text-white font-bold  w-1/2 h-14 my-52'> {btnTxt} 
                    </button>
                    </Link>
              </div>
                
            :(<div className='hidden group-hover:block absolute inset-0 bg-black/70 '>
                <h1 className='my-font text-white my-48 '> Comming Soon </h1>
             </div> )	
         }
		</div>					
	</div>)
};

const Welcome = () => {
    return (
        <section>
        <div className="items-center justify-center min-h-screen bg-white pt-20 lg:pt-[120px] pb-10 lg:pb-20" >
            <div className=" flex flex-wrap">
                <Card  image= {ThetanArenaImage} notready={true}/>
                <Card  image={BombCImage} btnTxt='Get Your Bot' notready={false}/>
                <Card  image={AxeInfImage}  notready={true}/>
            </div>
        </div>
        </section>
    )
}

export default Welcome;
