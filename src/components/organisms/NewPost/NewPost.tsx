import PostAvatar from '../../atoms/Post/PostAvatar/PostAvatar'
import PostTextArea from '../../atoms/Post/PostTextArea/PostTextArea'
import './NewPost.scss'
interface NewPostProps {
	image: string
	alt: string
}

const NewPost = ({ image, alt }: NewPostProps): JSX.Element => {
	return (
		<div className='new-post'>
			<PostAvatar image={image} alt={alt} />
			<PostTextArea />
		</div>
	)
}

export default NewPost
