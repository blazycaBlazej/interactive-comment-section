import { useSelector } from 'react-redux'

import FiltrMenu from './components/organisms/FiltrMenu/FiltrMenu'
import NewPost from './components/organisms/NewPost/NewPost'

import './App.css'
import templateAvatar from './assets/template_avatar.jpg'
import PostWithReplies from './components/organisms/PostWithReplies/PostWithReplies'
import FlipMove from 'react-flip-move'
interface Postt {
	id: string
	image: string
	alt: string
	creator: boolean
	time: string
	content: string
	likesNumber: number
	isAnswer: boolean
	replies: {
		id: string
		image: string
		alt: string
		creator: boolean
		time: string
		content: string
		likesNumber: number
		isAnswer: boolean
	}[]
}

interface RootPost {
	ui: {
		posts: Postt[]
	}
}

function App() {
	const posts = useSelector((state: RootPost) => state.ui.posts)
	console.log(posts)
	return (
		<div className='app'>
			<NewPost image={templateAvatar} alt={'xd'} />
			<FiltrMenu />

			<FlipMove
				typeName='div'
				className='posts-wrappper'
				duration={400}
				easing='ease-out'
				leaveAnimation='fade'
				enterAnimation='fade'>
				{posts
					.slice()
					.reverse()
					.map(post => (
						<div className='post-container' key={post.id}>
							<PostWithReplies
								id={post.id}
								image={post.image}
								alt={post.alt}
								creator={post.creator}
								time={post.time}
								content={post.content}
								isAnswer={post.isAnswer}
								replies={post.replies}
							/>
						</div>
					))}
			</FlipMove>
		</div>
	)
}

export default App
