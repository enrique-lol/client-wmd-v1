import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { indexArt } from '../api/article-auth.js'

class IndexArticles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: null
    }
  }
  componentDidMount () {
    const { msgAlert } = this.props
    indexArt()
      .then(res => this.setState({ articles: res.data.articles }))
      .catch(error => {
        msgAlert({
          heading: 'Error',
          message: error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { articles } = this.state
    if (!articles) {
      return (
        <p>Coming soon ...</p>
      )
    }
    if (articles.length === 0) {
      return (
        <p>0 Live Articles</p>
      )
    }
    const articleArray = articles

    const indexJSX = articleArray.map(article => (
      <Link to={`/article/${article._id}`} key={article._id}>
        <article>
          <h3>{article.title}</h3>
        </article>
      </Link>
    ))

    return (
      <Fragment>
        <div className='content'>
          {indexJSX}
        </div>
      </Fragment>
    )
  }
}

export default IndexArticles
