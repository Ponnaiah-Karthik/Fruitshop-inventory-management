package com.Inventory.FruitShop.Controller;

import com.Inventory.FruitShop.entity.Customer;
import com.Inventory.FruitShop.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CustomerController {
    @Autowired
    private CustomerService customerservice;
    @PostMapping("/SaveCustomer")
    public Customer saveCustomer(@RequestBody Customer customer){
        return customerservice.saveCustomer(customer);
    }
    @GetMapping("/GetAllCustomer")
    @CrossOrigin(origins = "http://localhost:8080")
    public List<Customer> fetchCustomerList(){
    return customerservice.fetchCustomerList();
    }
    @GetMapping("/GetCustomerById/{id}")
    public Customer fetchCustomerById(@PathVariable("id") Long CustCustomerid){
        return customerservice.fetchCustomerById(CustCustomerid);
    }
    @DeleteMapping("/DelCustomerById/{id}")
    public String deleteCustomerById(@PathVariable("id") Long CustCustomerid){
        customerservice.deleteCustomerById(CustCustomerid);
        return "Customer deleted successfully";
    }
    @PutMapping("/UpdateCustomerById/{id}")
    public Customer updateConsumer(@PathVariable("id") Long CustCustomerid,@RequestBody Customer customer){
        return customerservice.updateCustomer(CustCustomerid,customer);
    }
}
