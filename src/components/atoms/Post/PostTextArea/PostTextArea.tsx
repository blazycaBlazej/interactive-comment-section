
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { uiActions } from '../../../../store/store'
import './PostTextArea.scss'

interface PostTextAreaProps {
	id?: string
	parentId?: string | null
	content?: string
	isEdit?: true
}

interface RootPostTextArea {
	ui: {
		editIsOpen: boolean
	}
}

const PostTextArea = ({ id, parentId, content, isEdit }: PostTextAreaProps): JSX.Element => {
	const dispatch = useDispatch()
	const textAreaRef = useRef<HTMLTextAreaElement>(null)
	const areaFocus = useSelector((state: RootPostTextArea) => state.ui.editIsOpen)
	const [addStyle, setAddStyle] = useState(false)

	const handleInput = () => {
		if (textAreaRef.current) {
			textAreaRef.current.style.height = 'auto'
			textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
		}
	}

	const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			const textAreaContent = textAreaRef.current!.value
			if (textAreaContent!) {
				if (isEdit) {
					dispatch(uiActions.editPost({ content: textAreaContent || content, id: id, parentId: parentId }))
				} else {
					if (!id && !parentId) {
						dispatch(uiActions.newPost({ content: textAreaContent }))
					} else if (id && !parentId) {
						dispatch(uiActions.newReply({ content: textAreaContent, parentId: id }))
					} else if (id && parentId) {
						dispatch(uiActions.newReply({ content: textAreaContent, parentId: parentId }))
					}
				}
			} else {
				console.log('blad')
			}

			textAreaRef!.current!.value = ''
			textAreaRef!.current!.blur()
		}
	}

	useEffect(() => {
		handleInput()
		if (textAreaRef.current) {
			textAreaRef.current.addEventListener('input', handleInput)
		}

		return () => {
			if (textAreaRef.current) {
				textAreaRef.current.removeEventListener('input', handleInput)
			}
		}
	}, [])

	const handleFocus = () => {
		if (content) textAreaRef.current!.value = content
	}

	useEffect(() => {
		if (areaFocus) {
			handleFocus()
			textAreaRef.current!.focus()

			setAddStyle(true)
		}
	}, [])

	return (
		<>
			<textarea
				data-isedit={addStyle ? 'true' : 'false'}
				ref={textAreaRef}
				className='post-text-area'
				onKeyDown={handleKeyPress}
				placeholder='Add comment...'
				onFocus={handleFocus}></textarea>
		</>
	)
}

export default PostTextArea
