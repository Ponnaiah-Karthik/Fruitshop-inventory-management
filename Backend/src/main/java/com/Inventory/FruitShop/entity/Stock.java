package com.Inventory.FruitShop.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import java.util.List;


@Entity
@NoArgsConstructor
@Data
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long StoItemId;

    private String StoItemName;

    @Positive
    private Long StoSellingPrice;

    @PositiveOrZero
    private Long StoQuantity;

    @OneToMany(mappedBy = "stock")
    private List<Sales> sales;

    @OneToMany(mappedBy = "stock1")
    private List<Purchase> purchase;

    public void setStoItemId(Long StoItemId) {
        this.StoItemId = StoItemId;
    }

    public void setStoItemName(String StoItemName) {
        this.StoItemName = StoItemName;
    }

    public void setStoSellingPrice(@Positive Long StoSellingPrice) {
        this.StoSellingPrice = StoSellingPrice;
    }

    public void setStoQuantity(@PositiveOrZero Long StoQuantity) {
        this.StoQuantity = StoQuantity;
    }

    public void setSales(List<Sales> sales) {
        this.sales = sales;
    }

    public void setPurchase(List<Purchase> purchase) {
        this.purchase = purchase;
    }
    /*private Stock stock;
    Stock(Long IdFromPurchase){
        stock.getStock();
    }*/
}
