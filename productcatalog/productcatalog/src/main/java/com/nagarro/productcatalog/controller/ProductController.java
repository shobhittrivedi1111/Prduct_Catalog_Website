package com.nagarro.productcatalog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.productcatalog.UserDetailsService.ProductService;
import com.nagarro.productcatalog.entities.Product;
import com.nagarro.productcatalog.model.Productdao;



@RestController
@CrossOrigin
public class ProductController {
	@Autowired
	ProductService productService;

	@Autowired
	Productdao productdao;

	@GetMapping("/product/productcode")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Product>> getProductByProductCode(@RequestParam String productCode) {
		return new ResponseEntity<List<Product>>(productService.findByProductCode(productCode), HttpStatus.OK);
	}

	@GetMapping("/product/brand")
	public ResponseEntity<List<Product>> getProductBybrand(@RequestParam String brand) {
		return new ResponseEntity<List<Product>>(productService.findByBrand(brand), HttpStatus.OK);
	}

	@GetMapping("/product/search")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Product>> searchProducts(@RequestParam("keyword") String keyword) {
		return new ResponseEntity<List<Product>>(productService.searchProducts(keyword), HttpStatus.OK);
	}

	@GetMapping("/product")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Product> getProducts() {
		return productService.getProducts();
	}

}

