import "./Footer.scss"

export default function Footer({handleClick, data}) {


	return (
		<footer>
			<div>
				<h1>
					{data?.title}
				</h1>
			</div>
			<button onClick={()=> {handleClick()}}>
			<i className="fa-solid fa-circle-info"></i>
			</button>
		</footer>
	)
}
