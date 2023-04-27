import { v4 as id } from 'uuid'
import moment from 'moment'

import ellieAvatar from '../assets/template_avatar.jpg'
import kyleeAvatar from '../assets/kylee.jpg'
import LaurelAvatar from '../assets/laurel.jpg'

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

const posts: Post[] = [
	{
		id: id(),
		image: ellieAvatar,
		alt: 'Ellie Alvaz',
		creator: true,
		time: '2022-03-19T09:14:21.732Z',
		content: 'What a strong song, thank you Miley for this awesome piece of self love and confidence.',
		likesNumber: 56,
		isAnswer: false,
		isLiked: true,
		replies: [
			{
				id: id(),
				image: kyleeAvatar,
				alt: 'Kylee Thomson',
				creator: true,
				time: '2023-04-18T09:14:21.732Z',
				content: 'Truly an unhappy bit',
				likesNumber: 1,
				isAnswer: true,
				isLiked: true,
			},
			{
				id: id(),
				image: ellieAvatar,
				alt: 'Ellie Alvaz',
				creator: true,
				time: '2023-04-19T09:14:21.732Z',
				content: 'True',
				likesNumber: 0,
				isAnswer: true,
				isLiked: false,
			},
		],
	},

	{
		id: id(),
		image: LaurelAvatar,
		alt: 'Laurel  Fisher',
		creator: false,
		time: '2023-04-19T09:14:21.732Z',
		content: `I'm usually not a fan of Miley Cyrus though I respect her job. And I have to recognize this song is so great : lyrics, voice, melody, rhythm, etc. I just can't stop listening to this one. Bravo Miley !
		
		By the way, I think she looks like Madonna more and more.`,
		likesNumber: 99,
		isAnswer: false,
		isLiked: false,
		replies: [],
	},

	{
		id: id(),
		image: kyleeAvatar,
		alt: 'Kylee Thomson',
		creator: false,
		time: '2023-03-19T09:14:21.732Z',
		content:
			'Seen her Hannah Montana era, wrecking ball era, malibu era, and then this flower era. Grown up with her and she has my total respect for being such a strong, admirable woman. Love you Miley.',
		likesNumber: 0,
		isAnswer: false,
		isLiked: false,
		replies: [],
	},
]

export default posts
