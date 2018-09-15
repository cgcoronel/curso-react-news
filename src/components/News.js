import React from 'react';
import New from './New';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class News extends React.Component {
	render () {
		return (
				<div className='row'>
					<TransitionGroup>
						{
							this.props.news.map(noticia => (
									<CSSTransition
												key={noticia.url}
												classNames='fade'
												timeout={500}
										>
										<New noticia={noticia} />
									</CSSTransition>
							))
						}
					</TransitionGroup>

				</div>
		)
	}
}

News.propTypes = {
	news : PropTypes.array.isRequired
}

export default News;
