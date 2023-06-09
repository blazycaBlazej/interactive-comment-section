import PostAuthor from '../../../atoms/Post/PostAuthor/PostAuthor'
import PostingTime from '../../../atoms/Post/PostingTime/PostingTime'
import PostOptions from '../../../atoms/Post/PostOptions/PostOptions'

import './PostMeta.scss'
interface PostMetaProps {
	id: string
	parentId?: string | null
	time: string
	author: string
	creator: boolean
}

const PostMeta = ({ author, creator, time, id, parentId }: PostMetaProps): JSX.Element => {
	return (
		<div className='post-meta'>
			<div className='post-meta__header'>
				<PostAuthor author={author} creator={creator} />

				<PostingTime time={time} />
			</div>
			<div className='post-meta__options'>
				<PostOptions id={id} parentId={parentId} creator={creator} />
			</div>
		</div>
	)
}

export default PostMeta
