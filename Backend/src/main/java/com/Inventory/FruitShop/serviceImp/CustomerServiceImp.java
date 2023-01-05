package com.Inventory.FruitShop.serviceImp;

import com.Inventory.FruitShop.entity.Customer;
import com.Inventory.FruitShop.repository.CustomerRepository;
import com.Inventory.FruitShop.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CustomerServiceImp implements CustomerService {
    @Autowired
    private CustomerRepository Customerrepository;



    @Override
    public Customer saveCustomer(Customer customer) {
        return Customerrepository.save(customer);
    }
    @Override
    public List<Customer> fetchCustomerList() {
        return Customerrepository.findAll();
    }
    @Override
    public Customer fetchCustomerById(Long CustCustomerId) {
        return Customerrepository.findById(CustCustomerId).get();
    }

    @Override
    public void deleteCustomerById(Long CustCustomerId) {
        Customerrepository.deleteById(CustCustomerId);
    }

    @Override
    public Customer updateCustomer(Long CustCustomerId, Customer customer) {
        Customer customerdb=Customerrepository.findById(CustCustomerId).get();
            customerdb.setCustCustomerName(customer.getCustCustomerName());
            customerdb.setCustPhoneNumber(customer.getCustPhoneNumber());
            return Customerrepository.save(customerdb);
    }
}
