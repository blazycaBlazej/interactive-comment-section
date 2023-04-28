import CommentsNumber from '../../atoms/FiltrMenu/CommentsNumber/CommentsNumber'
import SortButton from '../../atoms/FiltrMenu/SortButton/SortButton'

import './FiltrMenu.scss'

const FiltrMenu = (): JSX.Element => {
	return (
		<div className='filtr-menu'>
			<div className='filtr-menu__commnets-number'>
				<CommentsNumber />
			</div>
			<SortButton />
		</div>
	)
}

export default FiltrMenu
