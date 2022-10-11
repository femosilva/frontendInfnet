import { Column, Row, Text } from 'components'
import { useUser } from 'services/user'

const Home = () => {

  const { data: users } = useUser()
  return (
    <Column>
      {users?.map((user, index) => (
        <Row key={index}>
          <Text variant='regular'>{user.name}</Text>
          <Text variant='regular'>{user.lastName}</Text>
          <Text variant='regular'>{user.email}</Text>
        </Row>
      ))}
    </Column>
  )
}

export default Home
