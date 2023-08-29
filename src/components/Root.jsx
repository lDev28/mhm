import React, { useState } from 'react'
import Home from './Home'
import Today from './Today'
import Tomorrow from './Tomorrow'
import AllTable from './AllTable'
import styles from './root.module.scss'

const Root = () => {
	const [touchStart, setTouchStart] = useState(null)
	const [touchEnd, setTouchEnd] = useState(null)

	// the required distance between touchStart and touchEnd to be detected as a swipe
	const minSwipeDistance = 50

	const onTouchStart = (e) => {
		setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
		setTouchStart(e.targetTouches[0].clientX)
	}

	const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return
		const distance = touchStart - touchEnd
		const isLeftSwipe = distance > minSwipeDistance
		const isRightSwipe = distance < -minSwipeDistance

		if (isLeftSwipe || isRightSwipe)
			if (isLeftSwipe && position <= 0) {
				// console.log('swipe', isLeftSwipe ? 'left' : 'right')
				setPosition(position - 100)
			}
		if (isLeftSwipe && position === -300) {
			setPosition(-300)
		}
		if (isRightSwipe && position >= -300) {
			setPosition(position + 100)
		}
		if (isRightSwipe && position === 0) {
			setPosition(0)
		}
	}

	const [position, setPosition] = useState(0)

	const rootPosition = {
		left: `${position}%`
	}

	return (
		<div
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
			className={styles.root}
			style={rootPosition}
		>
			<svg className={styles.bottomNav__svg} viewBox='0 0 70 70'>
				<path
					className={styles.bottomNav__svg_path}
					data-name='321 1 копия'
					d='M34.969,0C33.6,0.011,0,0,0,0S0,34.294,0,35C-0.046.19,36.333-.011,34.969,0Z'
				/>
			</svg>
			<Home />
			<Today />
			<Tomorrow />
			<AllTable />
			<div className={styles.bottomNav}>
				<button onClick={() => setPosition(0)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='35'
						viewBox='0 -960 960 960'
						width='35'
					>
						<path
							d='M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z'
							fill={position === 0 ? '#00c5e0' : 'white'}
						/>
					</svg>
					{/* <h4
						style={{ color: position === 0 ? '#00c5e0' : 'white' }}
						className={styles.bottomNav__title}
					>
						home
					</h4> */}
				</button>

				<button onClick={() => setPosition(-100)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='35'
						viewBox='0 -960 960 960'
						width='35'
					>
						<path
							d='M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z'
							fill={position === -100 ? '#00c5e0' : 'white'}
						/>
					</svg>
					{/* <h4
						style={{ color: position === -100 ? '#00c5e0' : 'white' }}
						className={styles.bottomNav__title}
					>
						şu günki
					</h4> */}
				</button>
				<button onClick={() => setPosition(-200)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='35'
						viewBox='0 -960 960 960'
						width='35'
					>
						<path
							d='M566-80v-60h214v-430H180v220h-60v-410q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H566ZM320-14l-42-42 113-114H50v-60h341L278-344l42-42 186 186L320-14ZM180-630h600v-130H180v130Zm0 0v-130 130Z'
							fill={position === -200 ? '#00c5e0' : 'white'}
						/>
					</svg>
					{/* <h4
						style={{ color: position === -200 ? '#00c5e0' : 'white' }}
						className={styles.bottomNav__title}
					>
						ertirki
					</h4> */}
				</button>
				<button onClick={() => setPosition(-300)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='35'
						viewBox='0 -960 960 960'
						width='35'
					>
						<path
							d='M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Zm300 230q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z'
							fill={position === -300 ? '#00c5e0' : 'white'}
						/>
					</svg>
					{/* <h4
						style={{ color: position === -300 ? '#00c5e0' : 'white' }}
						className={styles.bottomNav__title}
					>
						hemmesi
					</h4> */}
				</button>
			</div>
		</div>
	)
}

export default Root
