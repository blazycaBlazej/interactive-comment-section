import { IconX } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import PostTextArea from '../../../atoms/Post/PostTextArea/PostTextArea'
import { uiActions } from '../../../../store/store'
import './PostTextAreaWithClose.scss'
interface PostTextAreaWithCloseProps {
	id?: string
	parentId?: string | null
	content?: string
	isEdit?: true
}

const PostTextAreaWithClose = ({ id, parentId, content, isEdit }: PostTextAreaWithCloseProps): JSX.Element => {
	const dispatch = useDispatch()

	const clickHandler = () => {
		dispatch(uiActions.editClose())
	}

	return (
		<div className='post-text-area-with-close'>
			<PostTextArea id={id} parentId={parentId} content={content} isEdit={true} />
			{isEdit && (
				<div className='post-text-area-with-close__icon'>
					<span onClick={clickHandler}>
						<IconX width={14} /> anuluj
					</span>
				</div>
			)}
		</div>
	)
}

export default PostTextAreaWithClose
