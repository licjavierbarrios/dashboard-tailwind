import React from 'react';
import Menu from './Menu';
import Img from '../assets/img/join.svg';
import { RiLogoutBoxLine } from 'react-icons/ri';

const Sidebar = ({sidebar}) => {
	return (
		<div className={`fixed lg:static w-[80%] md:w-[50%] lg:w-full top-0 ${ sidebar ? "-left-0" : "-left-full" } z-50 bg-white h-full w-full overflow-y-auto col-span-1 p-8 border-r transition-all`}>
			{/* Logotipo */}
			<div className="text-center p-6">
				<h1 className="uppercase font-bold tracking-[4px]">Tu logo</h1>
			</div>
			<div className="h-[90%] flex flex-col justify-between">
				{/* Menu */}
				<Menu />
				{/* Image and logout */}
				<div className="flex flex-col gap-4">
					<img src={Img} alt="join" />
					{/* UpDate */}
					<div className="bg-purple-100 p-8 flex flex-col gap-4 rounded-3xl">
						<h3 className="text-xl text-center">Get upgrade</h3>
						<p className="text-gray-500 text-center">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						</p>
						<button className="bg-purple-600 text-white hover:bg-purple-400 hover:text-gray-800 p-2 rounded-lg">
							Learn more
						</button>
					</div>
					<a
						href="#"
						className="flex items-center gap-4 flex items-center p-4 text-gray-400 gap-4 font-semibold hover:bg-purple-500 hover:text-white rounded-lg transition-color"
					>
						<RiLogoutBoxLine />
						Logout
					</a>
				</div>
			</div>
		</div>

	);
};

export default Sidebar;
