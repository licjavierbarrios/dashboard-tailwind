import React from 'react';

const ItemMenu = ({item}) => {
	const Icon = item.icon;
	return (
		<div>
			<a
				href={item.link}
				className="flex items-center p-4 text-gray-400 gap-4 font-semibold hover:bg-purple-500 hover:text-white rounded-lg transition-color"
			>
				<Icon />

				{item.title}
			</a>
		</div>
	);
};

export default ItemMenu;
