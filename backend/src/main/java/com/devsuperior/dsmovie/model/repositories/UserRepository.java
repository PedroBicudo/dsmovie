package com.devsuperior.dsmovie.model.repositories;

import com.devsuperior.dsmovie.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findOneByEmail(String email);

}
