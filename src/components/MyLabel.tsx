import './mylabel.css'

export interface Props {
  /**
   * This is the message to show in the label
   */
  label: string
  /**
   * This is the size of the label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * This is the color of the label
   */
  color: 'primary' | 'secondary' | 'tertiary'
  /**
   * This will capitalize letters within the label
   */
  allCaps: boolean
  /**
   * This will select font color
   */
  fontColor?: string
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span style={{ color: fontColor }} className={`${size} text-${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
