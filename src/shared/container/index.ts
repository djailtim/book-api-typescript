import { container } from 'tsyringe';

import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/repositories/UsersRepository';

// import { IStatementsRepository } from '../../modules/statements/repositories/IStatementsRepository';
// import { StatementsRepository } from '../../modules/statements/repositories/StatementsRepository';

import { ICategoriesRepository } from '../../modules/categories/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/categories/repositories/CategoriesRepository';

import { IBooksRepository } from '../../modules/books/repositories/IBooksRepository';
import { BooksRepository } from '../../modules/books/repositories/BooksRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

// container.registerSingleton<IStatementsRepository>(
//   'StatementsRepository',
//   StatementsRepository
// );

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

container.registerSingleton<IBooksRepository>(
  'BooksRepository',
  BooksRepository
);
