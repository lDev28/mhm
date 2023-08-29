import styles from './root.module.scss'
import Time from './Time'

const Home = () => {
	// const [countdown, setCountdown] = useState()

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

	// TIME-table
	const time = {
		firstPair: '8:30 - 9:50',
		secondPair: '10:00 - 11:30',
		breakeTime: '9:50 - 10:00'
	}
	return (
		<div className={styles.root__block}>
			<h1 className={styles.root__block_title}>MHM-table</h1>
			{/* <div className='Date'>
			</div> */}
			<Time />
			<h3 className='table__weekType'>{weekType} hepde</h3>

			<div className={styles.Time}>
				<div className={styles.Time__block}>
					<h3 className={styles.Time__title}>birinji para</h3>
					<p className={styles.Time__time}>{time.firstPair}</p>
				</div>
				<div className={styles.Time__block}>
					<h3 className={styles.Time__title}>arakesme</h3>
					<p className={styles.Time__time}>{time.breakeTime}</p>
				</div>
				<div className={styles.Time__block}>
					<h3 className={styles.Time__title}>ikinji para</h3>
					<p className={styles.Time__time}>{time.secondPair}</p>
				</div>
			</div>
			<h5 className={styles.root__block_title}>
				developed by: Arslan Garayev
			</h5>
		</div>
	)
}

export default Home
