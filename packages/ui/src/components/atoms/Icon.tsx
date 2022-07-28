import { css } from '@emotion/react'
import iconPdf from '../../assets/img/icon_pdf.png'
import ArrowIcon from '../../assets/svg/arrow.svg'
import CalcIcon from '../../assets/svg/calc.svg'
import CloseIcon from '../../assets/svg/close.svg'
import CoupleIcon from '../../assets/svg/couple.svg'
import KeyBoardIcon from '../../assets/svg/keyboard.svg'
import MemberIcon from '../../assets/svg/member.svg'
import OtherTabIcon from '../../assets/svg/otherTab.svg'
import SpeechBallonIcon from '../../assets/svg/speechBallon.svg'
import SpouseIcon from '../../assets/svg/spouse.svg'
import QuestionCircleIcon from '../../assets/svg/questionCircle.svg'

const pdf = css({
  backgroundImage: `url(${iconPdf})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  display: 'inline-block',
  width: '14px',
  height: '20px',
})

const NonSvgIconCSSMap = {
  pdf: pdf,
}

type NonSvgIconProps = JSX.IntrinsicElements['span'] & {
  name: keyof typeof NonSvgIconCSSMap
}

const NonSvgIcon = (props: NonSvgIconProps) => {
  const { name, ...iconProps } = props
  return <span css={NonSvgIconCSSMap[name]} {...iconProps}></span>
}

const ICON_MAP = {
  arrow: ArrowIcon,
  calc: CalcIcon,
  close: CloseIcon,
  couple: CoupleIcon,
  keyboard: KeyBoardIcon,
  member: MemberIcon,
  otherTab: OtherTabIcon,
  pdf: function PdfIcon(props: { className?: string }) {
    return <NonSvgIcon name="pdf" className={props.className} />
  },
  speecheBallon: SpeechBallonIcon,
  spouse: SpouseIcon,
  questionCircle: QuestionCircleIcon,
}

type IconProps = JSX.IntrinsicElements['svg'] & {
  name: keyof typeof ICON_MAP
}

const Icon = (props: IconProps) => {
  const { name, ...iconProps } = props
  const Resolved = ICON_MAP[name]
  return <Resolved {...iconProps} />
}

export default Icon
