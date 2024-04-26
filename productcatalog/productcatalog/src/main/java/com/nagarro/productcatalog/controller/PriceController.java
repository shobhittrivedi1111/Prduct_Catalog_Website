package com.nagarro.productcatalog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.productcatalog.UserDetailsService.PriceService;
import com.nagarro.productcatalog.entities.Price;

@RestController
@CrossOrigin
public class PriceController {
	
	@Autowired
	private PriceService priceservice;
	
	 @GetMapping("/productPrices")
	 @CrossOrigin(origins="http://localhost:4200")
	 public ResponseEntity<?> getProductsPrice(){
	 List<Price> priceList= priceservice.getPrices();
	 return ResponseEntity.ok(priceList);
	 }

}
