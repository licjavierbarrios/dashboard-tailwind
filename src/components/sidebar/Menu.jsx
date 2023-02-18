import React from 'react';
import menu from '../../helpers/menu-db';
import ItemMenu from './ItemMenu';

const Menu = () => {
	return (
		<nav>
			<ul>
				{menu.map((item) => (
					<li key={item.id}>
						<ItemMenu item={item} />
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Menu;
