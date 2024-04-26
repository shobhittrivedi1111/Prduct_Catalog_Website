package com.nagarro.productcatalog.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pincode {
	public Pincode() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Pincode(String pincode, String noOfDays) {
		super();
		this.pincode = pincode;
		this.noOfDays = noOfDays;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getNoOfDays() {
		return noOfDays;
	}
	public void setNoOfDays(String noOfDays) {
		this.noOfDays = noOfDays;
	}
	@Id
	private String pincode;
	private String noOfDays;
}
