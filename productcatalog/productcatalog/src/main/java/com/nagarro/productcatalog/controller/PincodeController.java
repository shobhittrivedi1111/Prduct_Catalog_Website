package com.nagarro.productcatalog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.productcatalog.UserDetailsService.PincodeService;
import com.nagarro.productcatalog.entities.Pincode;


@RestController
public class PincodeController {
	
	@Autowired
	PincodeService pincodeservice;
	
	@GetMapping("/product/pincode")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<List<Pincode>> getProductByPincode(@RequestParam String pincode 
				) {
		return new ResponseEntity<List<Pincode>>(pincodeservice.findByPincode(pincode), HttpStatus.OK);
	}
}

