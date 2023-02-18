import BotonMovil from './components/BotonMovil';
import Header from './components/Header';

import { useState } from 'react';
import {Sidebar} from './components/sidebar'
import Content from './components/content/Content';

export default function App() {
	const [sidebar, setSidebar] = useState(false);
	const handleSidebar = () => {
		setSidebar(!sidebar);
	};
	return (
		<div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
			<Sidebar sidebar={sidebar} />
			<BotonMovil sidebar={sidebar} handleSidebar={handleSidebar} />
			<div className="col-span-5">
				<Header />
				<Content />
				
			</div>
		</div>
	);
}
