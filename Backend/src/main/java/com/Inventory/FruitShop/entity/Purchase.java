package com.Inventory.FruitShop.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;


import javax.persistence.*;
import java.sql.Timestamp;


@Entity
@Data
@NoArgsConstructor
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long PurTransactionId ;
    @CreationTimestamp
    private Timestamp PurDaT;
    private long PurQuantityBought;
    private double PurCost;

    @ManyToOne
    @JoinColumn(name = "StoItemId")
    private Stock stock1;
}
