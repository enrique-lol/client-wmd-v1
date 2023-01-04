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
          <div className="lit-article">
            <h1 className='title'>{article.title}</h1>
            <div classNmae='into'>
              <div className='subtitle'>
                <p>{article.author}</p>
                <p>{article.date}</p>
              </div>
              <img className='tn' src={article.thumbnailUrl}/>
            </div>
            <article className='body'>
              <p>{article.intro}</p>
              <h2>{article.heading1}</h2>
              <img src={article.imageUrl1}/>
              <p>{article.body1}</p>
              <h2>{article.heading2}</h2>
              <img src={article.imageUrl2}/>
              <p>{article.body2}</p>
              <h2>{article.heading3}</h2>
              <img src={article.imageUrl3}/>
              <p>{article.body3}</p>
              <h2>{article.heading4}</h2>
              <img src={article.imageUrl4}/>
              <p>{article.body4}</p>
              <h2>{article.heading5}</h2>
              <img src={article.imageUrl5}/>
              <p>{article.body5}</p>
              <h2>{article.heading6}</h2>
              <img src={article.imageUrl6}/>
              <p>{article.body6}</p>
              <h2>{article.heading7}</h2>
              <img src={article.imageUrl7}/>
              <p>{article.body7}</p>
              <h2>{article.heading8}</h2>
              <img src={article.imageUrl8}/>
              <p>{article.body8}</p>
              <h2>{article.heading9}</h2>
              <img src={article.imageUrl9}/>
              <p>{article.body9}</p>
              <h2>{article.heading10}</h2>
              <img src={article.imageUrl10}/>
              <p>{article.body10}</p>
              <p>{article.outro}</p>
            </article>
          </div>

        </Fragment>
      )
    }

    return (
      <Fragment>
        {articleJsx}
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
