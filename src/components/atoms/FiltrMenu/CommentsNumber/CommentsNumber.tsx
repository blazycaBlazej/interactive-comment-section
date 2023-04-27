import { useSelector } from 'react-redux'

import './CommentsNumber.scss'

interface RootState {
	ui: {
		commentsNumber: number
	}
}

const CommentsNumber = (): JSX.Element => {
	const commentsNumber = useSelector((state: RootState) => state.ui.commentsNumber)

	return <span className='comments-number'>{commentsNumber} comment</span>
}

export default CommentsNumber
