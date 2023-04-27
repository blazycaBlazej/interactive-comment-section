import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import FlipMove from 'react-flip-move'
import PostAvatar from '../../atoms/Post/PostAvatar/PostAvatar'
import PostMeta from '../../molecules/Post/PostMeta/PostMeta'
import PostContent from '../../atoms/Post/PostContent/PostContent'
import PostInteraction from '../../molecules/Post/PostInteraction/PostInteraction'
import './Post.scss'
import Reply from '../Reply/Reply'

interface PostProps {
	id: string
	image: string
	alt: string
	creator: boolean
	time: string
	content: string
	isAnswer: boolean
	parentId: string | null
}

interface RootState {
	ui: {
		openedReplyId: null | string
	}
}

const Post = ({ image, alt, creator, time, content, isAnswer, id, parentId }: PostProps): JSX.Element => {
	const isOpen = useSelector((state: RootState) => state.ui.openedReplyId === id)

	return (
		<div className='post-wrapper' data-xd={isOpen}>
			<div className='post-wrapper__post' data-isanswer={isAnswer} id={id}>
				<div className='post-wrapper__left-section'>
					<PostAvatar image={image} alt={alt} />
				</div>
				<div className='post-wrapper__middle-section'>
					<div className='post-wrapper__middle-section-first-element'>
						<PostMeta author={alt} creator={creator} time={time} id={id} parentId={parentId} />
					</div>
					<div className='post-wrapper__middle-section-second-element'>
						<div>
							<PostContent content={content} id={id} parentId={parentId} />
						</div>
					</div>
					<div className='post-wrapper__middle-section-third-element'>
						<PostInteraction id={id} parentId={parentId} />
					</div>
				</div>
			</div>

			<FlipMove
				key={id}
				duration={300}
				easing='linear'
				enterAnimation={{
					from: { opacity: '0', transform: 'translateX(-50%)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				}}
				leaveAnimation={{
					from: { opacity: '1', transform: 'translateX(0)', zIndex: '1' },
					to: { opacity: '0', transform: 'translateX(50%)', zIndex: '-2' },
				}}>
				{isOpen && (
					<div key='answer' className='post-wrapper__answer'>
						<Reply id={id} parentId={parentId} />
					</div>
				)}
			</FlipMove>
		</div>
	)
}

export default Post
