package com.nagarro.productcatalog.UserDetailsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.productcatalog.entities.Price;
import com.nagarro.productcatalog.model.Pricedao;

@Service
public class PriceService {
	@Autowired
	private Pricedao pricedao;
	
	public List<Price> getPrices(){
		return pricedao.findAll();
		}
}
