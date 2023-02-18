import React from 'react';
import { RiAmazonLine, RiDropboxFill, RiGoogleLine, RiTwitchLine } from 'react-icons/ri';

const Card = () => {
	return (
		<>
			<a
				href="#"
				className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-ful drop-shadow-xl border-2 border-transparent hover:border-purple-400 transition-all mb-4"
			>
				<div className="w-full md:w-[10%]">
					<RiDropboxFill className="text-7xl text-purple-600 bg-purple-200 p-4 flex items-center justify-center rounded-md" />
				</div>
				<div className="w-full md:w-[70%]">
					<h1 className="text-xl flex items-center gap-4 mb-2 font-bold">
						UX Design
						<span className="text-xs py-1 px-2 bg-purple-200 text-purple-600 p-4">Remote</span>
						<span className="text-xs py-1 px-2 bg-green-200 text-green-600 p-4">Sketch</span>
					</h1>
					<p className="text-gray-500">Dropbox ---- Warzawa</p>
				</div>
				<div className="w-full md:w-[20%] flex flex-col items-end">
					<h3 className="text-xl text-gray-500 mb-2">8.2 - 13.7k PLN</h3>
					<p className="text-gray-500">2 days ago</p>
				</div>
			</a>
			<a
				href="#"
				className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-ful drop-shadow-xl border-2 border-transparent hover:border-purple-400 transition-all mb-4"
			>
				<div className="w-full md:w-[10%]">
					<RiTwitchLine className="text-7xl text-purple-600 bg-purple-200 p-4 flex items-center justify-center rounded-md" />
				</div>
				<div className="w-full md:w-[70%]">
					<h1 className="text-xl flex items-center gap-4 mb-2 font-bold">
						Product Designer
						<span className="text-xs py-1 px-2 bg-purple-200 text-purple-600 p-4">Remote</span>
					</h1>
					<p className="text-gray-500">Twitch ---- Wroclaw</p>
				</div>
				<div className="w-full md:w-[20%] flex flex-col items-end">
					<h3 className="text-xl text-gray-500 mb-2">8.2 - 13.5k PLN</h3>
					<p className="text-gray-500">2 days ago</p>
				</div>
			</a>
			<a
				href="#"
				className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-ful drop-shadow-xl border-2 border-transparent hover:border-purple-400 transition-all mb-4"
			>
				<div className="w-full md:w-[10%]">
					<RiGoogleLine className="text-7xl text-purple-600 bg-purple-200 p-4 flex items-center justify-center rounded-md" />
				</div>
				<div className="w-full md:w-[70%]">
					<h1 className="text-xl flex items-center gap-4 mb-2 font-bold">
						UX/UI Designer
						<span className="text-xs py-1 px-2 bg-purple-200 text-purple-600 p-4">Remote</span>
						<span className="text-xs py-1 px-2 bg-yellow-200 text-yellow-600 p-4">JavaScript</span>
					</h1>
					<p className="text-gray-500">Google ---- Warzama</p>
				</div>
				<div className="w-full md:w-[20%] flex flex-col items-end">
					<h3 className="text-xl text-gray-500 mb-2">8.2 - 13.5k PLN</h3>
					<p className="text-gray-500">2 days ago</p>
				</div>
			</a>
			<a
				href="#"
				className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-ful drop-shadow-xl border-2 border-transparent hover:border-purple-400 transition-all mb-4"
			>
				<div className="w-full md:w-[10%]">
					<RiAmazonLine className="text-7xl text-purple-600 bg-purple-200 p-4 flex items-center justify-center rounded-md" />
				</div>
				<div className="w-full md:w-[70%]">
					<h1 className="text-xl flex items-center gap-4 mb-2 font-bold">
						Amazon Designer
						<span className="text-xs py-1 px-2 bg-purple-200 text-purple-600 p-4">Remote</span>
						<span className="text-xs py-1 px-2 bg-red-200 text-red-600 p-4">Adobe</span>
					</h1>
					<p className="text-gray-500">Amazon ---- Warzama</p>
				</div>
				<div className="w-full md:w-[20%] flex flex-col items-end">
					<h3 className="text-xl text-gray-500 mb-2">8.2 - 13.5k PLN</h3>
					<p className="text-gray-500">2 days ago</p>
				</div>
			</a>
		</>
	);
};

export default Card;
