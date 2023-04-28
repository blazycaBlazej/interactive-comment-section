import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './SortButton.scss'
import { uiActions } from '../../../../store/store'

interface RootState {
	ui: {
		filtrIsOpen: boolean
		filtrString: string
	}
}

const SortButton = (): JSX.Element => {
	const myRef = useRef<HTMLDivElement | null>(null)
	const dispatch = useDispatch()

	const filtrIsOpen = useSelector((state: RootState) => state.ui.filtrIsOpen)

	const filtrString = useSelector((state: RootState) => state.ui.filtrString)

	const clickHandler = (e: React.MouseEvent) => {
		e.stopPropagation()
		dispatch(uiActions.toggleFiltr())
	}

	const sortLikeHandler = () => {
		dispatch(uiActions.sortByLikes())
		dispatch(uiActions.changeFiltrString({ string: 'Best comments' }))
	}

	const sortTimeHandler = () => {
		dispatch(uiActions.sortByTime())
		dispatch(uiActions.changeFiltrString({ string: 'From the latest' }))
	}

	const handleClickOutside = (e: MouseEvent) => {
		if (myRef.current && !myRef.current.contains(e.target as Node)) {
			dispatch(uiActions.closeFiltr())
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])
	return (
		<div ref={myRef} className='sort-button' data-isopen={filtrIsOpen} onClick={clickHandler}>
			<button className='sort-button__button'>
				<span>{filtrString}</span>
				<span>
					<svg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'>
						<g clip-path='url(#clip0_1_2638)'>
							<path d='M4.99997 7.85012C4.82075 7.85012 4.64155 7.78169 4.50492 7.64512L0.205141 3.3453C-0.0683805 3.07178 -0.0683805 2.62831 0.205141 2.3549C0.478552 2.08149 0.921933 2.08149 1.19548 2.3549L4.99997 6.15962L8.80449 2.35503C9.07801 2.08162 9.52135 2.08162 9.79474 2.35503C10.0684 2.62844 10.0684 3.07191 9.79474 3.34543L5.49503 7.64525C5.35832 7.78185 5.17913 7.85012 4.99997 7.85012Z' />
						</g>
						<defs>
							<clipPath id='clip0_1_2638'>
								<rect width='10' height='10' fill='white' />
							</clipPath>
						</defs>
					</svg>
				</span>
			</button>

			<div className='sort-button__menu'>
				<span
					className='sort-button__element'
					onClick={sortLikeHandler}
					data-active={filtrString === 'Best comments' ? 'true' : 'false'}>
					Best comments
				</span>

				<span
					className='sort-button__element'
					onClick={sortTimeHandler}
					data-active={filtrString === 'From the latest' ? 'true' : 'false'}>
					From the latest
				</span>
			</div>
		</div>
	)
}

export default SortButton
