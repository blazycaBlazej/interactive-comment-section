import FlipMove from 'react-flip-move'
import Post from '../Post/Post'
import './PostWithReplies.scss'

interface PostProps {
	id: string
	image: string
	alt: string
	creator: boolean
	time: string
	content: string

	isAnswer: boolean
	replies: {
		id: string
		image: string
		alt: string
		creator: boolean
		time: string
		content: string

		isAnswer: boolean
	}[]
}

const PostWithReplies = ({
	id,
	image,
	alt,
	creator,
	time,
	content,

	isAnswer,
	replies,
}: PostProps): JSX.Element => {
	return (
		<>
			<Post
				key={id}
				id={id}
				parentId={null}
				image={image}
				alt={alt}
				creator={creator}
				time={time}
				content={content}
				isAnswer={isAnswer}
			/>

			{replies.length > 0 && (
				<div className='post-with-replies'>
					<div className='post-with-replies__border'></div>
					<FlipMove
						typeName='div'
						className='post-with-replies__replies'
						duration={300}
						easing='ease-out'
						leaveAnimation='fade'
						enterAnimation='fade'>
						{replies.map(reply => (
							<div key={reply.id}>
								<Post
									id={reply.id}
									parentId={id}
									image={reply.image}
									alt={reply.alt}
									creator={reply.creator}
									time={reply.time}
									content={reply.content}
									isAnswer={reply.isAnswer}
								/>
							</div>
						))}
					</FlipMove>
				</div>
			)}
		</>
	)
}

export default PostWithReplies
