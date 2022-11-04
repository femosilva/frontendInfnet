import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Column, Row, Text } from 'components'

import { updateUser } from 'services/user'
import { User } from "types";
import { validationUserUpdate } from "helpers/yup-schemas";
import styled from "styled-components";

const UpdatePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: yupResolver(validationUserUpdate)
  })
  const navigate = useNavigate()
  const { id } = useParams()
  const handleUpdate = async (data: User) => {
    await updateUser(id, data)
    navigate('/')
  }
  return (
    <Box my='5%' mx='10%'>
      <Text variant='big' color='black'>Editar usuario</Text>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <Text variant='regular' color='black'>Nome</Text>
        <input type="text" {...register("name")} />
        <Text variant='small' color='red'>{errors.name?.message}</Text>

        <Text variant='regular' color='black'>Sobrenome</Text>
        <input type="text" {...register("lastName")} />
        <Text variant='small' color='red'>{errors.lastName?.message}</Text>

        <Text variant='regular' color='black'>Email</Text>
        <input type="email" {...register("email")} />
        <Text variant='small' color='red'>{errors.email?.message}</Text>

        <Row justifyContent='space-between'>
          <Link to={'/'}>Voltar</Link>
          <button type="submit">Enviar</button>
        </Row>
      </form>
    </Box>
  )
}
const Box = styled(Column)`
  padding: 15px;
  width: 280px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`
export default UpdatePage



