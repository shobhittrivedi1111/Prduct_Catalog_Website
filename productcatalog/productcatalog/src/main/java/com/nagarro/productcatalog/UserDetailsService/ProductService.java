package com.nagarro.productcatalog.UserDetailsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.productcatalog.entities.Product;
import com.nagarro.productcatalog.model.Productdao;



@Service
public class ProductService {

	@Autowired
	private Productdao productdao;
	public List<Product> findByProductCode(String productCode) {
		return productdao.findByProductCode(productCode);
	}

	public List<Product> findByBrand(String brand) {
		return productdao.findByBrand(brand);
	}
	public List<Product> searchProducts(String keyword) {
		return productdao.searchProducts(keyword);
	}
	public List<Product> getProducts() {
		return productdao.findAll();
	}

	
}