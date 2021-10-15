import { useState } from "react"
import Main from "./components/main/Main"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

export default function App () {
	const [sidebarOpen, setsidebarOpen] = useState(false)
	const openSidebar = () => {
		setsidebarOpen(true)
	}
	const closeSidebar = () => {
		setsidebarOpen(false)
	}
	return (
		<div className="container">
			<Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
			<Main />
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
		</div>
	)
}