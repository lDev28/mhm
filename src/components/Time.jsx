import { useState, useEffect } from 'react'
import './time.scss'

const Time = () => {
	const [date, setDate] = useState(new Date())
	const monthNames = [
		'Ýanwar',
		'Fewral',
		'Mart',
		'Aprel',
		'Maý',
		'Iýun',
		'Iýul',
		'Awgust',
		'Sentýabr',
		'Oktýabr',
		'Noýabr',
		'Dekabr'
	]

	const day = date.getDate()
	let month = date.getMonth()
	const year = date.getFullYear()

	let s = new Date().getSeconds()
	let m = new Date().getMinutes()
	let h = new Date().getHours()

	h = h < 10 ? '0' + h : h
	m = m < 10 ? '0' + m : m
	s = s < 10 ? '0' + s : s

	if (month < 10) {
		month = '0' + (month + 1)
	}

	useEffect(() => {
		var timerID = setInterval(() => tick(), 1000)
		return function cleanup() {
			clearInterval(timerID)
		}
	})

	function tick() {
		setDate(new Date())
	}

	const dashOffset = {
		s: {
			strokeDashoffset: 251 - (251 * s) / 60
		},
		m: {
			strokeDashoffset: 251 - (251 * m) / 60
		},
		h: {
			strokeDashoffset: 251 - (251 * h) / 12
		}
	}

	const rotate = {
		s: {
			transform: `rotate(${s * 6}deg)`
		},
		m: {
			transform: `rotate(${m * 6}deg)`
		},
		h: {
			transform: `rotate(${h * 30}deg)`
		}
	}
	return (
		<div className='time__root'>
			<p>
				{day}.{monthNames[date.getMonth()]}.{year}
			</p>
			<div className='time__block'>
				<div id='time' className='time'>
					<h2 className='time__title'>{h}</h2>
					<p className='time__subtitle'>sagat</p>
					<div className='dots' style={rotate.h}></div>
					<svg className='time__svg' height='100' width='100'>
						<circle cx='50' cy='50' r='40' />
						<circle cx='50' cy='50' r='40' style={dashOffset.h} />
					</svg>
				</div>
				<div id='time' className='time'>
					<h2 className='time__title'>{m}</h2>
					<p className='time__subtitle'>minut</p>
					<div className='dots' style={rotate.m}></div>
					<svg className='time__svg' height='100' width='100'>
						<circle cx='50' cy='50' r='40' />
						<circle cx='50' cy='50' r='40' style={dashOffset.m} />
					</svg>
				</div>
				<div id='time' className='time'>
					<h2 className='time__title'>{s}</h2>
					<p className='time__subtitle'>sekunt</p>
					<div className='dots' style={rotate.s}></div>
					<svg className='time__svg' height='100' width='100'>
						<circle cx='50' cy='50' r='40' />
						<circle cx='50' cy='50' r='40' style={dashOffset.s} />
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Time
