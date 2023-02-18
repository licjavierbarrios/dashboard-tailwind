import React from 'react';
import { RiArrowDownSLine, RiCheckboxBlankCircleFill, RiNotification3Line, RiSearchLine } from 'react-icons/ri';


const Header = () => {
	return (
		<header className="flex items-center justify-between flex-col md:flex-row gap-4 p-4 w-full">
			{/* Search */}
			<form className=" lg:pl-6 w-full md:w-[40%] lg:w-[30%] order-1 md:order-none">
				<div className="relative">
					<RiSearchLine className="absolute left-2 top-3" />
					<input
						type="text"
						className="bg-gray-300 py-2 pl-8 pr-4 outline-none rounded-lg w-full"
						placeholder="Quick Search (ctrl + D)"
					/>
				</div>
			</form>
			{/* Notifications */}
			<nav className="w-full md:md:w-[60%] lg:w-[70%] flex justify-center md:justify-end">
				<ul className="flex items-center gap-4">
					<li>
						<a href="#" className="relative">
							<RiNotification3Line className="text-xl" />
							<RiCheckboxBlankCircleFill className="absolute -top-1 -right-1 text-xs text-red-500" />
						</a>
					</li>
					<li>
						<a href="#" className="flex items-center gap-1">
							Maxy Barrios
							<RiArrowDownSLine />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
