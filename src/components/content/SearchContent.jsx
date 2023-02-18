import React from 'react';
import { RiFilter3Line, RiMapPinRangeLine, RiSearchLine } from 'react-icons/ri';

const SearchContent = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
			<form className="col-span-1 md:col-span-2">
				<div className="relative">
					<RiSearchLine className="absolute left-2 top-3 text-purple-600" />
					<input
						type="text"
						className="bg-white py-2 pl-8 pr-4 outline-none w-full"
						placeholder="Search"
					/>
				</div>
			</form>
			<form className="col-span-1">
				<div className="relative">
					<RiMapPinRangeLine className="absolute left-2 top-3 text-purple-600" />
					<select
						type="text"
						className="bg-white py-2 pl-8 pr-4 outline-none w-full"
						placeholder="Search"
					>
						<option value="AnyWhere">AnyWhere</option>
					</select>
				</div>
			</form>
			<form className="col-span-1">
				<div className="relative">
					<RiFilter3Line className="absolute left-2 top-3 text-purple-600" />
					<input
						type="text"
						className="bg-white py-2 pl-8 pr-4 outline-none w-full"
						placeholder="Filters"
					/>
				<span className="absolute right-3 md:right-2 top-[6px] bg-purple-600 text-white py-1 px-[10px] rounded-full text-sm">
					4
				</span>
				</div>
			</form>
		</div>
	);
};

export default SearchContent;
