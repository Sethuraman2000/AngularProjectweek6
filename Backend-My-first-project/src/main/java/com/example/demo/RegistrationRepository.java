package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;


public interface RegistrationRepository extends JpaRepository<User,Integer>{

	public User findByUsername(String username);
	
	public User findByUsernameAndPassword(String username,String password);

	



}
