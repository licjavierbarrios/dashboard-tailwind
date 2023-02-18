import { RiArrowDownSLine } from 'react-icons/ri';

const Results = () => {
	return (
		<div className="flex flex-center justify-between mb-8">
			<p className="text-gray-500">
				We've found <span className="text-purple-600 font-bold">523</span> jobs!
			</p>
			<p className="flex items-center gap-2">
				Sort by: <span className="text-purple-600 font-bold">Date</span>
				<RiArrowDownSLine className="inline-block text-purple-600 hover: cursor-pointer" />
			</p>
		</div>
	);
};

export default Results;
