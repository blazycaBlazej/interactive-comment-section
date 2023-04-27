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
			<PostAuthor author={author} creator={creator} />
			<PostingTime time={time} />
			<div className='post-meta__options'>
				<PostOptions id={id} parentId={parentId} />
			</div>
		</div>
	)
}

export default PostMeta
