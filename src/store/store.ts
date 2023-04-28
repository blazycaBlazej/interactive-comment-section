import { configureStore, createSlice } from '@reduxjs/toolkit'

import ellieAvatar from '../assets/template_avatar.jpg'
import { v4 as id } from 'uuid'
import moment from 'moment'
import posts from './data'

interface Reply {
	id: string
	image: string
	alt: string
	creator: boolean
	time: string
	content: string
	likesNumber: number
	isAnswer: boolean
	isLiked: boolean
}

interface Post {
	id: string
	image: string
	alt: string
	creator: boolean
	time: string
	content: string
	likesNumber: number
	isAnswer: boolean
	isLiked: boolean
	replies: Reply[]
}

interface UiState {
	filtrIsOpen: boolean
	filtrString: string
	optionsIsOpen: boolean
	openedOptionsId: null | string
	replyIsOpen: boolean
	openedReplyId: null | string
	posts: Post[]
	commentsNumber: number
	editIsOpen: boolean
	openEditId: null | string
}

const initialState: UiState = {
	filtrIsOpen: false,
	filtrString: 'Sort by',
	optionsIsOpen: false,
	openedOptionsId: null,
	replyIsOpen: false,
	openedReplyId: null,
	posts,
	commentsNumber: posts.length,
	editIsOpen: false,
	openEditId: null,
}

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleFiltr(state) {
			state.filtrIsOpen = !state.filtrIsOpen
			state.optionsIsOpen = false
			state.openedOptionsId = null
			state.replyIsOpen = false
			state.openedReplyId = null
		},

		changeFiltrString(state, action) {
			state.filtrString = action.payload.string
		},
		toggleOptions(state, action) {
			state.replyIsOpen = false
			state.openedReplyId = null
			state.filtrIsOpen = false
			state.optionsIsOpen =
				state.openedOptionsId === action.payload.id
					? (state.openedOptionsId = null)
					: (state.openedOptionsId = action.payload.id)
		},
		closeOptions(state, action) {
			state.optionsIsOpen = false
			state.openedOptionsId = null
		},
		deletePost(state, action) {
			if (action.payload.creator) {
				if (!action.payload.parentId) {
					state.posts = state.posts.filter(post => action.payload.id !== post.id)

					state.commentsNumber--
				} else {
					const postIndex = state.posts.findIndex(post => post.id === action.payload.parentId)

					if (postIndex !== -1) {
						state.posts[postIndex].replies = state.posts[postIndex].replies.filter(reply => {
							if (reply.creator !== action.payload.creator) {
								return reply
							}
						})
					}
				}
			}
			state.openedOptionsId = null
			state.optionsIsOpen = false
		},
		likePost(state, action) {
			state.filtrString = 'Sort by'
			let likedPost: undefined | Post | Reply = state.posts.find(post => action.payload.id === post.id)

			if (!likedPost) {
				const parentLikedPost = state.posts.find(post => action.payload.parentId === post.id)

				likedPost = parentLikedPost!.replies.find(post => action.payload.id === post.id)
			}

			if (likedPost) {
				if (likedPost && !likedPost.isLiked) {
					likedPost.isLiked = true
					likedPost.likesNumber += 1
				} else if (likedPost && likedPost.isLiked) {
					likedPost.isLiked = false
					likedPost.likesNumber -= 1
				}
			}
		},
		newPost(state, action) {
			state.replyIsOpen = false
			state.openedReplyId = null
			state.filtrString = 'Sort by'
			const post: Post = {
				id: id(),
				image: ellieAvatar,
				alt: 'Ellie Alvaz',
				creator: true,
				time: moment().toISOString(),
				content: action.payload.content,
				likesNumber: 0,
				isAnswer: false,
				isLiked: false,
				replies: [],
			}
			state.posts.push(post)
			state.commentsNumber++
		},

		newReply(state, action) {
			console.log(action.payload.parentId)
			state.replyIsOpen = false
			state.openedReplyId = null
			state.filtrString = 'Sort by'
			const reply: Reply = {
				id: id(),
				image: ellieAvatar,
				alt: 'Ellie Alvaz',
				creator: true,
				time: moment().toISOString(),
				content: action.payload.content,
				likesNumber: 0,
				isAnswer: true,
				isLiked: false,
			}
			const post = state.posts.find(post => post.id === action.payload.parentId)
			// console.log(post)
			post!.replies.push(reply)
		},

		openReply(state, action) {
			state.optionsIsOpen = false
			state.openedOptionsId = null
			state.replyIsOpen =
				state.openedReplyId === action.payload.id
					? (state.openedReplyId = null)
					: (state.openedReplyId = action.payload.id)
		},

		sortByLikes(state) {
			state.posts.sort((a, b) => a.likesNumber - b.likesNumber)
			state.optionsIsOpen = false
			state.openedOptionsId = null
			state.replyIsOpen = false
			state.openedReplyId = null
		},

		sortByTime(state) {
			state.posts.sort((a, b) => moment(a.time).unix() - moment(b.time).unix())
			state.optionsIsOpen = false
			state.openedOptionsId = null
			state.replyIsOpen = false
			state.openedReplyId = null
		},

		editClose(state) {
			state.editIsOpen = false
			state.openEditId = null
		},

		editOpen(state, action) {
			state.filtrIsOpen = false
			state.optionsIsOpen = false
			state.openedOptionsId = null
			state.replyIsOpen = false
			state.openedReplyId = null
			if (action.payload.creator) {
				state.editIsOpen =
					state.openEditId === action.payload.id ? (state.openEditId = null) : (state.openEditId = action.payload.id)
			}
		},

		editPost(state, action) {
			state.editIsOpen = false
			state.openEditId = null

			if (!action.payload.parentId) {
				const index = state.posts.findIndex(post => post.id === action.payload.id)
				state.posts[index].content = action.payload.content
			} else {
				const parentIndex = state.posts.findIndex(post => post.id === action.payload.parentId)

				const index = state.posts[parentIndex].replies.findIndex(post => post.id === action.payload.id)

				state.posts[parentIndex].replies[index].content = action.payload.content
			}
		},
	},
})

interface postxd {
	id: string
	parentId: string | null
	creator: boolean
}

const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
	},
})

export const uiActions = uiSlice.actions

export default store
