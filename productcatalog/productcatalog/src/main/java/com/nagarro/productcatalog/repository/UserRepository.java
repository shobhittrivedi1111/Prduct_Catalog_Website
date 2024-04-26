package com.nagarro.productcatalog.repository;

import org.springframework.data.repository.CrudRepository;

import com.nagarro.productcatalog.model.UserDao;

public interface UserRepository extends CrudRepository<UserDao, String> {
    UserDao findByUsername(String username);
}
