package com.nagarro.productcatalog.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.productcatalog.entities.Pincode;


public interface Pincodedao extends JpaRepository<Pincode, String> {
	List<Pincode> findByPincode(String pincode);

}