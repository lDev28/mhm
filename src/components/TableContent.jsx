import React from 'react'
import './table.scss'
import styles from './root.module.scss'

const TableContent = ({ tableContent, className }) => {
	// console.log('table__' + className)
	return (
		<div className={'table__' + className}>
			<h2 className={styles.lesson}>{tableContent.lesson}</h2>
			<p className={styles.type}>{tableContent.type}</p>
			<h4 className={styles.teacher}>{tableContent.teacher}</h4>
			<h2 className={styles.auditory}>{tableContent.auditory}</h2>
		</div>
	)
}

export default TableContent
