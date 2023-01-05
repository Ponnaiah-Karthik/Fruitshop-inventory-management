package com.Inventory.FruitShop.Controller;

import com.Inventory.FruitShop.entity.Stock;
import com.Inventory.FruitShop.service.StockService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class StockController {
    @Autowired
    private StockService StockService;

    private final Logger LOGGER= LoggerFactory.getLogger(StockController.class);
    @PostMapping("/SaveStock")
    public Stock saveInventory(@Valid @RequestBody Stock stock){
        LOGGER.info("Inside saveInventory of StockController");
        return StockService.saveStock(stock);
    }
    @GetMapping("/GetAllStock")
    public List<Stock> fetchStockList(){
        LOGGER.info("Inside fetchStockList of StockController");
        return StockService.fetchStockList();
    }
    @GetMapping("/GetStockById/{id}")
    public Stock fetchStockById(@PathVariable("id") Long StoItemId){
        return StockService.fetchStockById(StoItemId);
    }
    @DeleteMapping("/DelStockById/{id}")
    public String DeleteInventoryById(@PathVariable("id") Long StoItemId){
        StockService.deleteStockById(StoItemId);
        return "Inventory Deleted Successfully!";
    }
    @PutMapping("/UpdateStockById/{id}")
    public Stock updateInventory(@PathVariable("id") Long StoItemId, @RequestBody Stock stock){
        return StockService.updateStock(StoItemId, stock);

    }
}








