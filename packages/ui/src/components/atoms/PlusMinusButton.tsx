import { css } from '@emotion/react'

type Props = {
  checked: boolean
  children: string
  onClick?: (props: any) => void
}

const PlusMinusButton = (props: Props) => {
  if (props.checked) {
    return (
      <div css={base} onClick={props.onClick}>
        {props.children}
      </div>
    )
  }

  return <div css={inactive}>{props.children}</div>
}

const base = css({
  width: '50px',
  height: '50px',
  background: '#FFFFFF',
  border: '2px solid #E2E2E2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '20px',
})

const inactive = css(base, {
  color: '#BCBBBB',
})

export default PlusMinusButton
