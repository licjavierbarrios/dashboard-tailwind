import React from 'react';
import Menu from './Menu';

const Sidebar = () => {
	return (
		<div className="col-span-1 p-8">
			{/* Logotipo */}
			<div className="text-center p-8">
				<h1 className="uppercase font-bold tracking-[4px]">Tu logo</h1>
			</div>
			{/* Menu */}
			<Menu />
		</div>
	);
};

export default Sidebar;
