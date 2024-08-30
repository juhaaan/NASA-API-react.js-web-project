import "./SideBar.scss"

export default function SideBar({handleClick, data}) {
	return (
		<div className='SideBar'>
			<div className='BackGroundOverLay'></div>
			<div className='SideBarContent'>
				<h2>{data?.title}</h2>
				<div>
					<p>{data?.explanation}</p>
				</div>
				<button onClick={()=> handleClick()}>
				<i className="fa-solid fa-right-long"></i>
				</button>
			</div>
		</div>
	)
}
