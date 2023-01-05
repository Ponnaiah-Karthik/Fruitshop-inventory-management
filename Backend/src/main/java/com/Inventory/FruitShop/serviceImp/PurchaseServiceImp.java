package com.Inventory.FruitShop.serviceImp;

import com.Inventory.FruitShop.entity.Purchase;
import com.Inventory.FruitShop.repository.PurchaseRepository;
import com.Inventory.FruitShop.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class PurchaseServiceImp implements PurchaseService {
    @Autowired
    private PurchaseRepository stockRepository;



    @Override
    public Purchase savePurchase(Purchase purchase) {
        return stockRepository.save(purchase);
    }
    @Override
    public List<Purchase> fetchPurchaseList() {
        return stockRepository.findAll();
    }

    @Override
    public Purchase fetchPurchaseById(Long transactionId) {
        return stockRepository.findById(transactionId).get();
    }

    @Override
    public void deletePurchaseById(Long transactionId) {
        stockRepository.deleteById(transactionId);
    }

    @Override
    public Purchase updatePurchase(Long transactionId, Purchase purchase) {
        Purchase stockdb=stockRepository.findById(transactionId).get();
        if(Objects.nonNull(purchase.getPurTransactionId())){
            stockdb.setPurTransactionId(purchase.getPurTransactionId());
        }
        if(Objects.nonNull(purchase.getPurCost())){
            stockdb.setPurCost(purchase.getPurCost());
        }
        if(Objects.nonNull(purchase.getPurQuantityBought())){
            stockdb.setPurQuantityBought(purchase.getPurQuantityBought());
        }
        if(Objects.nonNull(purchase.getPurDaT())){
            stockdb.setPurDaT(purchase.getPurDaT());
        }
        return stockRepository.save(stockdb);
    }
}

