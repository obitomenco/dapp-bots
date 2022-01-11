import React from 'react'
import { Routes, Route } from 'react-router';

import {Welcome, Footer, BombCrypto} from './components'

const App = () =>  {
	return (
		<dev >
			<Routes> 
				<Route exact path="/" element={<Welcome />}/>
				<Route path="/bombcrypto" element={<BombCrypto />}/>	
			</Routes>
			<Footer />
		</dev>
	);
}

export default App;

/*
									<div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
										<h3>
												<a
													href="javascript:void(0)"
													className="
													font-semibold
													text-dark text-xl
													sm:text-[22px]
													md:text-xl
													lg:text-[22px]
													xl:text-xl
													2xl:text-[22px]
													mb-4
													block
													hover:text-primary
													"
													>
												The ultimate UX and UI guide to card design
												</a>
										</h3>
										<p className="text-base text-body-color leading-relaxed mb-7">
												Lorem ipsum dolor sit amet pretium consectetur adipiscing
												elit. Lorem consectetur adipiscing elit.
										</p>
										<a
												href="javascript:void(0)"
												className="
												inline-block
												py-2
												px-7
												border border-[#E5E7EB]
												rounded-full
												text-base text-body-color
												font-medium
												hover:border-primary hover:bg-primary hover:text-white
												transition
												"
												>
										View Details
										</a>
									</div>
 */
