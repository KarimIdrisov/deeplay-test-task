import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { UsersEntity } from '../../database/entity/user.entity'
import { useRepository } from '../../database/react'

export const Home = () => {

  const [userList, setUserList] = useState<UsersEntity[]>([]);
  const userListRepository = useRepository(UsersEntity);

  const updateList = async () => {
    const list = await userListRepository.find();
    console.log(list);
    setUserList(list)
  }

  useEffect(() => {
    if (userList.length === 0) {
      updateList();
    }
  })

  return (
    <div>
      {
        userList.map(user => (<div>{user.fullname}</div>))
      }
    </div>
  )
}
