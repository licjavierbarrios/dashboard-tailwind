import React from 'react';
import { RiCloseLine, RiMenuFill } from 'react-icons/ri';

const BotonMovil = ({ sidebar, handleSidebar }) => {
	return (
		<button
			onClick={handleSidebar}
			className="absolute block lg:hidden bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl"
		>
			{sidebar ? <RiCloseLine /> : <RiMenuFill />}
		</button>
	);
};

export default BotonMovil;
