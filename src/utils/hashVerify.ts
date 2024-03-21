import bcrypt from 'bcryptjs';

export const verifyPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 8);
};

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const hash = async (password: string) => {
  return await bcrypt.hash(password, 8);
};

export const compare = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const hashSync = (password: string) => {
  return bcrypt.hashSync(password, 8);
};

export const compareSync = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};

export const hashPasswordSync = (password: string) => {
  return bcrypt.hashSync(password, 8);
};