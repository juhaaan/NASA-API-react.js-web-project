import "./Footer.scss"

export default function Footer({handleClick, data}) {


	return (
		<footer>
			<div>
				<h2>
					{data?.title}
				</h2>
			</div>
			<button onClick={()=> {handleClick()}}>
			<i className="fa-solid fa-circle-info"></i>
			</button>
		</footer>
	)
}
