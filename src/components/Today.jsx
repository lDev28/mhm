import React from 'react'
import MHMTable from '../data/table'
import './table.scss'
import TableBox from './TableBox'
import styles from './root.module.scss'

const Today = () => {
	const todaysDay = new Date().toLocaleString('en-us', { weekday: 'long' })

	let table

	MHMTable.forEach((day) => {
		if (todaysDay === day[0]) {
			table = day
		}
	})

	const date = new Date()
	const studyStarts = new Date('February 9, 2023 00:00:00')

	const moment = date - studyStarts
	const days = moment / 1000 / 60 / 60 / 24 + 3

	let weekType = ''

	if (Math.floor(days / 7) % 2 === 1) {
		weekType = 'Sanawjy'
	} else {
		weekType = 'Maýdalawjy'
	}

	const topTable = table[1]
	const bottomTable = table[2]

	let todaysTable

	if (weekType === 'Maýdalawjy') {
		todaysTable = bottomTable
	} else {
		todaysTable = topTable
	}

	return (
		<div className={styles.root__block}>
			<h3 className='table__weekType'>{weekType}</h3>
			<h1 className='table__title'>Şu günki sapaklar</h1>

			<TableBox table={todaysTable} weekday={table[3]} classN={'today'} />
		</div>
	)
}

export default Today
