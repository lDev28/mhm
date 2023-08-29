import React from 'react'
import TableContent from './TableContent'
import styles from './root.module.scss'

const TableBox = ({ table, weekday, classN }) => {
	// console.log(weekday)
	return (
		<div>
			<h2 className={styles.dayTitle}>{weekday}</h2>
			{table.map((elem) => (
				<TableContent
					tableContent={elem}
					className={classN}
					key={elem.id}
				/>
			))}
		</div>
	)
}

export default TableBox
