import { css } from '@emotion/react'
import Tel from '@/components/atoms/Tel'
import { mq, sp } from '@/styles'

type Props = {
  deskName: string
  deskTelNo: string
  deskReceptionTime: string
  deskReceptionNote: string
  title?: string
  faqButton?: React.ReactNode
  className?: string
}

const ContactUs = (props: Props) => {
  return (
    <div css={contactUs} className={props.className}>
      <div css={contactUsInner}>
        <div css={titleWrapper}>
          <p>{props.title || 'お問い合わせ'}</p>
        </div>
        <div css={body}>
          <p>{`ご不明点がございましたら、\nこちらまでお気軽にご連絡ください。`}</p>
        </div>
        <div css={footer}>
          <Tel
            css={tel}
            deskName={props.deskName}
            deskTelNo={props.deskTelNo}
            deskReceptionTime={props.deskReceptionTime}
            deskReceptionNote={props.deskReceptionNote}
          />
          {props.faqButton}
        </div>
      </div>
    </div>
  )
}

const contactUs = css({
  padding: '80px 0 40px 0',
  background: '#f7f7f7',

  [mq[sp]]: {
    padding: '30px 0 10px 0',
  },
})

const contactUsInner = css({
  width: '960px',
  margin: '0 auto',
  textAlign: 'center',
  border: '2px solid #e5e5e5',
  borderRadius: '10px',
  padding: '20px 30px',
  background: '#FFFFFF',

  [mq[sp]]: {
    width: '95%',
  },
})

const titleWrapper = css({
  borderBottom: '2px solid #e5e5d5',
  paddingBottom: '15px',
  marginBottom: '20px',
  fontSize: '2.6rem',
  fontWeight: 'bold',

  [mq[sp]]: {
    fontSize: '1.8rem',
    width: '95%',
    margin: '0 auto 15px auto',
  },
})

const body = css({
  marginTop: '30px',

  [mq[sp]]: {
    whiteSpace: 'pre-wrap',
  },
})

const footer = css({
  marginTop: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  [mq[sp]]: {
    flexDirection: 'column',
  },
})

const tel = css({
  textAlign: 'left',
  marginRight: '25px',

  [mq[sp]]: {
    marginRight: 0,
    textAlign: 'center',

    '.br': {
      display: 'none',
    },
  },
})

export default ContactUs
