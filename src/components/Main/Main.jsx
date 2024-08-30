import "./Main.scss"
export default function Main({data}) {
	return (
		<div className='imageContainer'>
			<img src={data?.hdurl} alt='picture from api' className='backgroundImage'></img>
		</div>
	)
}
