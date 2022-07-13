import Joi from 'joi';

const usersSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required()
});

export default usersSchema;