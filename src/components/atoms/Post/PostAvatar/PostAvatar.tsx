import React from 'react'
import './PostAvatar.scss'

interface PostPostAvatarProps {
	image: string //???</string>
	alt: string
}

const PostAvatar = ({ image, alt }: PostPostAvatarProps): JSX.Element => {
	return (
		<div className='post-avatar'>
			<img src={image} alt={alt} />
		</div>
	)
}

export default PostAvatar
