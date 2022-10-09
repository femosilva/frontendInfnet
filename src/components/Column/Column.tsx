import Row from 'components/Row'

import { FC } from 'react'
import { RowProps } from 'components/Row/Row'

export type ColumnProps = RowProps

const Column: FC<ColumnProps> = (props: ColumnProps) => {
  return (
    <Row flexDirection='column' {...props}>
      {props.children}
    </Row>
  )
}

export default Column
