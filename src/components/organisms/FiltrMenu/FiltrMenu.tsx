import CommentsNumber from '../../atoms/FiltrMenu/CommentsNumber/CommentsNumber'
import SortButton from '../../atoms/FiltrMenu/SortButton/SortButton'

import './FiltrMenu.scss'

const FiltrMenu = (): JSX.Element => {
	return (
		<div className='filtr-menu'>
			<CommentsNumber />
			<SortButton />
		</div>
	)
}

export default FiltrMenu
