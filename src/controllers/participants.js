// export const getContactsController = async (req, res) => {
//   const userId = req.user._id;
//   const users = await getUsers();

//   res.status(200).json({
//     status: 200,
//     message: 'Successfully found events',
//     data: users,
//   });
// };


// export const createUserController = async (req, res) => {
//   const { name, email, password } = req.body;
//   const userData = {
//     name,
//     email,
//     password,
//   };

//   const createdUser = await createUser(userData);

//   res.status(201).json({
//     status: 201,
//     message: 'Successfully registered user!',
//     data: createdUser,
//   });
// };
