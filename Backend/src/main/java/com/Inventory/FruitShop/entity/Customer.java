package com.Inventory.FruitShop.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Customer {
    private String CustCustomerName;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long CustCustomerid;
    private long CustPhoneNumber;

    @OneToMany(mappedBy = "customer")
    private List<Sales> sales1;
}
