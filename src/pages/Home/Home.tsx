import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import styled from "styled-components";

import { Column, Row, Text } from 'components'

import { validationUserPost } from "helpers/yup-schemas";
import { getUsers, createUser, deleteUser } from 'services/user'
import { User } from "types";

const Home = () => {
  const { data: users } = getUsers()

  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: yupResolver(validationUserPost)
  })

  const handleCreate = async (data: User) => {
    await createUser(data)
    window.location.reload()
  }

  const handleDelete = async (id: number) => {
    await deleteUser(id)
    window.location.reload()
  }

  return (
    <Fragment>
      <Row my='5%' mx='10%'>
        {users?.map((user, index) => (
          <Box key={index} mr='16px'>
            <Text variant='regular'>Nome: {user.name} {user.lastName}</Text>
            <Text variant='regular'>Email: {user.email}</Text>
            <Row justifyContent='space-between'>
              <Link to={{ pathname: `/edit/${user._id}` }}>Editar</Link>
              <button onClick={() => handleDelete(user._id)}>Excluir</button>
            </Row>
          </Box>
        ))}
      </Row>
      <Box mx='10%'>
        <Text variant='big' color='black'>Criar usuario</Text>
        <form onSubmit={handleSubmit(handleCreate)}>
        <Text variant='regular' color='black'>Nome</Text>
        <input type="text" {...register("name")} />
        <Text variant='small' color='red'>{errors.name?.message}</Text>

        <Text variant='regular' color='black'>Sobrenome</Text>
        <input type="text" {...register("lastName")} />
        <Text variant='small' color='red'>{errors.lastName?.message}</Text>

        <Text variant='regular' color='black'>Email</Text>
        <input type="email" {...register("email")} />
        <Text variant='small' color='red'>{errors.email?.message}</Text>

        <button type="submit">Enviar</button>
        </form>
      </Box>
    </Fragment>
  )
}

const Box = styled(Column)`
  padding: 15px;
  width: 280px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`
export default Home
