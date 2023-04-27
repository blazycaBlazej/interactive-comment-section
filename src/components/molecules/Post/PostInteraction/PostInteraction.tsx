import React from 'react'
import PostLikes from '../../../atoms/Post/PostLikes/PostLikes'
import PostReply from '../../../atoms/Post/PostReply/PostReply'
import './PostInteraction.scss'

interface PostInteractionProps {
	id: string
	parentId: string | null
}

const PostInteraction = ({ id, parentId }: PostInteractionProps): JSX.Element => {
	return (
		<div className='post-interaction'>
			<PostLikes id={id} parentId={parentId} />
			<PostReply id={id} />
		</div>
	)
}

export default PostInteraction
