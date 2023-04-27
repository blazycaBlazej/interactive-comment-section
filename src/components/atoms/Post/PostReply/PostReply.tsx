import { useDispatch } from 'react-redux'

import { uiActions } from '../../../../store/store'
import './PostReply.scss'

interface PostReplyProps {
	id: string
}

const PostReply = ({ id }: PostReplyProps): JSX.Element => {
	const dispatch = useDispatch()

	const clickHanlder = () => {
		dispatch(uiActions.openReply({ id }))
	}

	return (
		<div className='post-reply' onClick={clickHanlder}>
			<div className='post-reply__svg'>
				{/* prettier-ignore */}
				<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_1_2661)">
				<path d="M1.00003 14.5C1.18603 14.5 1.36141 14.396 1.44728 14.2236C2.37303 12.3721 3.24953 10.6196 8.00003 10.5059V14C8.00003 14.1988 8.11766 14.3784 8.29941 14.458C8.48116 14.5376 8.69341 14.5024 8.83941 14.3671L15.3394 8.36713C15.4419 8.273 15.5 8.13963 15.5 8C15.5 7.86038 15.4419 7.72701 15.3394 7.63275L8.83941 1.63275C8.69341 1.4975 8.48053 1.46288 8.29941 1.54188C8.11766 1.62163 8.00003 1.80125 8.00003 2V5.50588C1.07478 5.67775 0.500031 9.4565 0.500031 14C0.500031 14.2319 0.659656 14.4331 0.885281 14.4869C0.923406 14.4956 0.961905 14.5 1.00003 14.5ZM14.2628 8L9.00003 12.8579V10C9.00003 9.72363 8.77641 9.5 8.50003 9.5C4.35403 9.5 2.58891 10.6573 1.55328 12.0484C1.78716 8.63625 2.97653 6.5 8.50003 6.5C8.77641 6.5 9.00003 6.27638 9.00003 6V3.14213L14.2628 8Z" />
				</g>
				<defs>
				<clipPath id="clip0_1_2661">
				<rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"/>
				</clipPath>
				</defs>
				</svg>
			</div>
			<span className='post-reply__text'>Reply</span>
		</div>
	)
}

export default PostReply
