package com.Inventory.FruitShop.serviceImp;

import com.Inventory.FruitShop.entity.Stock;
import com.Inventory.FruitShop.repository.StockRepository;
import com.Inventory.FruitShop.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class StockServiceImp implements StockService {
    @Autowired
    private StockRepository inventoryRepository;
    @Override
    public Stock saveStock(Stock stock){
        return inventoryRepository.save(stock);
    }
    @Override
    public List<Stock> fetchStockList(){
        return inventoryRepository.findAll();
    }
    @Override
    public Stock fetchStockById(Long inventoryId){
        return inventoryRepository.findById(inventoryId).get();
    }
    @Override
    public void deleteStockById(Long inventoryId){
        inventoryRepository.deleteById(inventoryId);
    }
    @Override
    public Stock updateStock(Long ItemId, Stock stock){
        Stock InvDB=inventoryRepository.findById(ItemId).get();
    if(Objects.nonNull(stock.getStoItemName())&& !"".equalsIgnoreCase(stock.getStoItemName())){
        InvDB.setStoItemName(stock.getStoItemName());
    }
    if(Objects.nonNull(stock.getStoQuantity())&&(stock.getStoQuantity()>=0)){
            InvDB.setStoQuantity(stock.getStoQuantity());
        }
    if(Objects.nonNull(stock.getStoSellingPrice())&&(stock.getStoSellingPrice()>0)){
            InvDB.setStoSellingPrice(stock.getStoSellingPrice());
        }

        return inventoryRepository.save(InvDB);
    }
}
