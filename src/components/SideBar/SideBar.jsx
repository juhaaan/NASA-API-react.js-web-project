import "./SideBar.scss"

export default function SideBar() {
	return (
		<div className='SideBar'>
			<div className='BackGroundOverLay'></div>
			<div className='SideBarContent'>
				<h2>Mars landscape</h2>
				<div>
					<p>discription</p>
					<p>something in the way</p>
				</div>
				<button>
				<i className="fa-solid fa-right-long"></i>
				</button>
			</div>
		</div>
	)
}
