import { css, useTheme } from '@emotion/react'
import { theme as defaultTheme } from '@/styles'

type Props = {
  onKeyPress: (key: string) => void
}

const firstRow = [7, 8, 9] as const
const secondeRow = [4, 5, 6] as const
const thirdRow = [1, 2, 3] as const
const lastRow = [0] as const

const KeyBoardWrapper = (props: Props) => {
  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const handleClick = (e: React.FormEvent<HTMLElement>) => {
    const value = e.currentTarget.dataset.id as string
    props.onKeyPress(value)
  }

  const container = css({
    width: '355px',
    touchAction: 'manipulation',
    padding: '20px',
    border: '4px solid',
    borderColor: theme.palette.primary,
    borderRadius: '10px',
    background: '#ffffff',

    display: 'flex',
  })

  const left = css({})

  const right = css({
    marginTop: '110px',
  })

  const row = css({
    marginBottom: '15px',
    textAlign: 'center',
  })

  const button = css({
    display: 'inline-block',
    minWidth: '40px',
    height: '40px',
    textAlign: 'center',
    lineHeight: '40px',
    cursor: 'pointer',
    border: '1px solid #b5b5b5',
    borderRadius: '5px',
    fontWeight: 'bold',
    boxShadow: '0px 4px 0px #cccccc',

    marginRight: '15px',

    '&:hover': {
      boxShadow: 'none',
      transform: 'translateY(4px)',
    },
  })

  const buttonText = css(button, {
    padding: '0 5px',
  })

  return (
    <div css={container}>
      <div css={left}>
        <div css={row}>
          {firstRow.map((num) => (
            <span css={button} key={num} data-id={num} onClick={handleClick}>
              {num}
            </span>
          ))}
        </div>
        <div css={row}>
          {secondeRow.map((num) => (
            <span css={button} key={num} data-id={num} onClick={handleClick}>
              {num}
            </span>
          ))}
        </div>
        <div css={row}>
          {thirdRow.map((num) => (
            <span css={button} key={num} data-id={num} onClick={handleClick}>
              {num}
            </span>
          ))}
        </div>
        <div css={row}>
          {lastRow.map((num) => (
            <span css={button} key={num} data-id={num} onClick={handleClick}>
              {num}
            </span>
          ))}
        </div>
      </div>
      <div css={right}>
        <div css={row}>
          <span css={buttonText} data-id="{bksp}" onClick={handleClick}>
            一文字削除
          </span>
        </div>
        <div css={row}>
          <span css={buttonText} data-id="{clear}" onClick={handleClick}>
            すべて削除
          </span>
        </div>
      </div>
    </div>
  )
}

export default KeyBoardWrapper
