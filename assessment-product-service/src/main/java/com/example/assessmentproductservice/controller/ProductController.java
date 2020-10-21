package com.example.assessmentproductservice.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.assessmentproductservice.model.Product;
import com.example.assessmentproductservice.service.ProductService;

@RestController
@RequestMapping("/product")
//@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/list")
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}	
	
	@GetMapping("/{id}")  
	private Product getProductInfo(@PathVariable("id") int id) {  
		return productService.getProductById(id);  
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	@ResponseBody
	private String saveProductInfo(@RequestBody Product product) { 
	   DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	   LocalDateTime now = LocalDateTime.now();

		product.setDateTime(dtf.format(now));
		productService.saveOrUpdate(product);  
	return "Product is successfully created - id: " + product.getId();
	}


	@PutMapping("/update/{id}")
	private int updateProductInfo(@RequestBody Product product, @PathVariable("id") int id) {
	    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	    LocalDateTime now = LocalDateTime.now();
	    
		product.setDateTime(dtf.format(now));
		product.setId(id);
		
		productService.saveOrUpdate(product);
	return product.getId();
	}  
	
	@DeleteMapping("/delete/{id}")
	private String deleteProduct(@PathVariable("id") int id) {  
		productService.delete(id);
		return "Product info successfully deleted - " + id;
	}
	
}
