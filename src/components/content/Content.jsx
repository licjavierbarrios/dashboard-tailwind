import React from 'react';
import SearchContent from './SearchContent';
import Chip from './Chip';
import Results from './Results';
import Card from './Card';

const Content = () => {
	return (
		<div className="p-4 lg:p-12 bg-gray-300">
			<div className="mb-8">
				<h1 className="text-3xl font-semibold">Job Board</h1>
			</div>
			<SearchContent />
			<Chip />
			<Results />
			<Card />
		</div>
	);
};

export default Content;
