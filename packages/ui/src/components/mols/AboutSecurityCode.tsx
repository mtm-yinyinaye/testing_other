import { css, useTheme } from '@emotion/react'
import securityCodeImg01 from '../../assets/img/security_code_img01.png'
import securityCodeImg02 from '../../assets/img/security_code_img02.png'
import { mq, sp, theme as defaultTheme } from '@/styles'

type Props = {
  note?: React.ReactNode | string
}

const AboutSecurityCode = (props: Props) => {
  let theme = useTheme()
  if (Object.keys(theme).length === 0) {
    theme = defaultTheme
  }

  const panel = css({
    display: 'none',
    position: 'absolute',
    background: '#ffffff',
    padding: '24px',
    zIndex: 30,
    top: '45px',
    width: '410px',
    border: '4px solid',
    borderColor: theme.palette.primary,
    borderRadius: '10px',

    '&:before': {
      content: "''",
      position: 'absolute',
      top: '-32px',
      left: '25px',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '18px solid',
      borderBottomColor: theme.palette.primary,
      borderRight: '13px solid transparent',
      borderLeft: '13px solid transparent',
    },

    '&:after': {
      content: "''",
      position: 'absolute',
      top: '-24px',
      left: '25px',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '18px solid #ffffff',
      borderRight: '13px solid transparent',
      borderLeft: '13px solid transparent',
    },

    [mq[sp]]: {
      width: '80%',
      padding: '15px',
    },
  })

  const listSecurityImg = css({
    li: {
      float: 'left',
      paddingLeft: '10px',
      width: '50%',
      boxSizing: 'border-box',
      paddingBottom: 0,
      marginBottom: '30px',
      borderBottom: 0,

      img: {
        display: 'block',
        width: '100%',
      },

      '&:first-of-type': {
        paddingLeft: 0,
        paddingRight: '10px',
      },

      [mq[sp]]: {
        marginBottom: '15px',
      },
    },
  })

  const note = css({
    fontSize: '14px',

    [mq[sp]]: {
      fontSize: '12px',
    },
  })

  return (
    <div css={panel} className="panel">
      <ul css={listSecurityImg}>
        <li>
          <img src={securityCodeImg01} alt="securityCodeImg01" />
        </li>
        <li>
          <img src={securityCodeImg02} alt="securityCodeImg01" />
        </li>
      </ul>
      <p css={note}>
        {props.note ||
          'セキュリティコードとは、クレジットカード裏面の署名欄に印字されている数字3桁または4桁の番号のことです'}
      </p>
    </div>
  )
}

export default AboutSecurityCode
