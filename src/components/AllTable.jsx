import React, { useState } from 'react'
import './table.scss'
import MHMTable from '../data/table'
import TableBox from './TableBox'
import styles from './root.module.scss'

const AllTable = () => {
	const funcfilt = (all) => all[3] !== 'Ýekşenbe'

	const [showS, setShowS] = useState('')

	const showBlockS = () => {
		showS === '' ? setShowS('show') : setShowS('')
	}

	const [showM, setShowM] = useState('')

	const showBlockM = () => {
		showM === '' ? setShowM('show') : setShowM('')
	}

	return (
		<div className={styles.root__block}>
			<h3 className='table__weekType_block' onClick={showBlockS}>
				Sanawjy hepde
				<svg
					className={showS}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 -960 960 960'
				>
					<path d='M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z' />
				</svg>
			</h3>
			<div className={`allTableBlock ${showS}`}>
				{MHMTable.filter(funcfilt).map((all) => (
					<TableBox
						table={all[1]}
						weekday={all[3]}
						classN={'today'}
						key={all[3] + '1'}
					/>
				))}
			</div>

			<h3 className='table__weekType_block' onClick={showBlockM}>
				Maydalawjy hepde
				<svg
					className={showM}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 -960 960 960'
				>
					<path d='M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z' />
				</svg>
			</h3>
			<div className={`allTableBlock ${showM}`}>
				{MHMTable.filter(funcfilt).map((all) => (
					<TableBox
						table={all[2]}
						weekday={all[3]}
						classN={'today'}
						key={all[3] + '1'}
					/>
				))}
			</div>
		</div>
	)
}
export default AllTable
