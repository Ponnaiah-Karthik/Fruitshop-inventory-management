package com.Inventory.FruitShop.service;

import com.Inventory.FruitShop.entity.Customer;
import java.util.List;
public interface CustomerService {
    public Customer saveCustomer(Customer customer);
    public List<Customer> fetchCustomerList();

    public  Customer fetchCustomerById(Long CustCustomerid);

    public void deleteCustomerById(Long CustCustomerid);

    public Customer updateCustomer(Long CustCustomerid, Customer customer);
}
