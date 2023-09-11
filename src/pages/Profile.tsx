import React from 'react'
import Avatar from '../components/Avatar'

const Profile = () => {
  return (
    <main className={`h-[90%] w-full px-5 md:px-10 py-5 flex justify-between font-bod`}>
        <Avatar url={'https://avatars.githubusercontent.com/u/65801700?v=4'} size={40} borderClass={''}/>
    </main>
  )
}

export default Profile