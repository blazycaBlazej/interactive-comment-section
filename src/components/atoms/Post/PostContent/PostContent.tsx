import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { uiActions } from '../../../../store/store'
import './PostContent.scss'
import PostTextAreaWithClose from '../../../molecules/Post/PostTextAreaWithClose/PostTextAreaWithClose'

interface PostContentProps {
	content: string
	id: string
	parentId: string | null
}

interface rootState {
	ui: {
		openEditId: string | null
		editIsOpen: string
	}
}

const PostContent = ({ content, id, parentId }: PostContentProps): JSX.Element => {
	const editIsOpen = useSelector((state: rootState) => state.ui.openEditId === id)

	return (
		<p className='post-content'>
			{editIsOpen ? <PostTextAreaWithClose id={id} parentId={parentId} content={content} isEdit={true} /> : content}
		</p>
	)
}

export default PostContent
