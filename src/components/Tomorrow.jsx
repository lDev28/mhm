import React from 'react'
import MHMTable from '../data/table'
import './table.scss'
import TableBox from './TableBox'
import styles from './root.module.scss'

const Tomorrow = () => {
	const tomorrowsDay = new Date(Date.now() + 1000 * 3600 * 24).toLocaleString(
		'en-us',
		{ weekday: 'long' }
	)

	let tomorrowsTable

	MHMTable.forEach((tomorrow) => {
		if (tomorrowsDay === tomorrow[0]) {
			tomorrowsTable = tomorrow
		}
	})

	const date = new Date()
	const studyStarts = new Date('February 9, 2023 00:00:00')

	const moment = date - studyStarts
	const days = moment / 1000 / 60 / 60 / 24 + 4

	let weekType = ''

	if (Math.floor(days / 7) % 2 === 1) {
		weekType = 'Sanawjy'
	} else {
		weekType = 'Maýdalawjy'
	}

	const topTable = tomorrowsTable[1]
	const bottomTable = tomorrowsTable[2]

	let todaysTable

	if (weekType === 'Maýdalawjy') {
		todaysTable = bottomTable
	} else {
		todaysTable = topTable
	}

	return (
		<div className={styles.root__block}>
			<h1 className='table__title'>Ertirki sapaklar</h1>
			<TableBox
				table={todaysTable}
				weekday={tomorrowsTable[3]}
				classN={'today'}
			/>
		</div>
	)
}

export default Tomorrow
