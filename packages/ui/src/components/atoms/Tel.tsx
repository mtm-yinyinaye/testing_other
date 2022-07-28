import { css } from '@emotion/react'
// @エイリアスだとrollupのimageプラグインが参照できなかったので相対パス
import telImage from '../../assets/img/tel.png'
import { mq, sp } from '@/styles'

type Props = {
  deskName: string
  deskTelNo: string
  deskReceptionTime: string
  deskReceptionNote: string
  className?: string
}

const Tel = (props: Props) => {
  const trimTelNo = props.deskTelNo.replace('-', '')

  return (
    <div css={container} className={props.className}>
      <p css={name}>{props.deskName}</p>
      <div css={logoWrapper}>
        <img src={telImage} alt="tel" width="44px" />
        <a href={`tel:${trimTelNo}`} css={tel}>
          {props.deskTelNo}
        </a>
      </div>
      <p css={time}>
        受付時間：{props.deskReceptionTime}
        <br css={br} className="br" />
        {props.deskReceptionNote}
      </p>
    </div>
  )
}

const container = css({
  textAlign: 'left',
})

const name = css({
  fontSize: '1rem',
  fontWeight: 'bold',
})

const logoWrapper = css({
  marginTop: '5px',
  display: 'inline-flex',
  alignItems: 'center',
})

const tel = css({
  fontSize: '2.7rem',
  fontWeight: 'bold',
  color: '#434343',
  textDecoration: 'none',

  [mq[sp]]: {
    fontSize: '2rem',
  },
})

const time = css({
  marginTop: '5px',
  fontSize: '1rem',
  lineHeight: 1.5,
})

const br = css({
  display: 'none',
  [mq[sp]]: {
    display: 'block',
  },
})

export default Tel
