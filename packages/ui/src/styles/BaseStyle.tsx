import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import { mq, sp, palette } from '@/styles'

const BaseStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        *, *:before, *:after {
          box-sizing: border-box;
        }

        html {
          font-size: 62.5%;
          font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo,
            sans-serif;
        }

        body {
          font-size: 1.6rem;
          position: relative;
          color: ${palette.text};

          ${mq[sp]} {
            font-size: 1.4rem;
          }
        }

        h1,
        h2,
        h3,
        h4,
        p,
        dl,
        dd,
        dt {
          margin: 0;
        }

        p,
        li {
          line-height: 1.75em;
        }

        a {
          text-decoration: none;
          text-decoration-line: underline;
          color: #1d1d1d;
        }

        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        // モーダル表示時に、背景をスクロールさせない
        .no-scroll {
          position: fixed;
          width: 100%;
        }

        #norton {
          display: none;
        }

        .hidden-sp {
          display: block;
          ${mq[sp]} {
            display: none;
          }
        }

        .hidden-pc {
          display: none;
          ${mq[sp]} {
            display: block;
          }
        }

        .indent {
          padding-left: 1em;
          text-indent: -1em;
        }
      `}
    />
  )
}

export default BaseStyle
