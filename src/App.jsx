import Sidebar from "./components/Sidebar";

export default function App() {
	return (
		<div className="min-h-screen grid grid-cols-6">
			<Sidebar />
			<div className="col-span-5">B</div>
		</div>
	);
}
