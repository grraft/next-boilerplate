import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from '../styles/global.sass'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    return { html, head }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='shortcut icon' type='image/x-icon' href='/static/assets/favicon.ico' />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
