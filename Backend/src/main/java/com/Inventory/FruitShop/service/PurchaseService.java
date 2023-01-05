package com.Inventory.FruitShop.service;

import com.Inventory.FruitShop.entity.Purchase;
import java.util.List;
public interface PurchaseService {

    public Purchase savePurchase(Purchase purchase);
    public List<Purchase> fetchPurchaseList();

   public Purchase fetchPurchaseById(Long transactionId);

   public void deletePurchaseById(Long transactionId);

    public Purchase updatePurchase(Long transactionId, Purchase purchase);
}
