import BombCImage from "../images/bombcrypto.png"

const BombCrypto = () => {
	return (
		<div className="flex justify-between text-center shadow-2xl h-[92vh] bg-[#FBFBFD] mx-6 my-6 ">
			<img className='border-black rounded-lg w-1/2 h-full' src={BombCImage} />
			<div className="w-1/2 relative">
				<div className='text-center shadow-2xl border-black rounded-lg h-1/2 bg-gray-200' > 
					Tutorial
					<div className=" shadow-2xl mx-2 mt-2 h-5/6 border-2 border-black bg-green-200">
					</div> 
				</div>
				<div className=' border-black rounded-lg h-1/2 bg-gray-200' > 
					Download 
					<div className="shadow-2xl mx-2 mt-2 h-5/6 border-2 border-black bg-green-200">
					</div> 
				</div>
			</div>
		</div>
	)
}

export default BombCrypto
