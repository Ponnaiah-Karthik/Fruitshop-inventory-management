package com.Inventory.FruitShop.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
@Entity
@Data
@NoArgsConstructor
public class Sales {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long SalBillId;
    private Long SalItemCost;
    @CreationTimestamp
    private Timestamp SalDaT;

    @Column(
            nullable = false
    )
    private Long SalTotalCost;
    private Long SalQuantity;
    @ManyToOne
    @JoinColumn(name = "StoItemId")
    private Stock stock;

    @ManyToOne
    @JoinColumn(name = "CustCustomerid")
  //  @Column(name= "custId")
    private Customer customer;

}
