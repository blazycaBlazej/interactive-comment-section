import React from 'react'
import './PostAuthor.scss'

interface PostAuthorProps {
	author: string
	creator: boolean
}

const Author = ({ author, creator }: PostAuthorProps): JSX.Element => {
	return (
		<div className='post-author'>
			<span className='author__author'>
				{author}
				{creator && ' (You)'}
			</span>
		</div>
	)
}

export default Author
