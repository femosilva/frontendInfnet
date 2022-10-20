import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Column, Text } from 'components'

import { getUser, updateUser } from 'services/user'
import { User } from "types";
import { validationUserUpdate } from "helpers/yup-schemas";

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
    <Column>
      <Link to={'/'}>Voltar</Link>
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

        <button type="submit">Enviar</button>
      </form>
    </Column>
  )
}
export default UpdatePage



