package com.Inventory.FruitShop.service;

import com.Inventory.FruitShop.entity.Stock;
import java.util.List;

public interface StockService {
    public Stock saveStock(Stock stock);

    public List<Stock> fetchStockList();

    public Stock fetchStockById(Long stockId);

    public void deleteStockById(Long stockId);

    public Stock updateStock(Long stockId, Stock stock);
}
