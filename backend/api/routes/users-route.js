const express = require('express');
const UsersDao = require('../../users-dao');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    res.send({ message: 'should return nothing' });
  })
  .post(async (req, res) => {
    const request = req.body;

    const newUserResponse = await UsersDao.addUser(request);
    const id = newUserResponse.insertedId?.toString();

    res.send({ message: 'user created', id });
  });

router.route('/email/:email').get(async (req, res) => {
  const email = req.params.email;

  const userResponse = await UsersDao.getByEmail(email);

  res.send({ message: 'user found', data: userResponse });
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;

  const userResponse = await UsersDao.getUser(id);

  res.send({ message: 'user found', data: userResponse });
});

router.route('/:id/status').post(async (req, res) => {
  const id = req.params.id;
  const updateInput = req.body;

  const updateStatusResponse = await UsersDao.updateUserStatus(id, updateInput.status);

  res.send({ message: 'user updated', data: updateStatusResponse });
});

module.exports = router;
