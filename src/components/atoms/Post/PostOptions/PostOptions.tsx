import React from 'react'
import FlipMove from 'react-flip-move'
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../../../store/store'
import './PostOptions.scss'

interface rootState {
	ui: {
		optionsIsOpen: boolean
		openedOptionsId: string
	}
}

interface PostOptionsProps {
	id: string
	parentId?: string | null
	creator: boolean
}

const PostOptions = ({ id, parentId, creator }: PostOptionsProps): JSX.Element => {
	const optionsIsOpen = useSelector((state: rootState) => state.ui.openedOptionsId === id)

	const dispatch = useDispatch()

	const clickHandler = () => {
		dispatch(uiActions.toggleOptions({ id }))
	}

	const deleteHandler = () => {
		dispatch(uiActions.deletePost({ id, parentId, creator }))
	}

	const editHandler = () => {
		dispatch(uiActions.editOpen({ id, creator }))
	}

	return (
		<div className='post-options'>
			<svg
				onClick={clickHandler}
				className='post-options__svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M9.75 12C9.75 13.2405 10.7595 14.25 12 14.25C13.2405 14.25 14.25 13.2405 14.25 12C14.25 10.7595 13.2405 9.75 12 9.75C10.7595 9.75 9.75 10.7595 9.75 12Z' />
				<path d='M9.75 19.5C9.75 20.7405 10.7595 21.75 12 21.75C13.2405 21.75 14.25 20.7405 14.25 19.5C14.25 18.2595 13.2405 17.25 12 17.25C10.7595 17.25 9.75 18.2595 9.75 19.5Z' />
				<path d='M9.75 4.5C9.75 5.7405 10.7595 6.75 12 6.75C13.2405 6.75 14.25 5.7405 14.25 4.5C14.25 3.2595 13.2405 2.25 12 2.25C10.7595 2.25 9.75 3.2595 9.75 4.5Z' />
			</svg>
			<FlipMove
				duration={300}
				easing='linear'
				enterAnimation={{
					from: { opacity: '0', transform: 'translateY(-50%)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				}}
				leaveAnimation={{
					from: { opacity: '1', transform: 'translateX(0)' },
					to: { opacity: '0', transform: 'translateY(-50%)' },
				}}>
				{optionsIsOpen && (
					<div className='post-options__menu'>
						<div className='post-options__menu-element' onClick={editHandler}>
							<div className='post-options__menu-element-icon'>
								<svg width='14' height='14' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
									<g clip-path='url(#clip0_1_2273)'>
										<path d='M11.4998 6.99997C11.2237 6.99997 10.9998 7.22383 10.9998 7.49997V12.4999C10.9998 12.776 10.776 12.9999 10.4998 12.9999H1.49998C1.22383 12.9999 0.999977 12.776 0.999977 12.4999V2.50003C0.999977 2.22388 1.22383 2.00003 1.49998 2.00003H7.4999C7.77605 2.00003 7.9999 1.77617 7.9999 1.50003C7.9999 1.22388 7.77605 1.00005 7.4999 1.00005H1.49998C0.671563 1.00005 0 1.67161 0 2.50003V12.4999C0 13.3283 0.671563 13.9999 1.49998 13.9999H10.4999C11.3283 13.9999 11.9998 13.3283 11.9998 12.4999V7.49995C11.9998 7.22383 11.776 6.99997 11.4998 6.99997Z' />
										<path d='M13.4354 0.560684C13.0764 0.201626 12.5895 -5.06826e-05 12.0817 7.91039e-06C11.5737 -0.00145691 11.0863 0.200572 10.7283 0.561006L4.14233 7.14639C4.08769 7.20144 4.04647 7.26835 4.02183 7.34188L3.02186 10.3418C2.93458 10.6038 3.07623 10.887 3.33823 10.9742C3.38906 10.9911 3.44229 10.9998 3.49584 10.9998C3.54952 10.9998 3.60286 10.9911 3.65384 10.9744L6.6538 9.97438C6.72748 9.94977 6.79442 9.90834 6.8493 9.85338L13.4352 3.26747C14.1827 2.52006 14.1828 1.30818 13.4354 0.560684ZM12.7282 2.56096L6.2283 9.06089L4.28632 9.70936L4.93281 7.76988L11.4352 1.26998C11.7927 0.913209 12.3717 0.913795 12.7285 1.27127C12.8989 1.44204 12.995 1.67322 12.9957 1.91447C12.9963 2.15702 12.9 2.38975 12.7282 2.56096Z' />
									</g>
									<defs>
										<clipPath id='clip0_1_2273'>
											<rect width='14' height='14' fill='white' />
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className='post-options__menu-element-header'>Edit</div>
						</div>

						<div className='post-options__menu-element' onClick={deleteHandler}>
							<div className='post-options__menu-element-icon'>
								<svg width='14' height='15' viewBox='0 0 14 15' xmlns='http://www.w3.org/2000/svg'>
									<g clip-path='url(#clip0_1_2282)'>
										<path d='M11.5937 2.24957H9.1875V1.81207C9.1875 1.08837 8.59871 0.499573 7.875 0.499573H6.125C5.40129 0.499573 4.8125 1.08837 4.8125 1.81207V2.24957H2.40625C1.80316 2.24957 1.3125 2.74023 1.3125 3.34332V4.87457C1.3125 5.11618 1.50839 5.31207 1.75 5.31207H1.98909L2.36707 13.2495C2.40045 13.9505 2.97631 14.4996 3.67806 14.4996H10.3219C11.0237 14.4996 11.5996 13.9505 11.6329 13.2495L12.0109 5.31207H12.25C12.4916 5.31207 12.6875 5.11618 12.6875 4.87457V3.34332C12.6875 2.74023 12.1968 2.24957 11.5937 2.24957ZM5.6875 1.81207C5.6875 1.57085 5.88377 1.37457 6.125 1.37457H7.875C8.11623 1.37457 8.3125 1.57085 8.3125 1.81207V2.24957H5.6875V1.81207ZM2.1875 3.34332C2.1875 3.22271 2.28564 3.12457 2.40625 3.12457H11.5937C11.7144 3.12457 11.8125 3.22271 11.8125 3.34332V4.43707C11.6777 4.43707 2.74621 4.43707 2.1875 4.43707V3.34332ZM10.7589 13.2079C10.7478 13.4415 10.5558 13.6246 10.3219 13.6246H3.67806C3.44414 13.6246 3.25218 13.4415 3.24108 13.2079L2.86508 5.31207H11.1349L10.7589 13.2079Z' />
										<path d='M7 12.7496C7.24161 12.7496 7.4375 12.5537 7.4375 12.3121V6.62457C7.4375 6.38296 7.24161 6.18707 7 6.18707C6.75839 6.18707 6.5625 6.38296 6.5625 6.62457V12.3121C6.5625 12.5537 6.75836 12.7496 7 12.7496Z' />
										<path d='M9.1875 12.7496C9.42911 12.7496 9.625 12.5537 9.625 12.3121V6.62457C9.625 6.38296 9.42911 6.18707 9.1875 6.18707C8.94589 6.18707 8.75 6.38296 8.75 6.62457V12.3121C8.75 12.5537 8.94586 12.7496 9.1875 12.7496Z' />
										<path d='M4.81226 12.7497C5.05387 12.7497 5.24976 12.5538 5.24976 12.3122V6.62466C5.24976 6.38305 5.05387 6.18716 4.81226 6.18716C4.57065 6.18716 4.37476 6.38305 4.37476 6.62466V12.3122C4.37476 12.5538 4.57062 12.7497 4.81226 12.7497Z' />
									</g>
									<defs>
										<clipPath id='clip0_1_2282'>
											<rect width='14' height='14' fill='white' transform='translate(0 0.5)' />
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className='post-options__menu-element-header'>Delete</div>
						</div>
					</div>
				)}
			</FlipMove>
		</div>
	)
}

export default PostOptions
