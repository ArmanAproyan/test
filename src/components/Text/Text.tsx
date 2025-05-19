import { useTranslation } from 'react-i18next'
import TEXT_ATTRIBUTES from './Text.const'
import { forwardRef, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  tag: string
  translationKey: string
}

const Text = forwardRef<HTMLElement, Props>(({ tag, translationKey, ...rest }, ref) => {
  const { t } = useTranslation()
  const Component = TEXT_ATTRIBUTES[tag] || TEXT_ATTRIBUTES['span']

  return Component(t(translationKey), { ...rest, ref })
})

Text.displayName = 'Text'

export default Text
