package com.nagarro.productcatalog.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nagarro.productcatalog.entities.Product;


public interface Productdao extends JpaRepository<Product, String> {
	List<Product> findByProductCode(String productCode);
	List<Product> findByBrand(String brand);

	@Query("SELECT p FROM Product p WHERE "+ "CONCAT(p.productCode,p.brand,p.name)" +"LIKE %?1%")
	public List<Product> searchProducts(String keyword);
}

