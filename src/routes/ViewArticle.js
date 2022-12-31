import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getArticle } from './../api/article-auth.js'

class ViewArticle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      article: null
    }
  }
  componentDidMount () {
    const { match, msgAlert } = this.props
    getArticle(match.params.id)
      .then(res => this.setState({ article: res.data.article }))
      .catch(error => {
        msgAlert({
          heading: 'Try Again',
          message: 'ERROR: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    let articleJsx
    const { article } = this.state
    if (!article) {
      articleJsx = 'Loading...'
      return articleJsx
    }
    if (article) {
      articleJsx = (
        <Fragment>
          <div>
            <h1>{article.title}</h1>
            <h2>{article.text}</h2>
          </div>

        </Fragment>
      )
    }

    return (
      <Fragment>
        articleJsx
      </Fragment>
    )
  }
}

// <img className='article-image' src={article.thumbnail}/>
// <button onClick={this.saveArticle} key={article.id} >Save</button>
// <p className='art-text'>By {article.authorName} on {article.publishDate} -- {article.intro}</p>
// {article.img2 ? <img className='article-image' src={article.img2}/> : null }
// {article.heading2 ? <h6 className='head-text'>{article.heading2}</h6> : null }
// {article.paragraph2 ? <p className='art-text'>{article.paragraph2}</p> : null }
// {article.img3 ? <img className='article-image' src={article.img3}/> : null }
// {article.heading3 ? <h6 className='head-text'>{article.heading3}</h6> : null }
// {article.paragraph3 ? <p className='art-text'>{article.paragraph3}</p> : null }
// {article.img4 ? <img className='article-image' src={article.img4}/> : null }
// {article.heading4 ? <h6 className='head-text'>{article.heading4}</h6> : null }
// {article.paragraph4 ? <p className='art-text'>{article.paragraph4}</p> : null }

export default withRouter(ViewArticle)
