import PostAvatar from '../../atoms/Post/PostAvatar/PostAvatar'
import PostTextArea from '../../atoms/Post/PostTextArea/PostTextArea'
import './Reply.scss'
import image from '../../../assets/template_avatar.jpg'

interface ReplyProps {
	id: string
	parentId: string | null
}

const Reply = ({ id, parentId }: ReplyProps): JSX.Element => {
	return (
		<div className='reply'>
			<div className='reply__reply'>
				<PostAvatar image={image} alt={'Ellie Alvaz'} />
				<PostTextArea id={id} parentId={parentId} />
			</div>
		</div>
	)
}

export default Reply
