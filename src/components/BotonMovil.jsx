import React from 'react';
import { RiCloseLine, RiMenuFill } from 'react-icons/ri';

const BotonMovil = ({ sidebar, handleSidebar }) => {
	return (
		<button
			onClick={handleSidebar}
			className="fixed block lg:hidden bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl z-40"
		>
			{sidebar ? <RiCloseLine /> : <RiMenuFill />}
		</button>
	);
};

export default BotonMovil;
