import './ui.css'

const TopNav = () => {
	return (
		<div className='topNav'>
			<svg className='topNav__svg' viewBox='0 0 70 70'>
				<path
					className='topNav__svg_path'
					fill='black'
					data-name='321 1 копия'
					d='M34.969,0C33.6,0.011,0,0,0,0S0,34.294,0,35C-0.046.19,36.333-.011,34.969,0Z'
				/>
			</svg>

			<div className='topNav__content'>
				<h1>MHM-3</h1>
			</div>
		</div>
	)
}

export default TopNav
