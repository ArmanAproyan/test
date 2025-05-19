import { CSSProperties, HTMLAttributes, JSX } from 'react'

const defaultStyles = {
  h1: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1e1e1e',
    lineHeight: '1.2',
    marginBottom: '16px'
  },
  p: {
    fontSize: '16px',
    fontWeight: '400',
    color: 'black',
    lineHeight: '1.6',
    marginBottom: '12px'
  },
  span: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#666'
  }
}

type AllowedTags = 'h1' | 'p' | 'span'

type RefType<T extends AllowedTags> = T extends 'h1'
  ? HTMLHeadingElement
  : T extends 'p'
    ? HTMLParagraphElement
    : HTMLSpanElement

type PropsWithStyle<T extends AllowedTags> = HTMLAttributes<RefType<T>> & {
  style?: CSSProperties
  ref?: React.Ref<RefType<T>>
}

const TEXT_ATTRIBUTES: {
  [K in AllowedTags]: (text: string, props?: PropsWithStyle<K>) => JSX.Element
} = {
  h1: (text, props = {}) => (
    <h1 {...props} style={{ ...defaultStyles.h1, ...props.style }}>
      {text}
    </h1>
  ),
  p: (text, props = {}) => (
    <p {...props} style={{ ...defaultStyles.p, ...props.style }}>
      {text}
    </p>
  ),
  span: (text, props = {}) => (
    <span {...props} style={{ ...defaultStyles.span, ...props.style }}>
      {text}
    </span>
  )
}

export default TEXT_ATTRIBUTES
