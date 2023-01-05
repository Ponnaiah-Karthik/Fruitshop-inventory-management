package com.Inventory.FruitShop.Controller;

import com.Inventory.FruitShop.entity.Purchase;
import com.Inventory.FruitShop.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PurchaseController {
    @Autowired
    private PurchaseService purchaseservice;
    @PostMapping("/SavePurchase")
 public Purchase savePurchase(@RequestBody Purchase purchase){
      return purchaseservice.savePurchase(purchase);
 }
 @GetMapping("/GetAllPurchase")
 public List<Purchase> fetchPurchaseList(){
        return purchaseservice.fetchPurchaseList();
 }
 @GetMapping("/GetPurchaseById/{id}")
 public Purchase fetchPurchaseById(@PathVariable("id") Long PurTransactionId){
        return purchaseservice.fetchPurchaseById(PurTransactionId);
 }
 @DeleteMapping("/DelPurchaseById/{id}")
public String deletePurchaseById(@PathVariable("id") Long PurTransactionId){
        purchaseservice.deletePurchaseById(PurTransactionId);
        return "Purchase deleted successfully";
}
@PutMapping("/UpdatePurchaseById/{id}")
    public Purchase updateStock(@PathVariable("id") Long PurTransactionId, @RequestBody Purchase purchase){
        Timestamp ts=new Timestamp(System.currentTimeMillis());
        purchase.setPurDaT(ts);
        return purchaseservice.updatePurchase(PurTransactionId, purchase);
}
}
