import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234567', 10),
    isAdmin: true,
  },
  {
    name: 'Sai Ganesh',
    email: 'ganeshsai287@gmail.com',
    password: bcrypt.hashSync('1234567', 10),
  },
  {
    name: 'Shravani',
    email: 'shravani@gmail.com',
    password: bcrypt.hashSync('1234567', 10),
  },
]

export default users
