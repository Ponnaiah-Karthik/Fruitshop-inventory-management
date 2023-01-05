package com.Inventory.FruitShop.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@GetMapping("/")
	public String helloWorld() {
		return "Hello from Controller";
	}
}
