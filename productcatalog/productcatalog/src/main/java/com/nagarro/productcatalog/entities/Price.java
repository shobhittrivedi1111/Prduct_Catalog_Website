package com.nagarro.productcatalog.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Price {
	@Id
	private String productCode;
	public Price() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Price(String productCode, String price) {
		super();
		this.productCode = productCode;
		this.price = price;
	}
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	private String price;
}
