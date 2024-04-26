package com.nagarro.productcatalog.model;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.productcatalog.entities.Price;

public interface Pricedao extends JpaRepository<Price, String>{

}
