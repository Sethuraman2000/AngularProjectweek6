package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
public class RegistrationService {
	@Autowired
	private RegistrationRepository repo;
	
	
	
	public User saveUser(User user) {
		return repo.save(user);
	}
	
	public User findByUsername(String username) {
		return repo.findByUsername(username);
		
	}
	public User findByUsernameAndPassword(String username,String password) {
		return repo.findByUsernameAndPassword(username,password);
		
	}


}
