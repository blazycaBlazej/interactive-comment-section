import React from 'react'
import './PostingTime.scss'
import moment from 'moment'

interface PostingTimeProps {
	time: string
}

const PostingTime = ({ time }: PostingTimeProps): JSX.Element => {
	const postMoment = moment(time)
	const timeAgo = postMoment.fromNow()

	return <span className='posting-time'>{timeAgo}</span>
}

export default PostingTime
