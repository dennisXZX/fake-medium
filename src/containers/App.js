import React, { Component } from "react"
import { connect } from "react-redux"
import Article from "../components/Article"
import Clap from "../components/Clap"
import { fetchArticleDetails } from "../actions"

import { StyledApp } from './appStyle'

class App extends Component {
  componentDidMount () {
    this.props.fetchArticleDetails()
  }

  render () {
    const { data } = this.props
    const {
      paragraphs,
      subtitle,
      title,
    } = data
    const countTotal = data.numberOfRecommends

    return (
      <StyledApp>
        <aside>
          <Clap countTotal={countTotal}/>
        </aside>
        <main>
          {this.props.isLoadingData ? (
            "Loading . . ."
          ) : (
            <Article
              title={title}
              subtitle={subtitle}
              paragraphs={paragraphs}
            />
          )}
        </main>
      </StyledApp>
    )
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
})

const mapDispatchToProps = {
  fetchArticleDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
