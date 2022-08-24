package com.example.demo;




import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;





@RestController
public class RegistrationController {
	@Autowired
	private RegistrationService service;
	@Autowired
	private RegistrationRepository repo;
	
	@GetMapping("/getusers")
    public List<User> getAllUsers(){
    
        return repo.findAll();
    }
	
    
	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempusername=user.getUsername();
		if(tempusername!=null && !"".equals(tempusername)) {
			User userObj =service.findByUsername(tempusername);
			if(userObj !=null) {
				throw new Exception("User with "+tempusername+" already exists");
			}
		}
		
	User userObj=null;
	userObj=service.saveUser(user);
	return userObj;
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public User loginuser(@RequestBody User user) throws Exception {
		String tempusername = user.getUsername();
		String temppassword = user.getPassword();
		User userObj=null;
		
		if(tempusername!=null && temppassword!=null)
		{
			userObj=service.findByUsernameAndPassword(tempusername, temppassword);
		}
		if(userObj == null) {
			throw new Exception("Wrong credentials");
		}
		return userObj; 
	}
	
	@PutMapping("/update/{id}")
    public User saveorUpdateuser(@RequestBody User user) {
       repo.save(user);
        return user;
        }
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id)
	{
		repo.deleteById(id);
		System.out.println("The deatils of ID: "+id+" is deleted");
	}
	
	

}

