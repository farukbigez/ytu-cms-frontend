import "./sidebar.css"

export default function Sidebar ({ sidebarOpen, closeSidebar }) {
	return (
		<div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
			<div className="sidebar__title">
				<div className="sidebar__img">
					<img src="https://via.placeholder.com/75x75" alt="logo" />
					<div className="sidebar__title--name">ytu-cms</div>
				</div>
			</div>

				<div className="sidebar__menu">
					<div>
						<div className="sidebar__link active_menu_link">
							<a className="sidebar__menu__link" href="/uyeler">Uyeler</a>
						</div>
						<div className="sidebar__link">
							<a className="sidebar__menu__link" href="/klupler">Klupler</a>
						</div>
						<div className="sidebar__link">
							<a className="sidebar__menu__link" href="/etkinlikler">Etkinliker</a>
						</div>
						<div className="sidebar__link">
							<a className="sidebar__menu__link" href="/etkinlikler">Evraklar</a>
						</div>
					</div>

				<div className="system__settings">
					<div className="sidebar__link">
						<a className="sidebar__menu__link" href="#">Ayarlar</a>
					</div>

					<div className="sidebar__link">
						<a className="sidebar__menu__link" href="#">Log out</a>
					</div>
				</div>
			</div>
		</div>
	)
}