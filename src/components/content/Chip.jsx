import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

const Chip = () => {
	return (
		<div className="flex items-center flex-wrap gap-4 mb-20">
			<span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
				<button className="flex items-center gap-4 bg-purple-200 p-1 rounded-full text-purple-600 text-sm">
					<RiCloseLine />
				</button>
				<span className="text-gray-500">Design</span>
			</span>
			<span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
				<button className="flex items-center gap-4 bg-purple-200 p-1 rounded-full text-purple-600 text-sm">
					<RiCloseLine />
				</button>
				<span className="text-gray-500">Regular</span>
			</span>
			<span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
				<button className="flex items-center gap-4 bg-purple-200 p-1 rounded-full text-purple-600 text-sm">
					<RiCloseLine />
				</button>
				<span className="text-gray-500">Full Time</span>
			</span>
			<span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
				<button className="flex items-center gap-4 bg-purple-200 p-1 rounded-full text-purple-600 text-sm">
					<RiCloseLine />
				</button>
				<span className="text-gray-500">B2B</span>
			</span>

			<button className="text-gray-500 ml-4">Clear All</button>
		</div>
	);
};

export default Chip;
