package com.nagarro.productcatalog.UserDetailsService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.productcatalog.entities.Pincode;
import com.nagarro.productcatalog.model.Pincodedao;



@Service
public class PincodeService {

	@Autowired
	private Pincodedao pincodedao;
	
	public List<Pincode> findByPincode(String pincode) {
		// TODO Auto-generated method stub
		return pincodedao.findByPincode(pincode);
	}
}
